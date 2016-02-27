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

            var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
            document.getElementById('test01').appendChild(renderer.view);

            // create the root of the scene graph
            var stage = new PIXI.Container();

            // create a texture from an image path
            var texture = PIXI.Texture.fromImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/45px-Wikimedia-logo.svg.png');

            // create a new Sprite using the texture
            var bunny = new PIXI.Sprite(texture);

            // center the sprite's anchor point
            bunny.anchor.x = 0.5;
            bunny.anchor.y = 0.5;

            // move the sprite to the center of the screen
            bunny.position.x = 200;
            bunny.position.y = 150;

            stage.addChild(bunny);

            // start animating
            animate();
            function animate() {
                requestAnimationFrame(animate);

                // just for fun, let's rotate mr rabbit a little
                bunny.rotation += 0.1;

                // render the container
                renderer.render(stage);
            }
        }
        return miniGameModule.controller('miniGameCtrl', MiniGameCtrl);
    }
);
