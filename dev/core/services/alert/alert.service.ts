import {SweetAlertService} from './alerts/sweet.alert.service';
import {NgToastAlertService} from './alerts/ngtoast.alert.service';
    
angular.module('app.core.services.alerts', [])
    .service('SweetAlertService', SweetAlertService)
    .service('NgToastAlertService', NgToastAlertService);