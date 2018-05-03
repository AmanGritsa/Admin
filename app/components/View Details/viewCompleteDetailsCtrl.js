cyndyApp.controller('viewCompleteDetailsCtrl', function ($scope, $state, $stateParams, apiCall) {

    if (!$stateParams.user.email) {
        $state.go('navigation.completeRequest');
    }
    else {
        var token = localStorage.getItem('token');
        $scope.myLoader = true;
        $scope.userData = $stateParams.user;
        var json = {
            styleId: $scope.userData.styleId
        };

        apiCall.getData('POST', 'getUserStyle', json, token).then(function (dataResponse) {
            $scope.myLoader = false;
            if (dataResponse.data.status == 200) {
                $scope.user = dataResponse.data.data;
            }
        });

    }

});