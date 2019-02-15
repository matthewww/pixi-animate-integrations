import { Application } from 'pixi.js';
import { load } from 'pixi-animate';

const square = require('./square'),
    circle = require('./circle'),
    app = new Application();

document.body.appendChild(app.view);

_useLoadUtil();
// _accessInstances();

// If you have your own stage, you can bypass the Scene and just use the pixi-animate load function in isolation
function _useLoadUtil() {
    load(square.stage, app.stage);
    load(circle.stage, app.stage);
}

// If you want to be in control of the display objects, you can again use the load function, 
// create a stage instance onComplete and addChild to wherever you need it. The pixi-animate 'stage' is a type of MovieClip.
function _accessInstances() {
    load(circle.stage).onComplete.once(() => {
        const circleStage = new circle.stage();
        app.stage.addChild(circleStage);
    });

    load(square.stage).onComplete.once(() => {
        const squareStage = new square.stage();
        app.stage.addChild(squareStage);
    });
}