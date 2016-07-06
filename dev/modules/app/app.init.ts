import {appConfig} from './config/bootstrap';
import {AppServiceImplementation} from './services/app.service';
import {AppServiceProvider} from './provider/app.service.provider';
import {AppController} from './controllers/app.controller';

export default angular.module('app.modules.app', [])
    .service('AppServiceImplementation', AppServiceImplementation)
    .provider('AppService', AppServiceProvider)
    .controller('AppController', AppController)
    .config(appConfig);