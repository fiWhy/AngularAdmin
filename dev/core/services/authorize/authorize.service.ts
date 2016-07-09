import {authorizeConfig} from './config/authorize.config';
import {AuthorizeResource} from './resources/authorize.resource';
import {IAuthorizeEntity} from './entity/authorize.entity';
import {IUserEntity} from '../../entity/user.entity';
import {ITokenEntity} from './entity/token.entity';
import {INgToastAlertService} from '../alert/alerts/ngtoast.alert.service';
import {ISingleResponse} from "../../entity/r.entity";

/**
 * MockBackend
 */
// import {mock} from './mock/authorize.mock.ts';

export interface IAuthorizeService {
    isLoggedIn(): boolean;
    checkIsTokenExpired(): boolean;
    getCurrentUser(): string;
    logout(): void;
    login(data): ng.IPromise<ISingleResponse<IAuthorizeEntity>>;
    reset(data): ng.IPromise<ISingleResponse<IUserEntity>>;
}



class AuthorizeService
    implements IAuthorizeService {
    static $inject: string[] = ['AuthorizeResource', '$cookies', 'config', 'NgToastAlertService', '$q'];

    constructor(private AuthorizeResource,
        private $cookies: ng.cookies.ICookiesService,
        private config,
        private NgToastAlertService: INgToastAlertService,
        private $q: ng.IQService) {

    }

    private authorize(name: string, token: string): void {
        this.$cookies.put('token', token);
        this.$cookies.put('user', name);
    }

    checkIsTokenExpired(): boolean {
        var currentDate = new Date(),
            expireTime = this.$cookies.get('token');
        // return (currentDate.getTime()/1000) >= expireTime;
        if(!expireTime) return true;
        return false;
    }

    isLoggedIn(): boolean {
        var token = this.$cookies.get('token');
        return token !== undefined;
    }

    getCurrentUser(): string {
        var user = this.$cookies.get('user');
        return user;
    }

    logout(): void {
        this.$cookies.remove('token');
        this.$cookies.remove('user');
    }

    login(data): ng.IPromise<ISingleResponse<IAuthorizeEntity>> {
        var user = this.AuthorizeResource.login(data).$promise;
        user.then((response) => {
            if (response.data.name && response.data.token !== null) {
                this.authorize(response.data.name, response.data.token);
            } else {
                return this.$q.reject();
            }
        }, (error) => {
            this.NgToastAlertService.showAlert(error.data.message);
        });
        return user;
    }
    
    reset(data): ng.IPromise<ISingleResponse<IUserEntity>> {
        return this.AuthorizeResource.reset(data).$promise;
    }

}


angular.module('app.core.services.authorize', [])
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);