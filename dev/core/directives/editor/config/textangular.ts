WYSIWYG.$inject = ['$provide'];
export function WYSIWYG($provide) {
    $provide.decorator('taOptions', ['$delegate', function (taOptions) {
        taOptions.toolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
            ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
            ['html', 'insertImage', 'elfinder', 'insertLink', 'insertVideo']
        ];

        return taOptions;
    }]);
}

WYSIWYG_TOOLS.$inject = ['$provide'];
export function WYSIWYG_TOOLS($provide) {
    $provide.decorator('taOptions', ['$rootScope',
        '$document',
        '$window',
        '$delegate',
        'taRegisterTool',
        'taExecCommand',
        function ($rootScope,
            $document,
            $window,
            taOptions,
            taRegisterTool,
            taExecCommand) {

            taRegisterTool("elfinder", {
                iconclass: 'fa fa-picture-o icon-file-picture',
                tooltiptext: 'Insert image',

                action: function (deffer, restoreSelection) {
                    $.colorbox({
                        href: '/elfinder',
                        fastIframe: true,
                        iframe: true,
                        width: "70%",
                        height: "50%"
                    });
                    $rootScope.$emit('openAdvancedImageDialog', this, deffer);
                    var thatLink = this;

                    deffer.promise.then(function (imageLink) {
                        restoreSelection();
                        thatLink.$editor().wrapSelection('insertImage', imageLink, true);
                    });

                    return false;

                },
                onElementSelect: {
                    element: 'img',
                    action: function () {
                        //too long to put here
                    }
                }
            });


            return taOptions;

        }]);
}