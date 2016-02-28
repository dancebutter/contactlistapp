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

            var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor : 0x555555});
            document.getElementById('test01').appendChild(renderer.view);

            var state = new PIXI.Container();
            var container = new PIXI.Container();

            state.addChild(container);

            for(var j = 0; j < 5; j++) {
                for(var i = 0; i < 5; i++) {
                    var bunny = PIXI.Sprite.fromImage(imageUrl);
                    bunny.x = 40 * i;
                    bunny.y = 40 * j;
                    container.addChild(bunny);
                }
            }

            container.x = 100;
            container.y = 60;

            animate();

            function animate() {
                requestAnimationFrame(animate);
                renderer.render(state);
            }

        }
        return miniGameModule.controller('miniGameCtrl', MiniGameCtrl);
    }
);
