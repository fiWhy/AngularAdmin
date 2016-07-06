import {IPost, IPostsList} from '../entities/posts.entity';

export interface IPostTypesService {
    getList();
}

export class PostTypesService implements IPostTypesService {
    static $inject = ['PostTypesResource'];
    constructor(private PostTypesResource) {
    }

    getList(conditions?) {
        return this.PostTypesResource.query(conditions).$promise
            .then((res) => {
                return res;
            })
    }
}