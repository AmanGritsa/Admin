cyndyApp.controller('navigationCtrl', function ($scope, $state) {

    // $scope.selectUser = true;
    $scope.selectedTab = localStorage.getItem('getActive');
    $scope.userName = localStorage.getItem('userName');
    $scope.goToManageUsers = function (user) {
        $scope.selectedTab = user;
        localStorage.setItem('getActive', user);
        $state.go('navigation.manageUser');

    }

    $scope.goToPendingRequest = function (pending) {
        $scope.selectedTab = pending;
        localStorage.setItem('getActive', pending);
        $state.go('navigation.pendingRequest');

    }
    $scope.goToCompleteRequest = function (complete) {
        $scope.selectedTab = complete;
        localStorage.setItem('getActive', complete);
        $state.go('navigation.completeRequest');

    }

    $scope.goToAddStylist = function () {
        localStorage.setItem('getActive', null);
        $state.go('navigation.addStylist');
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

    $(document).ready(function () {
        $('.collapsed').click(function () {
            $('.collapse').slideToggle()
        })
    })

})