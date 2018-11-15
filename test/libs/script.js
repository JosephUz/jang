const Script = require('../../libs/script.js');
const tr = require('../../locales/tr.js');

module.exports = function () {
    describe("/libs/script.js test", function () {
        it("create instance", function (done) {
            try {
                var instance = new Script("language");
                if (instance instanceof Script)
                    done();
                else
                    done(new Error('create instance failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("check instance", function (done) {
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