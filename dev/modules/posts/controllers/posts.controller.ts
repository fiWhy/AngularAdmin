import {IPostsService} from '../services/posts.service';
import {IPostTypesService} from '../services/post-types.service';
import {Post, IPost, IPostsList, IPostTypes} from '../entities/posts.entity';
import {ListController} from '../../../core/base/controller/list.controller';
import {ISweetAlertService} from '../../../core/services/alert/alerts/sweet.alert.service';
import {ILanguagesService} from '../../../core/services/languages/languages.service';
import {ILanguage} from '../../../core/services/languages/entities/languages.entity';
import {Breadcrump} from '../../../core/entity/breadcrumps.entity';


export class PostsController extends ListController<IPost> {
    static $inject = ['PostsService', 'PostTypesService', 'SweetAlertService', '$scope', 'LanguagesService'];
    private editAble: IPost;
    private postTypes: Array<IPostTypes>;
    private languages: Array<ILanguage>
    private isEdit = false;
    constructor(
        private PostsService: IPostsService,
        private PostTypesService: IPostTypesService,
        private SweetAlertService: ISweetAlertService,
        private $scope,
        private LanguagesService: ILanguagesService

    ) {
        super();
        this.setBreadcrumps();
        this.service = PostsService;
        this.loadTypes().then(() => {
            return this.loadLanguages();
        }).then(() => {
            this.load(true);
        });
    }

    private setBreadcrumps() {
        this.breadcrumps = [
            new Breadcrump('Стена', 'dashboard'),
            new Breadcrump('Посты', 'posts.list')
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

    public removeItem(index: number) {
        this.SweetAlertService.setOptions({
            title: 'Вы уверены?',
            text: 'Вы не сможете восстановить эту запись!',
            type: "warning",
            showCancelButton: true,
        })
        this.SweetAlertService.showAlert((res) => {
            if (res) {

                this.service.delete(this.list[index].id)
                    .then((res) => {
                        this.changePage(this.pagination.current_page, true);
                        this.SweetAlertService.setOptions({
                            title: 'Удалено!',
                            text: 'Запись успешно удалена'
                        });
                        this.SweetAlertService.showAlert();
                    });
            }
        });
    }


    
}