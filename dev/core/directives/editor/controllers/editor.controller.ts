import {IEditorService} from '../services/editor.service';

export class EditorController {
    static $inject = ['EditorService', '$rootScope', '$scope', 'ngDialog', 'config'];
    private mainPath;
    constructor(
        private EditorService: IEditorService,
        private $rootScope,
        private $scope: ng.IScope,
        private ngDialog,
        private config
    ) {
        this.mainPath = config.documentRoot;
        this.listenElfinder();
    }

    private listenElfinder() {
        let self = this;
        this.$rootScope.$on('openElfinder', (e) => {
            if (!this.$rootScope.elfinderOpened) {
                this.$rootScope.elfinderOpened = true;
                this.ngDialog.open({
                    template: 'elfinder.html',
                    //parent: angular.element(document.body),
                    //clickOutsideToClose: false,

                    preCloseCallback: function (value) {
                        self.$rootScope.elfinderOpened = false;
                        return true;
                    }
                });

            } 


        });
    }   
}