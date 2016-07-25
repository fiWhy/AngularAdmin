import ICookiesOptions = angular.cookies.ICookiesOptions;
import ICookiesService = angular.cookies.ICookiesService;

export class ResponseIntersceptor {
    static $inject = ['$q', '$cookies', '$location'];
    constructor(
        private $q: ng.IQService,
        private $cookies: ICookiesService,
        private $location: ng.ILocationService
    ) {
        this.responseError = (response) => {

            if(response.status == 401) {
                this.$cookies.remove('token');
                this.$cookies.remove('user');

                $location.path('/login');
            }

            return $q.reject(response);
        }
    }

    response(response) {
        return response;
    }
    responseError(response) {
    }
}