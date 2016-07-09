import './app/app.init';
import './dashboard/dashboard.init';
import './user/user.init';
import './carrental/carrental.init';
import './posts/posts.init';
import './shop/shop.init';

import {modules} from './modules.list.config'

angular.module('app.modules', [
    'ngCookies',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'pascalprecht.translate'
].concat(modules()));