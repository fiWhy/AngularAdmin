export class RequestInterceptor {
    static $inject = ['$cookies', 'config'];
    constructor(private $cookies: ng.cookies.ICookiesService) {
        var token = $cookies.get('token');
        this.request = (config) => {
            var date = new Date();
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
                //config.headers['Content-Type'] = 'application/json';
            }

            $.ajaxSetup({
                headers: { "Authorization": "Bearer " + token }
            });
            return config;
        }
    }
    
    request(config) {
    }
}