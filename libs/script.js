function Script(text) {
    this.text = text;
    this.value = null;
    this.events = { onChange: null };
}

Script.prototype.onChange = function (fn) {
    this.events.onChange = fn;
    return this;
}

Script.prototype.refresh = function (scope) {
    var value = new Function('scope', ' try { return scope.' + this.text + '; } catch(err) { console.log(err); return "' + this.text + '"; }')(scope);
    if (this.value != value) {
        this.value = value;
        this.events.onChange(value);
    }
}

module.exports = Script;