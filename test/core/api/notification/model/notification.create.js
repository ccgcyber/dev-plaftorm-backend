describe('notification', function () {
    describe('.create()', function () {
        it('should create a notification', function () {

            const Notification = require(__base + 'core/api/notification/model/notification.js');

            var user = {
                id: '08530e76-0318-4557-98a7-e570ec0a31db',
                email: 'test@test.fr',
                language: 'en'
            };

            var scope = {
                module: {
                    name: 'philips-hue'
                }
            };
            
            return Notification.create(user, 'MODULE_IN_REVIEW', scope)
                .then((createdNotification) => {
                    createdNotification.should.have.property('type');
                    createdNotification.should.have.property('params');
                });
        });
    });
});