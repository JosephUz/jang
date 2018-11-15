const Jang = require('../../libs/jang.js');
const Script = require('../../libs/script.js');

module.exports = function () {
    describe("/libs/jang.js test", function () {
        it("create instance", function (done) {
            try {
                var element = document.createElement('jang');
                element.setAttribute('text', 'language;');
                var instance = new Jang(element);
                if (instance instanceof Jang)
                    done();
                else
                    done(new Error('create instance failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("check instance", function (done) {
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