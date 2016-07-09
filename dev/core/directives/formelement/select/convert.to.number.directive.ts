export class ConvertToNumber implements ng.IDirective {
    require = 'ngModel';
    link(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function (val) {
            return parseInt(val, 10);
        });
        ngModel.$formatters.push(function (val) {
            return '' + val;
        });
    }
}