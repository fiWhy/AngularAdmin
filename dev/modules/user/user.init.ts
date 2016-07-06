import {userConfig} from './config/bootstrap';
import {UserController} from './controllers/user.controller';
import {UserServiceImplementation} from './services/user.service';
import {UserServiceProvider} from './provider/user.service.provider';

angular.module('app.modules.user', [])
    .service('UserServiceImplementation', UserServiceImplementation)
    .provider('UserService', UserServiceProvider)
    .controller('UserController', UserController)
    .config(userConfig);
