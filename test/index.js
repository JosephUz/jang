const jang = require("../index.js");
const en = require('../locales/en.js');
const tr = require('../locales/tr.js');

const test_libs_attribute = require('./libs/attribute.js');
const test_libs_html = require('./libs/html.js');
const test_libs_jang = require('./libs/jang.js');
const test_libs_script = require('./libs/script.js');

mocha.setup('bdd');

test_libs_attribute();
test_libs_html();
test_libs_jang();
test_libs_script();

describe("index.js test", function () {
    it("add languages to jang", function (done) {
        try {
            jang.add('en', en);
            jang.add([
                { name: 'tr', value: tr }
            ]);

            done();
        } catch (err) {
            done(err);
        }
    });

    it("replace all jang tag and attributes", function (done) {
        try {
            jang.refresh();
            done();
        } catch (err) {
            done(err);
        }
    });

    it("check replacing attributes", function (done) {
        try {
            var btn = document.getElementById('btn');
            if (btn.getAttribute('title') == tr.language)
                done();
            else
                done(new Error("check replacing attributes failed."));
        } catch (err) {
            done(err);
        }
    });

    it("check replacing jangs", function (done) {
        try {
            var btn = document.getElementById('btn');
            if (btn.innerHTML.trim() == tr.language)
                done();
            else
                done(new Error("check replacing jang failed."));
        } catch (err) {
            done(err);
        }
    });

    it("change language name", function (done) {
        try {
            jang.onChange(function (name, value) {
                if (name == "en")
                    done();
                else
                    done(new Error("change language name."));
            });
            jang.set('en');
        } catch (err) {
            done(err);
        }
    });

    it("check changing language", function (done) {
        try {
            var btn = document.getElementById('btn');
            if (btn.innerHTML.trim() == en.language)
                done();
            else
                done(new Error("check changing language failed."));
        } catch (err) {
            done(err);
        }
    });

    it("add new jang and attribute", function (done) {
        try {
            var div = document.createElement('div');
            div.style.display = 'none';
            div.innerHTML = '<button id="newBtn" jang="title:new.title;"> <jang text="new.title"></jang> </button>';
            document.querySelector('body').append(div);
            jang.refresh();

            var btn = document.getElementById('newBtn');
            if (btn.innerHTML.trim() == en.new.title && btn.getAttribute('title') == en.new.title)
                done();
            else
                done(new Error("add new jang and attribute failed."));
        } catch (err) {
            done(err);
        }
    });

    it("clear change event listeners", function (done) {
        try {
            jang.clearOnChanges();
            done();
        } catch (err) {
            done(err);
        }
    });

    it("check changing language of new items", function (done) {
        try {
            jang.set('tr');
            var btn = document.getElementById('newBtn');

            if (btn.innerHTML.trim() == tr.new.title && btn.getAttribute('title') == tr.new.title)
                done();
            else
                done(new Error("check changing language failed."));
        } catch (err) {
            done(err);
        }
    });
});

mocha.setup({ globals: ['jangObject'] });
mocha.checkLeaks();
mocha.run();