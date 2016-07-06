import {Checkbox} from './inputs/checkbox';

export class InputDirective {
    restrict: string = 'E';
    link(scope, element, attrs) {
        var type = attrs.type;
        switch (type) {
            case 'checkbox':
                new Checkbox(scope, element, attrs);
                break;
        }
    }
}

