import {UpdateController} from '../../../../core/base/controller/update.controller';
import {Breadcrump} from '../../../../core/entity/breadcrumps.entity';
import {ICategory, Category} from '../../entities/categories.entity';
import {Image} from '../../entities/images.entity';
import {ICategoriesService} from '../../services/categories.service';
import {ILanguagesService} from '../../../../core/services/languages/languages.service';

export class CategoriesUpdateController extends UpdateController<ICategory> {
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
        this.conditions = {
            "include": "colors,sizes,images,brand"
        };
        this.getLanguages()
            .then(() => {
                return this.getCategories()
            })
            .then(() => {
                return this.load($state.params['id']);
            })
            .then(() => {
                this.item['category_id'] = $state.params['id'];
            });
    }


    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Список категорий', 'products.categories'),
            new Breadcrump('Обновление категории', 'products.categories.edit')
        ];
    }

    private getImage(file) {
        this.item.image = '/' + file.path;
    }

    update() {
        super.update()
            .then(() => {
                this.SweetAlertService.setOptions({
                    title: 'Обновлено!',
                    text: 'Запись успешно обновлена'
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

    getCategories() {
        return this.service.getList({
            'justParents': true
        })
            .then((response) => {
                this.categories = response.data;
            });
    }

    searchLanguageId(key) {
        for (let i in this.languages) {
            if (this.languages[i].shortcode == key) {
                return this.languages[i].id
            }
        }
    }

    getLanguages() {
        return this.LanguagesService.getLanguages()
            .then((response) => {
                this.languages = response.data;
            });
    }
}