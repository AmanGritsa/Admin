cyndyApp.controller('navigationCtrl', function ($scope, $state) {

    // $scope.selectUser = true;
$scope.selectedTab = localStorage.getItem('getActive');
    $scope.goToManageUsers = function (user) {
        $scope.selectedTab = user;
        localStorage.setItem('getActive', user);
        $state.go('navigation.manageUser');

    }
    $scope.goToManageRequest = function (image) {
        $scope.selectedTab = image;
        localStorage.setItem('getActive', image);
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