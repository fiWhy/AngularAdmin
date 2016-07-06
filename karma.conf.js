module.exports = function(config) {
    config.set({
        basePath: ".",
        singleRun: false,
        colors: true,
        plugins: ["karma-jasmine", "karma-chrome-launcher", "karma-systemjs"],
        frameworks: ["systemjs", "jasmine"],
        browsers: ["Chrome"],
        reporters: ["dots"],

        files: [
            {pattern: 'app/**/*.spec.js', include: false, watched: true}
        ],

        systemjs: {
            configFile: "system.config.js",
            serveFiles: [
                "app/**/**",
                "dev/lib/**/*",
            ],
            
            config: {
                transpiler: null,
                paths: {
                    "core": "app/core/core.init.js",
                    "angular": "dev/lib/angular/angular.js",
                    "angular-mocks": "dev/lib/angular-mocks/angular-mocks.js",
                    "angular-ui-router": "dev/lib/angular-ui-router/release/angular-ui-router.js",
                    "angular-animate": "dev/lib/angular-animate/angular-animate.js",
                    "angular-resource": "dev/lib/angular-resource/angular-resource.js",
                    "angular-material": "dev/lib/angular-material/angular-material.js",
                    "angular-aria": "dev/lib/angular-aria/angular-aria.js",
                    "angular-cookies": "dev/lib/angular-cookies/angular-cookies.js",
                    "systemjs": "node_modules/systemjs/dist/system.js",
                    "typescript": "dev/lib/typescript/lib/typescript.js",
                    "system-polyfills": "node_modules/systemjs/dist/system-polyfills.js",
                    "es6-module-loader": "node_modules/es6-module-loader/dist/es6-module-loader.js"
                },
                meta: {
                    "angular": {format: "global"},
                    "angular-mocks": {format: "global", deps: ['angular']},
                    "angular-ui-router": {format: "global", deps: ['angular']},
                    "angular-animate": {format: "global", deps: ['angular']},
                    "angular-resource": {format: "global", deps: ['angular']},
                    "angular-material": {format: "global", deps: ['angular']},
                    "angular-aria": {format: "global", deps: ['angular']},
                    "angular-cookies": {format: "global", deps: ['angular']},
                    "core": {
                        deps: [
                            "angular-ui-router",
                            "angular-animate",
                            "angular-resource",
                            "angular-material",
                            "angular-aria",
                            "angular-cookies"
                            ]
                }
            },
        }

    });
};