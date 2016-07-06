export class Checkbox {
    constructor(scope, element, attrs) {
        this.indeterminateCheckbox(element);
    }

    indeterminateCheckbox(element) {
        // Set checkbox on forms.html to indeterminate
        if (element[0].id == 'indeterminate-checkbox')
            element[0].indeterminate = true;
    }
}