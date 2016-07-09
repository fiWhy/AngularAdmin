export interface INgToastAlertService {
    showAlert(html: string, type?: string, hideDelay?: number);
}

export class NgToastAlertService
    implements INgToastAlertService {
    static $inject: string[] = ['$rootScope', '$compile', 'ngToast'];

    constructor(private $rootScope, private $compile, private ngToast) {

    }

    showAlert(html, type = 'warning', hideDelay = 4000) {
        return this.ngToast.create({
            className: type,
            content: html,
            timeout: hideDelay
        });
    }
}

angular.module('app.core.services.alert.ngtoast', [])
    .service('NgToastAlertService', NgToastAlertService);

