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
            shop: apiUrl + 'shop/:id?include=colors,sizes,images,brand',
            menu: apiUrl + 'menu/:id?include=children',

            size: apiUrl + 'size',
            brand: apiUrl + 'brand',
            color: apiUrl + 'color',
            category: apiUrl + 'category',

            // authorize: 'google.com.ua'
        },
        language: 'en',
    }
}