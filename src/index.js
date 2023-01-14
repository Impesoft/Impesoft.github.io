"use strict";
exports.__esModule = true;
var dom_1 = require("@zero-dependency/dom");
var fireworks_js_1 = require("fireworks-js");
require("./style.css");
var app = document.querySelector('#app');
var fireworks = new fireworks_js_1.Fireworks(app);
var start = (0, dom_1.el)('button', {
    onclick: function () {
        fireworks.start();
    }
}, 'Start');
var stop = (0, dom_1.el)('button', {
    onclick: function () {
        fireworks.waitStop();
    }
}, 'Stop');
var launch = (0, dom_1.el)('button', {
    onclick: function () {
        fireworks.launch(Number(count.value));
    }
}, 'Launch');
var count = (0, dom_1.el)('input', {
    value: '1',
    min: '1',
    max: '15',
    type: 'number',
    placeholder: 'count',
    style: {
        width: '2rem'
    }
});
var buttons = (0, dom_1.el)('div', {
    style: {
        position: 'absolute',
        display: 'flex',
        gap: '4px'
    }
}, start, stop, launch, count);
document.body.appendChild(buttons);
