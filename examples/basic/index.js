const jang = require("../../index.js");
const en = require('../../locales/en.js');
const tr = require('../../locales/tr.js');

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