const html = require('../../libs/html.js');

module.exports = function () {
    describe("/libs/html.js test", function () {
        it("check properties", function (done) {
            try {
                if (html.element == document.getElementsByTagName("html")[0])
                    done();
                else
                    done(new Error('check properties failed!'));
            } catch (err) {
                done(err);
            }
        });

        it("check functions", function (done) {
            try {
                if (typeof (html.refresh) == 'function' && typeof (html.read) == 'function')
                    done();
                else
                    done(new Error('check functions failed!'));
            } catch (err) {
                done(err);
            }
        });

    });
}