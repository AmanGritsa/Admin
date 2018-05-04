cyndyApp.controller('stylistListCtrl', function ($scope, $state, apiCall, $http, $stateParams) {

    var token = localStorage.getItem('token');

    $scope.myLoader = true;

    if (token == 'null') {
        $state.go('login');
    }
    else {

        $scope.goToAddStylist = function () {
            localStorage.setItem('getActive', null);
            $state.go('navigation.addStylist');
        }
        $scope.deleteStylist = function (userEmail, index) {
            var userType = localStorage.getItem('userType');
            var json = {
                userType: userType,
                email: userEmail
            }
            apiCall.getData('DELETE', 'deleteStylist', json, token).then(function (dataResponse) {

                if (dataResponse.data.status == 200) {
                    swal({
                        type: 'success',
                        title: 'Stylist Removed',
                        text: 'Stylist successfully deleted'
                    });
                    $scope.stylists.splice(index, 1);
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

        $scope.stylists = [];

        apiCall.getData('GET', 'getStylistList', '', '').then(function (dataResponse) {
            $scope.myLoader = false;
            if (dataResponse.data.status == 200) {
                $scope.stylists = dataResponse.data.data;
            }
        });
    }

})