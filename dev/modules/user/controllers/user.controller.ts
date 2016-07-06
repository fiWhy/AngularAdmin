import {IUserServiceImplementation} from '../services/user.service';
import {IToastAlertService} from '../../../core/services/alert/alerts/toast.alert.service';
import {ISweetAlertService} from '../../../core/services/alert/alerts/sweet.alert.service';

interface IUserController {
    loginData: {};
    resetData: {};
}

export class UserController
    implements IUserController {
    static $inject = ['UserService', 'ToastAlertService', 'SweetAlertService', '$state'];
    loginData: {};
    resetData: {};
    constructor(private UserService: IUserServiceImplementation,
        private ToastAlertService: IToastAlertService,
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