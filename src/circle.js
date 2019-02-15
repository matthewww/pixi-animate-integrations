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
                y: 25.65
            },
            "3": {
                y: 31
            },
            "4": {
                y: 36.35
            },
            "5": {
                y: 41.7
            },
            "6": {
                y: 47.05
            },
            "7": {
                y: 52.4
            },
            "8": {
                y: 57.75
            },
            "9": {
                y: 63.1
            },
            "10": {
                y: 68.45
            },
            "11": {
                y: 73.8
            },
            "12": {
                y: 79.15
            },
            "13": {
                y: 84.5
            },
            "14": {
                y: 89.85
            },
            "15": {
                y: 95.2
            },
            "16": {
                y: 100.55
            },
            "17": {
                y: 105.85
            },
            "18": {
                y: 111.2
            },
            "19": {
                y: 116.55
            },
            "20": {
                y: 121.9
            },
            "21": {
                y: 127.25
            },
            "22": {
                y: 132.6
            },
            "23": {
                y: 137.95
            },
            "24": {
                y: 143.3
            },
            "25": {
                y: 148.65
            },
            "26": {
                y: 154
            },
            "27": {
                y: 159.35
            },
            "28": {
                y: 164.7
            },
            "29": {
                y: 170.05
            },
            "30": {
                y: 175.4
            },
            "31": {
                y: 180.75
            },
            "32": {
                y: 186.1
            },
            "33": {
                y: 191.4
            },
            "34": {
                y: 196.75
            },
            "35": {
                y: 202.1
            },
            "36": {
                y: 207.45
            },
            "37": {
                y: 212.8
            },
            "38": {
                y: 218.15
            },
            "39": {
                y: 223.5
            },
            "40": {
                y: 228.85
            },
            "41": {
                y: 234.2
            },
            "42": {
                y: 239.55
            },
            "43": {
                y: 244.9
            },
            "44": {
                y: 250.25
            },
            "45": {
                y: 255.6
            },
            "46": {
                y: 260.95
            },
            "47": {
                y: 266.3
            },
            "48": {
                y: 271.65
            },
            "49": {
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