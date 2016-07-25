import './app/app.init';
import './dashboard/dashboard.init';
import './user/user.init';
import './carrental/carrental.init';
import './posts/posts.init';
import './shop/shop.init';
import './slider/slider.init';
import './menu/menu.init';

import {modules} from './modules.list.config'
angular.module('app.modules', [].concat(modules()));