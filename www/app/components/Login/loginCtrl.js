cyndyApp.controller('loginCtrl', function ($scope, $state, apiCall) {

    $scope.login = function (isValid) {
        if(isValid){
             var user = {
            email: $scope.email,
            password: $scope.password,
            userType: 'admin',
            deviceToken: '42353',
            deviceType: 'android'
        };
               localStorage.setItem('email', $scope.email);
        apiCall.getData('POST', 'login', user, '').then(function (dataResponse) {

            if (dataResponse.data.status == 200) {
                localStorage.setItem('token', 'Mobulous ' + dataResponse.data.data.token);
                localStorage.setItem('userType', dataResponse.data.data.userType);
                if (dataResponse.data.data.userType == 'admin') {
                    $state.go('navigation.dashboard');
                }
                else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Only admin can login here'
                    });
                }
            }
            else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: dataResponse.data.message
                });
            }
        });
        }
    };
    
});