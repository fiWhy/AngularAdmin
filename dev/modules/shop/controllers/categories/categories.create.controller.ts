import {CreateController} from '../../../../core/base/controller/create.controller';
import {Breadcrump} from '../../../../core/entity/breadcrumps.entity';
import {ICategory, Category} from '../../entities/categories.entity';
import {ICategoriesService} from '../../services/categories.service';
import {ILanguagesService} from '../../../../core/services/languages/languages.service';
import {ILanguage} from '../../../../core/services/languages/entities/languages.entity';
import {Image, IImage} from '../../entities/images.entity';

export class CategoriesCreateController extends CreateController<ICategory> {
    static $inject = ['CategoriesService', 'LanguagesService', '$state', 'SweetAlertService'];
    private categories;
    private languages;
    constructor(
        public service,
        private LanguagesService: ILanguagesService,
        private $state: ng.ui.IStateService,
        private SweetAlertService
    ) {
        super();
        this.setBreadcrumps();
        this.getLanguages()
            .then(() => {
                return this.getCategories();
            })
            .then(() => {
                this.item = new Category({
                });
            });

    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список категорий', 'products.categories'),
            new Breadcrump('Создание категории', 'products.categories.create')
        ];
    }

    create() {
        super.create()
            .then((res) => {
                this.SweetAlertService.setOptions({
                    title: 'Создано!',
                    text: 'Категория успешно создана'
                });
                this.SweetAlertService.showAlert();
            }, (err) => {
                this.SweetAlertService.setOptions({
                    type: 'error',
                    title: 'Ошибка!',
                    text: 'Проверьте или все обязательные поля заполнены'
                });
                this.SweetAlertService.showAlert();
            });
    }

    getLanguages() {
        return this.LanguagesService.getLanguages()
            .then((response) => {
                this.languages = response.data;
            });
    }


    private getImage(file) {
        this.item.image = '/' + file.path;
    }

    getCategories() {
        return this.service.getList({
            'justParents': true
        }).then((response) => {
                this.categories = response.data;
        });
    }
}