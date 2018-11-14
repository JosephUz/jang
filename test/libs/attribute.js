const Attribute = require('../../libs/attribute.js');

module.exports = function () {
    describe("/libs/attribute.js test", function () {
        it("must be function", function (done) {
            try {
                if (typeof (Attribute) == 'function')
                    done();
                else
                    done(new Error('must be function failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("create instance and check properties", function (done) {
            try {
                var element = document.createElement('div');
                element.setAttribute('jang', 'title:language;');
                var instance = new Attribute(element);
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
                var element = document.createElement('div');
                element.setAttribute('jang', 'title:language;');
                var instance = new Attribute(element);
                if (instance.element == element && instance.scripts.length == 1 && instance.element.getAttribute('jang') == null)
                    done();
                else
                    done(new Error('check fields failed!'));
            } catch (err) {
                done(err);
            }
        });
    });
}