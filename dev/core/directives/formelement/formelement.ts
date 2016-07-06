import {InputDirective} from './input/input.directive';
import {SelectDirective} from './select/select.directive';

angular.module('app.core.directives.formelement', [])
    //# Input directive
    .directive('input', () => new InputDirective)
    
    //# Select directive
    .directive('select', () => new SelectDirective)