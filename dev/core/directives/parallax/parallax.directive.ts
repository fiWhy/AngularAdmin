export class ParallaxDirective {
    restrict: string = 'EAC';
    link(scope, element, attrs) {
        $(element).parallax();
    }
}