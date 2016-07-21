//# Products
import {ProductsController} from './controllers/products/products.controller';
import {ProductsUpdateController} from './controllers/products/products.update.controller';
import {ProductsCreateController} from './controllers/products/products.create.controller';

//# Colors
import {ColorsController} from './controllers/colors/colors.controller';

//# Brands
import {BrandsController} from './controllers/brands/brands.controller';

//# Categories
import {CategoriesController} from './controllers/categories/categories.controller';
import {SubCategoriesController} from './controllers/categories/subcategories.controller';
import {CategoriesUpdateController} from './controllers/categories/categories.update.controller';
import {CategoriesCreateController} from './controllers/categories/categories.create.controller';

//# Services
import {ProductsService} from './services/products.service';
import {ColorsService} from './services/colors.service';
import {SizesService} from './services/sizes.service';
import {BrandsService} from './services/brands.service';
import {ImagesService} from './services/images.service';
import {CategoriesService} from './services/categories.service';

//# Resources
import {ProductsResource} from './resources/products.resource';
import {ColorsResource} from './resources/colors.resource';
import {SizesResource} from './resources/sizes.resource';
import {BrandsResource} from './resources/brands.resource';
import {ImagesResource} from './resources/images.resource';
import {CategoriesResource} from './resources/categories.resource';



import {bootstrap} from './config/bootstrap';

angular.module('app.modules.shop', [])

    .factory('ProductsResource', ProductsResource)
    .factory('ColorsResource', ColorsResource)
    .factory('SizesResource', SizesResource)
    .factory('BrandsResource', BrandsResource)
    .factory('ImagesResource', ImagesResource)
    .factory('CategoriesResource', CategoriesResource)

    .service('ProductsService', ProductsService)
    .service('ColorsService', ColorsService)
    .service('SizesService', SizesService)
    .service('BrandsService', BrandsService)
    .service('ImagesService', ImagesService)
    .service('CategoriesService', CategoriesService)

    .controller('ProductsController', ProductsController)
    .controller('ProductsUpdateController', ProductsUpdateController)
    .controller('ProductsCreateController', ProductsCreateController)

    .controller('CategoriesController', CategoriesController)
    .controller('SubCategoriesController', SubCategoriesController)
    .controller('CategoriesUpdateController', CategoriesUpdateController)
    .controller('CategoriesCreateController', CategoriesCreateController)

    .controller('ColorsController', ColorsController)
    .controller('BrandsController', BrandsController)
    .config(bootstrap);
