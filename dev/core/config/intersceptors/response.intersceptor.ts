export class ResponseIntersceptor {
    static $inject = ['$q'];
    constructor(
        private $q: ng.IQService
    ) {
        this.responseError = (response) => {
            return $q.reject(response);
        }
    }
    response(response) {
        return response;
    }
    responseError(response) {
    }
}