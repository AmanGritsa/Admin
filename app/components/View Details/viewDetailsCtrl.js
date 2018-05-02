cyndyApp.controller('viewDetailsCtrl', function ($scope, $state, $stateParams) {
   
    if (!$stateParams.user.email) {
        $state.go('navigation.pendingRequest');
    }
    else {
        $scope.user = $stateParams.user;
    }

});