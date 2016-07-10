import {SliderController} from './controllers/slider.controller';
import {SliderCreateController} from './controllers/slider.create.controller';
import {SliderUpdateController} from './controllers/slider.update.controller';
import {SliderService} from './services/slider.service';
import {SliderResource} from './resources/slider.resource';
import {bootstrap} from './config/bootstrap';

angular.module('app.modules.slider', [])
    .controller('SliderController', SliderController)
    .controller('SliderCreateController', SliderCreateController)
    .controller('SliderUpdateController', SliderUpdateController)
    .factory('SliderResource', SliderResource)
    .service('SliderService', SliderService)
    .config(bootstrap);