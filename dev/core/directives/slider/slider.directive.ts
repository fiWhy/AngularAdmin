export class SliderDirective {
    restrict: string = 'AC';
    link(scope, element, attrs) {
        var full_width = attrs.full_width || true;
        $(element).slider({
            full_width: full_width
        });
    }
}