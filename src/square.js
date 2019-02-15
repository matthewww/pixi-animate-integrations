(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Symbol_1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.square[0]);
        this.addChild(instance1);
    });

    lib.square = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 50,
            framerate: 24,
            loop: false
        });
        var instance1 = new lib.Symbol_1();
        this.addTimedChild(instance1, 0, 50, {
            "0": {
                x: 46,
                y: 139
            },
            "1": {
                x: 52.15
            },
            "2": {
                x: 58.3
            },
            "3": {
                x: 64.45
            },
            "4": {
                x: 70.65
            },
            "5": {
                x: 76.8
            },
            "6": {
                x: 82.95
            },
            "7": {
                x: 89.1
            },
            "8": {
                x: 95.3
            },
            "9": {
                x: 101.45
            },
            "10": {
                x: 107.6
            },
            "11": {
                x: 113.75
            },
            "12": {
                x: 119.95
            },
            "13": {
                x: 126.1
            },
            "14": {
                x: 132.25
            },
            "15": {
                x: 138.4
            },
            "16": {
                x: 144.6
            },
            "17": {
                x: 150.75
            },
            "18": {
                x: 156.9
            },
            "19": {
                x: 163.1
            },
            "20": {
                x: 169.25
            },
            "21": {
                x: 175.4
            },
            "22": {
                x: 181.55
            },
            "23": {
                x: 187.75
            },
            "24": {
                x: 193.9
            },
            "25": {
                x: 200.05
            },
            "26": {
                x: 206.2
            },
            "27": {
                x: 212.4
            },
            "28": {
                x: 218.55
            },
            "29": {
                x: 224.7
            },
            "30": {
                x: 230.85
            },
            "31": {
                x: 237.05
            },
            "32": {
                x: 243.2
            },
            "33": {
                x: 249.35
            },
            "34": {
                x: 255.55
            },
            "35": {
                x: 261.7
            },
            "36": {
                x: 267.85
            },
            "37": {
                x: 274
            },
            "38": {
                x: 280.2
            },
            "39": {
                x: 286.35
            },
            "40": {
                x: 292.5
            },
            "41": {
                x: 298.65
            },
            "42": {
                x: 304.85
            },
            "43": {
                x: 311
            },
            "44": {
                x: 317.15
            },
            "45": {
                x: 323.3
            },
            "46": {
                x: 329.5
            },
            "47": {
                x: 335.65
            },
            "48": {
                x: 341.8
            },
            "49": {
                x: 348
            }
        });
    });

    lib.square.assets = {
        "square": "images/square.shapes.json"
    };
})(PIXI, lib2 = lib2 || {});
var lib2;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib2.square,
        background: 0xffffff,
        width: 550,
        height: 400,
        framerate: 24,
        totalFrames: 50,
        library: lib2
    };
}