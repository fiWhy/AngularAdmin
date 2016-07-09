import {CreateController} from '../../../core/base/controller/create.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {IProduct, Product} from '../entities/products.entity';
import {IColorsService} from '../services/colors.service';
import {ISizesService} from '../services/sizes.service';
import {IBrandsService} from '../services/brands.service';
import {ICategoriesService} from '../services/categories.service';
import {ILanguagesService} from '../../../core/services/languages/languages.service';
import {ILanguage} from '../../../core/services/languages/entities/languages.entity';
import {Image, IImage} from '../entities/images.entity';

export class ProductsCreateController extends CreateController<IProduct> {
    static $inject = ['ProductsService', 'ColorsService', 'SizesService', 'BrandsService', 'CategoriesService', 'LanguagesService', '$state', 'SweetAlertService'];
    private colors;
    private sizes;
    private brands;
    private categories;
    private languages;
    constructor(
        public service,
        private ColorsService: IColorsService,
        private SizesService: ISizesService,
        private BrandsService: IBrandsService,
        private CategoriesService: ICategoriesService,
        private LanguagesService: ILanguagesService,
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
                return this.getLanguages();
            })
            .then(() => {
                this.item = new Product({
                    images: []
                });     
            });

    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список продуктов', 'products.list'),
            new Breadcrump('Создание продукта', 'products.create')
        ];
    }

    create() {
        super.create()
            .then(() => {
                this.SweetAlertService.setOptions({
                    title: 'Создано!',
                    text: 'Продукт успешно обновлен'
                });
                this.SweetAlertService.showAlert();
            });
    }


    getPrimaryImage(file) {
        this.item.primary_image = '/' + file.path;
    }

    getSecondaryImage(file) {
        this.item.secondary_image = '/' + file.path;
    }

    getBackgroundImage(file) {
        this.item.background_image = '/' + file.path;
    }

    getNewImages(file) {
        this.item.images.push(new Image({
            image: '/' + file.path
        }));
    }


    getLanguages() {
        return this.LanguagesService.getLanguages()
            .then((response) => {
                this.languages = response.data;
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