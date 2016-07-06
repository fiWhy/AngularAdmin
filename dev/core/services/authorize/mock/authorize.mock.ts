mock.$inject = ['$httpBackend', 'config', '$q'];
export function mock($httpBackend: ng.IHttpBackendService, config, $q: ng.IQService) {
    var authorize = '/api/authorize';
    $httpBackend.whenPOST(authorize)
    .respond(401, null, null, 'error');
        // .respond((method, url, data: string) => {
        //     var userData = JSON.parse(data),
        //         result;
        //     if (userData.username == 'admin' && userData.password == 'admin') {
        //         var nowDate = new Date();
        //         result = [200, {
        //             userData: {
        //                 username: 'admin',
        //                 role: 'admin'
        //             },
        //             tokenData: {
        //                 access_token: 12345,
        //                 tokenExpireTime: nowDate.getTime() + ((60 * 60 * 24) * 2)
        //             }
        //         }];
        //     } else {
        //         throw {status: 401};
        //     }

        //     return result;
        // })


    $httpBackend.whenPOST(authorize + '/reset')
        .respond((method, url, data: string) => {
            var resetData = JSON.parse(data),
                result;
            if (resetData.username == 'admin' && resetData.email == 'admin@gmail.com') {
                result = [200, {}];
            } else {
                result = [401, {
                    error_message: 'Wrong credentials!'
                }];
            }
            return result;
        });
}