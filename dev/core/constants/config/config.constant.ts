export function ConfigConstant() {
    var apiUrl = '/api/';
    return {
        apiUrl: apiUrl,
        documentRoot: 'app',
        modulesRoot: 'app/modules',
        mainPaths: {
            //menu: apiUrl + 'menu/:name',
            authorize: apiUrl + 'login',
            languages: apiUrl + 'languages',
            cars: apiUrl + 'cars/:id',
            posts: apiUrl + 'posts/:id',
            postTypes: apiUrl + 'post_types/:id',
            shop: apiUrl + 'shop/:id',
            menu: apiUrl + 'menu/:id?include=children',

            size: apiUrl + 'size/:id',
            brand: apiUrl + 'brand/:id',
            color: apiUrl + 'color/:id',
            category: apiUrl + 'category/:id',


            slide: apiUrl + 'slide/:id',

            // authorize: 'google.com.ua'
        },
        language: 'en',
    }
}