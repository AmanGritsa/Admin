cyndyApp.controller('viewDetailsCtrl', function ($scope, $state, $stateParams) {
    // $scope.user = $state.params;
    //     console.log($stateParams);
    if (!$stateParams.user.email) {
        $state.go('dashboard');
    }
    else {
        $scope.user = $stateParams.user;
    }

});