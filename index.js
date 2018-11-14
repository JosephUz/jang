const html = require('./libs/html.js');

var exports = {};

var languages = {};
var current = html.element.getAttribute('lang');
var events = {
    onChange: []
}

Object.defineProperties(exports, {
    current: {
        get: function () {
            return current;
        }
    }
});

exports.onChange = function (fn) {
    events.onChange.push(fn);
}

exports.clearOnChanges = function (fn) {
    events.onChange = [];
}

exports.get = function () {
    return languages[current];
}

exports.refresh = function () {
    html.read();
    html.refresh(exports.get());
}

exports.set = function (name) {
    if (current != name) {
        current = name;
        html.element.setAttribute('lang', current);

        exports.refresh();

        events.onChange.forEach(function (fn) {
            fn(current, languages[current]);
        });
    }
}

exports.add = function (name, value) {
    if (typeof (name) == "object" && name instanceof Array) {
        name.forEach(function (item) {
            exports.add(item.name, item.value);
        });
    } else if (typeof (name) == "string" && typeof (value) == "object") {
        languages[name] = value;
    } else if (!name) {
        throw new Error('missing arguments');
    }
}

module.exports = exports;