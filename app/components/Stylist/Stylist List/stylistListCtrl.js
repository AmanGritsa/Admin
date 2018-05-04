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
        $scope.deleteStylist = function(){
            swal({
                type: 'warning',
                title: 'Stylist Removed',
                text: 'Work in progress'
            });
        }

        $scope.users = [];

        apiCall.getData('GET', 'getStylistList', '', '').then(function (dataResponse) {
            $scope.myLoader = false;
            if (dataResponse.data.status == 200) {
                $scope.users = dataResponse.data.data;
            }
        });
    }

})