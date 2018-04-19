cyndyApp.controller('manageUserCtrl', function ($scope, apiCall) {


    var token = localStorage.getItem('token');
    var userType = localStorage.getItem('userType');
    var json = {
        userType: userType
    };
    $scope.users = [];
    apiCall.getData('POST', 'getAllUsers', json, token).then(function (dataResponse) {

        if (dataResponse.data.status == 200) {
            $scope.users = dataResponse.data.data;
        }
        else {
            alert(dataResponse.data.message);
        }
    });
})