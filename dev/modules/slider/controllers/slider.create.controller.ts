import {CreateController} from '../../../core/base/controller/create.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';
import {ILanguagesService} from '../../../core/services/languages/languages.service';
import {ILanguage} from '../../../core/services/languages/entities/languages.entity';
import {ISliderService} from '../services/slider.service';
import {ISlide, Slide} from '../entities/slide';

export class SliderCreateController extends CreateController<ISlide> {
    static $inject = ['SliderService', 'LanguagesService', 'SweetAlertService'];
    public languages;
    constructor(
        public service: ISliderService,
        private LanguagesService: ILanguagesService,
        private SweetAlertService
    ) {
        super();
        this.getLanguages()
            .then(() => {
                this.initSlide();
            });
    }

    private initSlide() {
        this.item = new Slide({});
    }

    create() {
        super.create()
            .then((res) => {
                this.SweetAlertService.setOptions({
                    title: 'Создано!',
                    text: 'Продукт успешно создан'
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

    private getLanguages() {
        return this.LanguagesService.getLanguages()
            .then((response) => {
                this.languages = response.data;
            });
    }

    private getImage(file) {
        this.item.image = '/' + file.path;
    }
}