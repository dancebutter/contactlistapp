define(
    [
        'angular',
        '../miniGame.module'
    ],
    function(angular, miniGameModule) {
        ClickDemoDirective.$inject = [];
        function ClickDemoDirective() {
            link.$inject = ['scope', 'element', 'attr'];
            function link(scope, element, attr) {
                var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
                document.getElementById('clickDemo').appendChild(renderer.view);

                var stage = new PIXI.Container();

                var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/45px-Wikimedia-logo.svg.png";
                var sprite = PIXI.Sprite.fromImage(imageUrl);

                sprite.position.set(230, 264);
                sprite.interactive = true;
                sprite.on('mousedown', onDown);
                sprite.on('touchstart', onDown);

                stage.addChild(sprite);

                function onDown(eventData) {
                    sprite.scale.x += 0.3;
                    sprite.scale.y += 0.3;
                    sprite.rotation += 0.3;
                }

                animate();
                function animate() {
                    requestAnimationFrame(animate);

                    renderer.render(stage);
                }
            }
            return {
                restrict : "E",
                link : link,
                template : '<div id="clickDemo"></div>'
            };
        }
        return miniGameModule.directive('clickDemoDirective', ClickDemoDirective);
    }
);
