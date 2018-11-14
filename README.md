jang
==================

For client-side language text.


## Installation

```shell
$ npm install jang
```

## Usage

```html

<jang text="language"></jang>
<button id="changeBtn" jang="title:title;">
    <jang text="title"></jang>
</button>

<script src="./page.build.js"></script>

```

### page.js file

```javascript

const jang = require("jang");
const en = require('./locales/en.js');
const tr = require('./locales/tr.js');

jang.add('en', en);
jang.add([
    { name: 'tr', value: tr }
]);

jang.refresh();

jang.onChange(function (name, value) {
    console.log('current language: ' + name);
});

document.getElementById("changeBtn").addEventListener("click", function (e) {
    jang.set(jang.current == 'tr' ? 'en' : 'tr');
});

document.getElementById("addBtn").addEventListener("click", function (e) {
    var div = document.createElement('div');
    div.innerHTML = '<jang text="language"></jang> <button jang="title:new.title;"> <jang text="new.title"></jang> </button>';
    document.querySelector('body').append(div);
    jang.refresh();
});

```

### page.build.js file

page.build.js file is generated from page.js with libraries like browserify or babel or parcel or webpack.

### [Buil Sample][]

[Buil Sample]: https://github.com/JosephUz/jang/tree/master/gulpfile.js


### tr.js file

```javascript

module.exports = {
    title: "Türkçe",
}

```

### en.js file

```javascript

module.exports = {
    title: "Engilish",
}

```

## Examples

### [Basic Usage][]

This example shows the most basic way of usage.

[Basic Usage]: https://github.com/JosephUz/jang/tree/master/examples/basic/index.html


License
-------

This software is free to use under the JosephUz. See the [LICENSE file][] for license text and copyright information.


[LICENSE file]: https://github.com/JosephUz/jang/blob/master/LICENSE