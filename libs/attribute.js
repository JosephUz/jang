const Script = require('./script.js');

function Attribute(element) {
    var _this = this;
    this.element = element;
    this.scripts = element.getAttribute('jang').split(';').filter(function (attr) {
        return attr;
    }).map(function (attr) {
        var keyValue = attr.split(':');
        return new Script(keyValue[1]).onChange(function (value) {
            _this.element.setAttribute(keyValue[0], value);
        });
    });
    this.element.removeAttribute('jang');
}

Attribute.prototype.refresh = function (language) {
    this.scripts.forEach(function (script) {
        script.refresh(language);
    });
}

Attribute.prototype.exist = function () {
    return document.body.contains(this.element);
}

module.exports = Attribute;