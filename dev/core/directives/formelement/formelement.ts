import {InputDirective} from './input/input.directive';
import {ConvertToNumber} from './select/convert.to.number.directive';

angular.module('app.core.directives.formelement', [])
    //# Input directive
    .directive('input', () => new InputDirective)
    .directive('convertToNumber', () => new ConvertToNumber)
    