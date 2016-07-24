var request = require('request');
// require('request-debug')(request);

request.post({
    url: 'http://hitronhub.home/goform/login',
    form: {
        usernamehaha: 'admin',
        passwordhaha: 'password'
    }
}, function(err, response, body) {
    var userid = /userid=([0-9]+)/.exec(response.headers['set-cookie'])[1];
    var cookie = 'userName=admin; password=password; userid=' + userid;
    request.post({
        url: 'http://hitronhub.home/goform/Reboot',
        headers: {
            'Cookie': cookie
        },
        form: {
            model: '{"reboot":"1"}',
            webcheck: cookie
        }
    });
});
