import {FromAppFilter} from './fromapp/fromapp.filter';
var filters = angular.module('app.core.filters', []);

filters.filter('fromapp', FromAppFilter);