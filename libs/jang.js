const Script = require('./script.js');

function Jang(element) {
    var _this = this;
    this.element = element;
    this.node = document.createTextNode("");
    this.script = new Script(element.getAttribute('text')).onChange(function (value) {
        _this.node.textContent = value;
    });
    this.element.replaceWith(this.node);
}

Jang.prototype.refresh = function (language) {
    this.script.refresh(language);
}

Jang.prototype.exist = function () {
    return document.body.contains(this.node);
}

module.exports = Jang;