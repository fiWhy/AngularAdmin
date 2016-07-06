import {carrentalConfig} from './config/bootstrap';
import {CarRentalController} from './controllers/car.rental.controller';
import {CarRentalService} from './services/car.rental.service';
import {CarRentalResource} from './resources/car.rental.resource';

angular.module('app.modules.carrental', [])
    .config(carrentalConfig)
    .service('CarRentalResource', CarRentalResource)
    .service('CarRentalService', CarRentalService)
    .controller('CarRentalController', CarRentalController);
