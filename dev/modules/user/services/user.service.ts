import {IAuthorizeService} from '../../../core/services/authorize/authorize.service';
import {IAuthorizeEntity} from '../../../core/services/authorize/entity/authorize.entity';
import {IUserEntity} from '../../../core/entity/user.entity';
import {ISingleResponse} from '../../../core/entity/r.entity';

export interface IUserServiceImplementation {
    login(data);
    logout(): void;
    reset(data): ng.IPromise<ISingleResponse<IUserEntity>>;
}

export class UserServiceImplementation 
    implements IUserServiceImplementation{
        static $inject = ['AuthorizeService'];
        constructor(private AuthorizeService: IAuthorizeService) {
            
        }

        public login(data): ng.IPromise<IAuthorizeEntity> {
            return this.AuthorizeService.login(data)
                .then((res) => {
                    return res.data;
                });
        }
        
        public logout(): void {
            this.AuthorizeService.logout();
        }

        public reset(data): ng.IPromise<ISingleResponse<IUserEntity>> {
            return this.AuthorizeService.reset(data);
        }
}