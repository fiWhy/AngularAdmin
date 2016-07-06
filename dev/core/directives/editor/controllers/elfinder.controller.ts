export class ElfinderController {
    static $inject = ['$scope', 'ngDialog', '$rootScope', '$state', '$location', '$window', '$q', '$timeout'];
    private hash;
    private dialog;
    constructor(
        private $scope,
        private ngDialog,
        private $rootScope,
        private $state: ng.ui.IStateService,
        private $location: ng.ILocationService, 
        private $window,
        private $q: ng.IQService,
        private $timeout: ng.ITimeoutService
    ) {
    }

    prepareHandler() {
        this.$window['handleElfinderFiles'] = this.handleElfinderFiles.bind(this);
    }

    openElfinder() {
        let self = this;
        
        this.watchingHash();
        if (!this.$rootScope.elfinderOpened) {
            this.prepareHandler();
            this.$scope.dialog = this.ngDialog.open({
                template: 'elfinder.html',
                scope: this.$scope,
                preCloseCallback: function (value) {
                    self.$rootScope.elfinderOpened = false;
                    return true;
                }
            });
            this.$rootScope.elfinderOpened = true;
        } 

    }

    watchingHash() {
        //if(!this.hash)
        //    this.hash = location.hash;

        //this.$scope.$watch(() => location.hash, (o, n) => {
        //    console.log(n);
        //    if (n !== this.hash) {
        //        location.hash = this.hash;
        //    }
        //})
    }

    handleElfinderFiles(response) {
        console.log('scope - ' + this.$scope.$id);
        this.$timeout(() => {
            if (this.$scope.model || this.$scope.model === null) this.$scope.model = '/' + response.path;
            if (this.$scope.callback) this.$scope.callback({ file: response });
        });
            //this.resetHash();
            //this.$scope.$apply();
    }

    resetHash() {
        location.hash = this.hash;
    }

    getFile(file) {
        this.$scope.model = file.url;
    }
}