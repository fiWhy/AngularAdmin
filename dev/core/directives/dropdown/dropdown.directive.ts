export class DropdownDirective {
    restrict: string =  'EAC';
    link(scope, element, attrs) {
        // Materialize Dropdown
        var constrain_width = true,
            hover = false;

        if (attrs.type == 'notification') {
            constrain_width = false;
            hover = true;
        }

        $(element).dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: constrain_width, // Does not change width of dropdown to that of the activator
            hover: hover, // Activate on click
            alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
            gutter: 0, // Spacing from edge
            belowOrigin: true // Displays dropdown below the button
        });
    }
}