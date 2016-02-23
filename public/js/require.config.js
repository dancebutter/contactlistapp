require.config(
    {
        'paths' : {
            'jquery' : 'bower_components/jquery/dist/jquery',
            'angular' : 'bower_components/angular/angular',
            'angular-ui-router' : 'bower_components/angular-ui-router/release/angular-ui-router'
        },
        'shim' : {
            'angular' : {
                deps : ['jquery'],
                exports : 'angular'
            },
            'angular-ui-router' : {
                deps : ['angular']
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
