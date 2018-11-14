const Jang = require('../../libs/jang.js');
const Script = require('../../libs/script.js');

module.exports = function () {
    describe("/libs/jang.js test", function () {
        it("must be function", function (done) {
            try {
                if (typeof (Jang) == 'function')
                    done();
                else
                    done(new Error('must be function failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("create instance and check properties", function (done) {
            try {
                var element = document.createElement('jang');
                element.setAttribute('text', 'language;');
                var instance = new Jang(element);
                if (typeof (instance) == 'object' && typeof (instance.refresh) == 'function' && typeof (instance.exist) == 'function')
                    done();
                else
                    done(new Error('create instance failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("check fields", function (done) {
            try {
                var element = document.createElement('jang');
                element.setAttribute('text', 'language;');
                var instance = new Jang(element);
                if (instance.element == element && instance.script instanceof Script && instance.exist() == false)
                    done();
                else
                    done(new Error('check fields failed!'));
            } catch (err) {
                done(err);
            }
        });
    });
}