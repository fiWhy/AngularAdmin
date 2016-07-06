import {IPost, IPostsList} from '../entities/posts.entity';

export interface IPostsService {
    getList();
    get(id: number);
    update(id: number, data: IPost);
    create(data: IPost);
}

export class PostsServiceImplementation implements IPostsService {
    static $inject = ['PostsResource'];
    constructor(private PostsResource) {
    }

    getList(conditions?) {
        return this.PostsResource.query(conditions).$promise
            .then((res) => {
                return res;
            })
    }

    get(id) {
        return this.PostsResource.get({ id: id }).$promise
            .then((res) => res);
    }

    update(id, data) {
        return this.PostsResource.put({
            id: id
        }, data).$promise;
    }

    create(data) {
        return this.PostsResource.save({}, data).$promise;
    }

    delete(id) {
        return this.PostsResource.delete({ id: id }).$promise
                     .then(res => res);
    }
}