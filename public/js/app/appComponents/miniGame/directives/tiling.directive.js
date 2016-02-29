define(
    [
        'angular',
        '../miniGame.module'
    ],
    function(angular, miniGameModule) {
        TilingDirective.$inject = [];
        function TilingDirective() {
            link.$inject = ['scope', 'element', 'attr'];
            function link(scope, element, attr) {
                var imagePath = 'js/app/appComponents/miniGame/data/smp-shol25.jpg';
                var renderer = PIXI.autoDetectRenderer(800, 600);
                document.getElementById('tilingDemo').appendChild(renderer.view);
                var stage = new PIXI.Container();
                var texture = PIXI.Texture.fromImage(imagePath);

                var tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height);
                stage.addChild(tilingSprite);

                var count = 0;

                animate();

                function animate() {
                    count += 0.005;

                    tilingSprite.tileScale.x = 2 + Math.sin(count);
                    tilingSprite.tileScale.y = 2 + Math.cos(count);

                    tilingSprite.tilePosition.x += 1;
                    tilingSprite.tilePosition.y += 1;

                    renderer.render(stage);

                    requestAnimationFrame(animate);
                }
            }

            return {
                restrict : 'E',
                link : link,
                template : '<div id="tilingDemo"></div>'
            };
        }
        return miniGameModule.directive('tilingDirective', TilingDirective);
    }
);
