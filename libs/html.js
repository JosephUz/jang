const Jang = require('./jang.js');
const Attribute = require('./attribute.js');

var exports = {};

var jangs = [];

Object.defineProperties(exports, {
    element: {
        get: function () {
            if (exports._element == null)
                exports._element = document.getElementsByTagName("html")[0];
            return exports._element;
        }
    }
});

exports.refresh = function (language) {
    jangs.forEach(function (jang) {
        jang.refresh(language);
    });
}

exports.read = function () {
    jangs = jangs.filter(function (jang) {
        return jang.exist();
    }).concat(Array.prototype.map.call(document.getElementsByTagName('jang'), function (item) {
        return item;
    }).map(function (element) {
        return new Jang(element);
    })).concat((Array.prototype.map.call(document.querySelectorAll('[jang]'), function (element) {
        return new Attribute(element);
    })));
}

module.exports = exports;
