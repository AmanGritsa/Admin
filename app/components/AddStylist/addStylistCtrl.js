cyndyApp.controller('addStylistCtrl', function ($scope, $state, apiCall) {

    $scope.addStylist = function (isValid) {
        if (isValid) {
            var token = localStorage.getItem('token');
            var userType = localStorage.getItem('userType');
            var json = {
                userType: userType,
                name: $scope.stylistName,
                email: $scope.email,
                phoneNumber: $scope.stylistPhone
            }
            apiCall.getData('POST', 'addStylist', json, token).then(function (dataResponse) {

                if (dataResponse.data.status == 200) {
                    swal({
                        type: 'success',
                        title: 'Stylist Added',
                        text: dataResponse.data.message
                    });
                    $state.go('navigation.manageUser');
                }
                else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: dataResponse.data.message
                    })
                }
            });
        }

    }

})