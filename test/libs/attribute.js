const Attribute = require('../../libs/attribute.js');

module.exports = function () {
    describe("/libs/attribute.js test", function () {
        it("create instance", function (done) {
            try {
                var element = document.createElement('div');
                element.setAttribute('jang', 'title:language;');
                var instance = new Attribute(element);
                if (instance instanceof Attribute)
                    done();
                else
                    done(new Error('create instance failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("check instance", function (done) {
            try {
                var element = document.createElement('div');
                element.setAttribute('jang', 'title:language;');
                var instance = new Attribute(element);
                if (instance.element == element && instance.scripts.length == 1 && instance.element.getAttribute('jang') == null)
                    done();
                else
                    done(new Error('check instance failed!'));
            } catch (err) {
                done(err);
            }
        });
    });
}