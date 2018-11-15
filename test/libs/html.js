const html = require('../../libs/html.js');

module.exports = function () {
    describe("/libs/html.js test", function () {
        it("check element", function (done) {
            try {
                if (html.element == document.getElementsByTagName("html")[0])
                    done();
                else
                    done(new Error('check properties failed!'));
            } catch (err) {
                done(err);
            }
        });
    });
}