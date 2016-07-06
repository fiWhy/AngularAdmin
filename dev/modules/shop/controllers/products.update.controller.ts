import {UpdateController} from '../../../core/base/controller/update.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {IProduct, Product} from '../entities/products.entity';
import {Image} from '../entities/images.entity';
import {IColorsService} from '../services/colors.service';
import {ISizesService} from '../services/sizes.service';
import {IBrandsService} from '../services/brands.service';
import {ICategoriesService} from '../services/categories.service';

export class ProductsUpdateController extends UpdateController<IProduct> {
    static $inject = ['ProductsService', 'ColorsService', 'SizesService', 'BrandsService', 'CategoriesService', '$state', 'SweetAlertService'];
    private colors;
    private sizes;
    private brands;
    private categories;
    constructor(
        public service,
        private ColorsService: IColorsService,
        private SizesService: ISizesService,
        private BrandsService: IBrandsService,
        private CategoriesService: ICategoriesService, 
        private $state: ng.ui.IStateService,
        private SweetAlertService
    ) {
        super();
        this.setBreadcrumps();
        this.getColors()
            .then(() => {
                return this.getSizes();
            })
            .then(() => {
                return this.getBrands();
            })
            .then(() => {
                return this.getCategories();
            })
            .then(() => {
                this.load($state.params['id']);
            });

    }

    private getNewImages(files) {
        this.item.images.data.push(new Image({
            image: '/' + files.path
        }));
    }

    private removeImage(index) {
        this.item.images.data.splice(index, 1);
    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список продуктов', 'products.list'),
            new Breadcrump('Обновление продукта', 'products.edit')
        ];
    }

    update() {
        super.update()
            .then(() => {
                this.SweetAlertService.setOptions({
                    title: 'Обновлено!',
                    text: 'Запись успешно обновлена'
                });
                this.SweetAlertService.showAlert();
            });
    }

    getColors() {
        return this.ColorsService.getList()
            .then((response) => {
                this.colors = response.data;
            });
    }

    getSizes() {
        return this.SizesService.getList()
            .then((response) => {
                this.sizes = response.data;
            });
    }

    getBrands() {
        return this.BrandsService.getList()
            .then((response) => {
                this.brands = response.data;
            });
    }

    getCategories() {
        return this.CategoriesService.getList()
            .then((response) => {
                this.categories = response.data;
            });
    }
}