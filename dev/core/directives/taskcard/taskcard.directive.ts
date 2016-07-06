export class TaskCardDirective {
    restrict: string = 'AC';
    link(scope, element, attrs) {
        // Check Uncheck function
        function checkbox_check(el) {
            if (!$(el).is(':checked')) {
                $(el).next().css('text-decoration', 'none'); // or addClass            
            } else {
                $(el).next().css('text-decoration', 'line-through'); //or addClass
            }
        }

        var checkboxes = $(element).find('input:checkbox');


        checkboxes.each((key, el) => {
            checkbox_check(el);
        })

        checkboxes.on('change', (e) => {
            checkbox_check(e.target);
        })
    }
}