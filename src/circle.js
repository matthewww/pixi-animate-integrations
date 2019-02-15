(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Symbol_1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.circleStage[0]);
        this.addChild(instance1);
    });

    lib.circleStage = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 50,
            framerate: 24,
            loop: false
        });
        var instance1 = new lib.Symbol_1();
        this.addTimedChild(instance1, 0, 50, {
            "0": {
                x: 214,
                y: 15
            },
            "1": {
                y: 20.3
            },
            "2": {
                y: 95.2
            },
            "3": {
                y: 271.65
            },
            "4": {
                y: 277
            }
        });
    });

    lib.circleStage.assets = {
        "circleStage": "images/circleStage.shapes.json"
    };
})(PIXI, circleNamespace = circleNamespace || {});
var circleNamespace;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: circleNamespace.circleStage,
        background: 0xffffff,
        width: 550,
        height: 400,
        framerate: 24,
        totalFrames: 50,
        library: circleNamespace
    };
}