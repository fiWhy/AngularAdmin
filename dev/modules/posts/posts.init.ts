import {PostsController} from './controllers/posts.controller';
import {PostsUpdateController} from './controllers/posts.update.controller';
import {PostsCreateController} from './controllers/posts.create.controller';
import {PostsServiceImplementation} from './services/posts.service';
import {PostTypesService} from './services/post-types.service';
import {PostsServiceProvider} from './provider/posts.service.provider';
import {PostsResource} from './resources/posts.resource';
import {PostTypesResource} from './resources/post-types.resource';
import {postsBootstrap} from './config/bootstrap';

angular.module('app.modules.posts', [])
    .factory('PostTypesResource', PostTypesResource)
    .factory('PostsResource', PostsResource)
    .service('PostsServiceImplementation', PostsServiceImplementation)
    .service('PostTypesService', PostTypesService)
    .provider('PostsService', PostsServiceProvider)
    .controller('PostsController', PostsController)
    .controller('PostsUpdateController', PostsUpdateController)
    .controller('PostsCreateController', PostsCreateController)
    .config(postsBootstrap);

