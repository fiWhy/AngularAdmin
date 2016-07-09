import {IPostsService} from '../services/posts.service';
import {IPostTypesService} from '../services/post-types.service';
import {Post, IPost, IPostsList, IPostTypes} from '../entities/posts.entity';
import {ListController} from '../../../core/base/controller/list.controller';
import {ISweetAlertService} from '../../../core/services/alert/alerts/sweet.alert.service';
import {ILanguagesService} from '../../../core/services/languages/languages.service';
import {ILanguage} from '../../../core/services/languages/entities/languages.entity';
import {CreateController} from '../../../core/base/controller/create.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';


export class PostsCreateController extends CreateController<IPost> {
    static $inject = ['PostsService', 'PostTypesService', 'SweetAlertService', 'LanguagesService', '$state'];
    private postTypes: Array<IPostTypes>;
    private languages: Array<ILanguage>
    constructor(
        private PostsService: IPostsService,
        private PostTypesService: IPostTypesService,
        private SweetAlertService: ISweetAlertService,
        private LanguagesService: ILanguagesService,
        private $state: ng.ui.IStateService

    ) {
        super();
        this.setBreadcrumps();
        this.service = PostsService;
        this.loadTypes().then(() => {
            return this.loadLanguages();
        });
    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Посты', 'posts.list'),
            new Breadcrump('Создание', 'posts.create')
        ];
    }

    private getImage(file) {
        this.item.image = '/' + file.path;
    }

    private fillItem() {
        let post = {
            image: '',
            backgroundImage: '',
            fields: {},
            type_id: 1
        };

        this.item = new Post(post);
    }

    public create() {
        super.create()
            .then((res) => {
                this.SweetAlertService.setOptions({
                    title: 'Создано!',
                    text: 'Запись успешно создана'
                });
                this.SweetAlertService.showAlert();
                this.$state.go('posts.list');
            }, (err) => {
                this.SweetAlertService.setOptions({
                    type: 'error',
                    title: 'Ошибка!',
                    text: 'Проверьте правильность заполнения всех полей!'
                });
                this.SweetAlertService.showAlert();
            });
    };

    private getBackgroundImage(file) {
        this.item.bannerImage = '/' + file.path;
    }

    private loadLanguages() {
        return this.LanguagesService.getLanguages()
            .then((response) => {
                this.languages = response.data;
                this.fillItem();
            });
    }

    private loadTypes() {
        return this.PostTypesService.getList().then((response) => {
            this.postTypes = response.data;
        });
    }
    
}