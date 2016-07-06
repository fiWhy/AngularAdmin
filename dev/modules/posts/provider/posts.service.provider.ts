import {IPostsService} from '../services/posts.service';

export class PostsServiceProvider implements ng.IServiceProvider {
    public $get(PostsServiceImplementation: IPostsService): IPostsService {
        return PostsServiceImplementation;
    }
}