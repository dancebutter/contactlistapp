define(
    [
        'angular',
        './miniGame.module',
        'pixi'
    ],
    function(angular, miniGameModule) {
        MiniGameCtrl.$inject = ['$scope'];
        function MiniGameCtrl($scope) {
            $scope.miniGame = "M&M";
            var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/45px-Wikimedia-logo.svg.png";
            var fighter = "js/app/appComponents/miniGame/data/fighter.png";
            var fighterJson = "js/app/appComponents/miniGame/data/fighter.json";

            /*var renderer = PIXI.autoDetectRenderer(800, 600);
            document.getElementById('test01').appendChild(renderer.view);

            var stage = new PIXI.Container();

            PIXI.loader
            .add(fighterJson)
            .load(onAssetsLoaded);

            var movie;

            function onAssetsLoaded() {
                var frames = [];
                for(var i = 0; i < 30; i++) {
                    var val = i < 10 ? '0' + i : i;

                    frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
                }

                movie = new PIXI.extras.MovieClip(frames);

                movie.position.set(300);

                movie.anchor.set(0.5);
                movie.animationSpeed = 0.5;

                movie.play();

                stage.addChild(movie);

                animate();
            }

            function animate() {
                movie.rotation += 0.01;

                renderer.render(stage);

                requestAnimationFrame(animate);
            }*/


        }
        return miniGameModule.controller('miniGameCtrl', MiniGameCtrl);
    }
);
