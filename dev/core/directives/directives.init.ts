import './formelement/formelement';
import './menu/menu.directive';
import './table/table.directive';
import './editor/editor.directive';
import './editor/elfinder.directive';
import './breadcrumps/breadcrumps.directive';
import {TaskCardDirective} from './taskcard/taskcard.directive';
import {SliderDirective} from './slider/slider.directive';
import {DropdownDirective} from './dropdown/dropdown.directive';
import {ParallaxDirective} from './parallax/parallax.directive';
import {SidebarDirective} from './sidebar/sidebar.directive';

angular.module('app.core.directives', [
    'app.core.directives.formelement',
    'app.core.directives.menu',
    'app.core.directives.table',
    'app.core.directives.editor',
    'app.core.directives.elfinder',
    'app.core.directives.breadcrumps'
])
    //# Task card
    .directive('taskCard', () => new TaskCardDirective)
    
    //# Slider 
    .directive('slider', () => new SliderDirective)
    
    //# Dropdown 
    .directive('dropdown', () => new DropdownDirective)
    
    //# Parallax 
    .directive('parallax', () => new ParallaxDirective)
    
    //# Sidebar 
    .directive('sidebar', () => new SidebarDirective)