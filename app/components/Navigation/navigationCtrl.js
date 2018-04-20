cyndyApp.controller('navigationCtrl', function ($scope, $state) {

    $scope.selectUser = true;
    $scope.goToManageUsers = function () {
        $scope.selectUser = true;
        $scope.selectImage = false;
        $state.go('navigation.manageUser');

    }
    $scope.goToManageRequest = function () {
        $scope.selectImage = true;
        $scope.selectUser = false;
        $state.go('navigation.dashboard');

    }

    $scope.logout = function () {
        localStorage.setItem('token', null);
        localStorage.setItem('userType', null);
        $state.go('login');
    }

    $(document).ready(function () {
        $('.dropdown').click(function () {
            $('.dropdown-menu').toggleClass('opensimp');
        })
    })


    $(document).ready(function () {
        $('.btn-toggle-fullwidth').click(function () {
            $('body').toggleClass('layout-fullwidth')
        })
    })

})