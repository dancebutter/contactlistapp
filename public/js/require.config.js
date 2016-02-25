require.config(
    {
        'paths' : {
            'jquery' : 'bower_components/jquery/dist/jquery',
            'angular' : 'bower_components/angular/angular',
            'angular-ui-router' : 'bower_components/angular-ui-router/release/angular-ui-router',
            'hammerJs' : 'thirdParty/hammerJs/hammer.min',
            'hammerTimeJs' : 'thirdParty/hammerJs/hammer-time.min',
            'engine-common' : 'thirdParty/RSamaium-CanvasEngine-82e6fdf/core/engine-common',
            'canvasengine' : 'thirdParty/RSamaium-CanvasEngine-82e6fdf/canvasengine'
        },
        'shim' : {
            'angular' : {
                deps : ['jquery'],
                exports : 'angular'
            },
            'angular-ui-router' : {
                deps : ['angular']
            },
            'canvasengine' : {
                deps : ['engine-common']
            }
        },
        packages : [
            {
                'name' : 'app',
                'location' : 'app'
            }
        ]
    }
);
