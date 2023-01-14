"use strict";
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = require("@zero-dependency/dom");
const fireworks_js_1 = require("fireworks-js");
require("./style.css");
const app = document.querySelector('#app');
const fireworks = new fireworks_js_1.Fireworks(app);
const start = (0, dom_1.el)('button', {
    onclick: () => {
        fireworks.start();
    }
}, 'Start');
const stop = (0, dom_1.el)('button', {
    onclick: () => {
        fireworks.waitStop();
    }
}, 'Stop');
const launch = (0, dom_1.el)('button', {
    onclick: () => {
        fireworks.launch(Number(count.value));
    }
}, 'Launch');
const count = (0, dom_1.el)('input', {
    value: '1',
    min: '1',
    max: '15',
    type: 'number',
    placeholder: 'count',
    style: {
        width: '2rem'
    }
});
const buttons = (0, dom_1.el)('div', {
    style: {
        position: 'absolute',
        display: 'flex',
        gap: '4px'
    }
}, start, stop, launch, count);
document.body.appendChild(buttons);
