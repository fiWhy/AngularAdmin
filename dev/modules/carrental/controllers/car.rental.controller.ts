import {ICarRentalService} from '../services/car.rental.service';
import {ICarEntity} from '../entities/car.entity';
export class CarRentalController {
    public static $inject = ['CarRentalService'];
    public list: ICarEntity[];
    constructor(private CarRentalService: ICarRentalService) {
        this.CarRentalService.getList().then((response) => {
            this.list = response;
        });
    }
}