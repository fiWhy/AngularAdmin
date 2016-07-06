export interface ISweetAlertService {
    setOptions(options: {}): SweetAlertService;
    showAlert(callback?): void;
}

export class SweetAlertService
    implements ISweetAlertService {
    private sweetAlertOptions;
    private usableOptions;
    private callBack;
    constructor() {
        this.usableOptions = {};
        this.sweetAlertOptions = {
           type: "success",   
           showCancelButton: false,   
           confirmButtonColor: "#DD6B55",   
           confirmButtonText: "Ok!",   
           cancelButtonText: "No, cancel plx!",   
           closeOnConfirm: true,   
           closeOnCancel: true,
           text: '',
           title: ''
        }
    }

    setOptions(options): SweetAlertService {
        this.usableOptions = angular.extend({}, this.sweetAlertOptions, options);
        return this;
    }

    showAlert(callback?): void {
        swal(this.usableOptions, callback);
        this.clearData();
    }
    
    
    private clearData(): void {
        this.usableOptions = {};
    }
}


angular.module('app.core.services.alert.sweet', [])
    .service('SweetAlertService', SweetAlertService);