cyndyApp.service('apiCall', function ($http) {

    var token = localStorage.getItem('token');
    this.getData = function (method, name, param, token) {
        var baseUrl = 'http://ec2-18-217-140-4.us-east-2.compute.amazonaws.com/';
        // var baseUrl = 'http://127.0.0.1:1337/'
        var apiName = baseUrl + name;
        // $http() returns a $promise that we can add handlers with .then()
        return $http({
            method: method,
            url: apiName,
            data: param,
            headers: { 'Authorization': token }
        });
    }
})