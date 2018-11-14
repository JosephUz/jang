const Script = require('../../libs/script.js');
const tr = require('../../locales/tr.js');

module.exports = function () {
    describe("/libs/script.js test", function () {
        it("must be function", function (done) {
            try {
                if (typeof (Script) == 'function')
                    done();
                else
                    done(new Error('must be function failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("create instance and check properties", function (done) {
            try {
                var instance = new Script("language");
                if (typeof (instance) == 'object' && typeof (instance.refresh) == 'function' && typeof (instance.onChange) == 'function')
                    done();
                else
                    done(new Error('create instance failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("check fields", function (done) {
            try {
                var instance = new Script("language");
                if (instance.text == "language" && instance.value == null && instance.events.onChange == null)
                    done();
                else
                    done(new Error('check fields failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("change value", function (done) {
            try {
                new Script("language").onChange(function (value) {
                    if (value == tr.language)
                        done();
                    else
                        done(new Error('change value failed!'));
                }).refresh(tr);
            } catch (err) {
                done(err);
            }
        });
    });
}