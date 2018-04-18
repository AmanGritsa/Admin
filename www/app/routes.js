var cyndyApp = angular.module('CyndyPorter', ['ui.router']);

cyndyApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        // Login State ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'app/components/Login/login.html',
            controller: 'loginCtrl'
        })
        // Navigation
        .state('navigation', {
            url: '/navigation',
            abstract: true,
            templateUrl: 'app/components/Navigation/navigation.html',
             controller: 'navigationCtrl'
        })

        // Dashboard State =================================
        .state('navigation.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/components/Dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })

        // Manage Image
        .state('navigation.manage', {
            url: '/ManageImage',
            templateUrl: 'app/components/Manage Image/manageImage.html',
            controller: 'manageImageCtrl',
            params: {
                user: {}
            }
        })

        // View Details
        .state('navigation.viewDetails', {
            url: '/ViewDetails',
            templateUrl: 'app/components/View Details/viewDetails.html',
            controller: 'viewDetailsCtrl',
            params: {
                user: {}
            }
        })

});
