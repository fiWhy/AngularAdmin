import {SweetAlertService} from './alerts/sweet.alert.service';
import {ToastAlertService} from './alerts/toast.alert.service';

angular.module('app.core.services.alerts', [])
    .service('SweetAlertService', SweetAlertService)
    .service('ToastAlertService', ToastAlertService);