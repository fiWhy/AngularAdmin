import {IUserServiceImplementation} from '../services/user.service';
import {INgToastAlertService} from '../../../core/services/alert/alerts/ngtoast.alert.service';
import {ISweetAlertService} from '../../../core/services/alert/alerts/sweet.alert.service';

interface IUserController {
    loginData: {};
    resetData: {};
}

export class UserController
    implements IUserController {
    static $inject = ['UserService', 'NgToastAlertService', 'SweetAlertService', '$state'];
    loginData: {};
    resetData: {};
    constructor(private UserService: IUserServiceImplementation,
        private NgToastAlertService: INgToastAlertService,
        private SweetAlertService: ISweetAlertService,
        private $state: ng.ui.IStateService) {
        
    }

    login() {
        this.UserService.login(this.loginData)
            .then((response) => {
                this.$state.go('dashboard');
            });
    }

    logout() {
        this.UserService.logout();
        this.$state.go('user.login');

    }

    reset() {
        this.UserService.reset(this.resetData)
            .then((response) => {
                this.SweetAlertService.setOptions({
                    closeOnConfirm: true,
                    title: 'Success!',
                    text: 'Your password has been sent to your email!'
                }).showAlert();
            }, (error) => {
                this.SweetAlertService.setOptions({
                    closeOnConfirm: true,
                    type: 'error',
                    title: 'Error!',
                    text: error.data.error_message
                }).showAlert();
            });
    }
}