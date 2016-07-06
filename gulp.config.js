function options() {
    var dev = './dev/',
        app = './app/',
        node = './node_modules/';
    return {
        dev: dev,
        app: app,
        prefix: 'admin',

        sass: {
            allSass: [
                dev + 'styles/css/materialize/sass/materialize.scss',
            ],
            buildFiles: app + 'styles/css/'
        },
        resources: {
            images: dev + 'images/**',
            translations: dev + '**/locale-*.json',
            other: [
                dev + '**/*.js',
                dev + '**/*.css',
                '!' + dev + 'lib/**/*',
            ]
        },
        
        ts: [
            dev + '**/*.ts',
            dev + '*.ts'
        ],

        html: [
            '!' + dev + '/view/layout/index.html',
            dev + '**/*.html',
            dev + 'view/**/*.html',
        ],

        inject: [
            app + 'styles/css/**/*.css',
            app + 'scripts/js/**/*.js',
            app + 'scripts/scripts.*',
            // src + 'scripts/*.js',
        ]
    }
}

module.exports = options();
