cyndyApp.service('apiCall', function ($http) {

    var token = localStorage.getItem('token');
    this.getData = function (method, name, param, token) {
        var baseUrl = 'http://ec2-18-217-140-4.us-east-2.compute.amazonaws.com/api/';
        // var baseUrl = 'http://127.0.0.1:1337/api/'
        var apiName = baseUrl + name;
        return $http({
            method: method,
            url: apiName,
            data: param,
            headers: { 'Authorization': token }
        });
    }
})