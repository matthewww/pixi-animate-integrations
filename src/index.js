import { Application } from 'pixi.js';
import { load } from 'pixi-animate';

const square = require('./square'),
 circle = require('./circle'),
 app = new Application();

 document.body.appendChild(app.view); 

load(square.stage, app.stage);
load(circle.stage, app.stage);

