export interface IToastAlertService {
    setVertical(position: string): IToastAlertService;
    setHorizontal(position: string): IToastAlertService;
    showCustomAlert(msg: string, html: string, ctrl, element: HTMLBaseElement, hideDelay?: number): void;
    showSimpleAlert(msg: string, hideDelay?: number): void;
    showActionAlert(msg: string, ctrl): void;
    setAction(actionName: string, actionCallback): void;
}

export class ToastAlertService
    implements IToastAlertService {
    static $inject: string[] = ['$rootScope', '$compile', '$mdToast'];
    private positions: {};
    private positionVertical: string = 'top';
    private positionHorizontal: string = 'right';
    
    private action: { actionName: string, actionCallback } = {
        actionName: '',
        actionCallback: () => {}
    };
    
    constructor(private $rootScope, private $compile, private $mdToast) {
        this.positions = {
            'top': true,
            'bottom': false,
            'left': false,
            'right': true
        }
    }

    setVertical(position: string): IToastAlertService {
        var verticalPositions = ['top', 'bottom'];
        if (verticalPositions.indexOf(position) < 0)
            throw 'Sorry, but your position does not exists. You could choose from: top, bottom!';

        verticalPositions.every((pos) => {
            var value = false;
            if (pos == position) {
                value = true;
            }
            this.positions[pos] = value;
            return false;
        });

        return this;
    }

    setHorizontal(position: string): IToastAlertService {
        var horizontalPositions = ['left', 'right'];
        if (horizontalPositions.indexOf(position) < 0)
            throw 'Sorry, but your position does not exists. You could choose from: left, right!';

        horizontalPositions.every((pos) => {
            var value = false;
            if (pos == position) {
                value = true;
            }
            this.positions[pos] = value;
            return false;
        });

        return this;
    }

    setAction(actionName: string, actionCallback): IToastAlertService {
        if (!actionCallback)
            throw 'You missed the action callback! Please, provide it!';
        this.action.actionName = actionName;
        this.action.actionCallback = actionCallback;
        
        return this;
    }

    private getToastPosition(): {} {
        var self = this;
        return Object.keys(this.positions)
            .filter(function(pos) { return self.positions[pos]; })
            .join(' ');
    }

    private takeController(ctrl: any): string {
        switch (typeof ctrl) {
            case 'string':
                return ctrl;
            case 'object':
                return ctrl.constructor.name;
        }
    }

    showCustomAlert(msg: string, html: string, ctrl, element: HTMLBaseElement, hideDelay?: number): void {
        this.$mdToast.show({
            controller: this.takeController(ctrl),
            templateUrl: html || './core/services/alert/templates/alert.template.html',
            parent: element || document.body,
            hideDelay: hideDelay || 6000,
            position: this.getToastPosition()
        });
    }

    showSimpleAlert(msg: string, hideDelay?: number): void {
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent(msg)
                .position(this.getToastPosition())
                .hideDelay(hideDelay || 3000)
        );
    }

    showActionAlert(msg: string): void {
        if (!this.action.actionName || !this.action.actionCallback)
            throw 'Please, provide action name and callback by using setAction method!';
        var self = this;
        var toast = this.$mdToast.simple()
            .textContent(msg)
            .action(this.action.actionName)
            .highlightAction(false)
            .position(this.getToastPosition());

        this.$mdToast.show(toast).then(function(response) {
            if (response == 'ok') {
                self.action.actionCallback()
            }
        });
    }
}

angular.module('app.core.services.alert.toast', [])
    .service('ToastAlertService', ToastAlertService);