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

        // Pending Request =================================
        .state('navigation.pendingRequest', {
            url: '/pendingRequest',
            templateUrl: 'app/components/Request/Pending/pendingRequest.html',
            controller: 'pendingRequestCtrl'
        })

        // Complete Request =================================
        .state('navigation.completeRequest', {
            url: '/completeRequest',
            templateUrl: 'app/components/Request/Complete/completeRequest.html',
            controller: 'completeRequestCtrl'
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

        // Manage User
        .state('navigation.manageUser', {
            url: '/ManageUser',
            templateUrl: 'app/components/Manage User/manageUser.html',
            controller: 'manageUserCtrl',
            // params: {
            //     user: {}
            // }
        })

});
