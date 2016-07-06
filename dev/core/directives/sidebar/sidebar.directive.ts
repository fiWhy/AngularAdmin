export class SidebarDirective {
    restrict: string = 'AC';
    link(scope, element, attrs) {
        $(element).sideNav({
            edge: 'left'  
        });
    }
}