export class SelectDirective {
    restrict: string = 'E';
    link(scope, element, attrs) {
        $(element).not('.disabled').material_select();
    }
}