import {IPostsService} from '../services/posts.service';
import {IPostTypesService} from '../services/post-types.service';
import {Post, IPost, IPostsList, IPostTypes} from '../entities/posts.entity';
import {ListController} from '../../../core/base/controller/list.controller';
import {ISweetAlertService} from '../../../core/services/alert/alerts/sweet.alert.service';
import {ILanguagesService} from '../../../core/services/languages/languages.service';
import {ILanguage} from '../../../core/services/languages/entities/languages.entity';
import {UpdateController} from '../../../core/base/controller/update.controller';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';


export class PostsUpdateController extends UpdateController<IPost> {
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
        }).then(() => {
            this.load($state.params['id']);
        });
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

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Посты', 'posts.list'),
            new Breadcrump('Редактирование', 'posts.update')
        ];
    }

    private loadLanguages() {
        return this.LanguagesService.getLanguages()
            .then((response) => {
                this.languages = response.data;
            });
    }

    private loadTypes() {
        return this.PostTypesService.getList().then((response) => {
            this.postTypes = response.data;
        });
    }



    
}