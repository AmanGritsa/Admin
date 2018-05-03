
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

        // Add Stylist =================================
        .state('navigation.addStylist', {
            url: '/addStylist',
            templateUrl: 'app/components/AddStylist/addStylist.html',
            controller: 'addStylistCtrl'
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

        // View completet request details
        .state('navigation.viewCompleteDetails', {
            url: '/ViewCompleteDetails',
            templateUrl: 'app/components/View Details/viewCompleteDetails.html',
            controller: 'viewCompleteDetailsCtrl',
            params: {
                user: {}
            }
        })
        
        // view pending request details
        .state('navigation.viewPendingDetails', {
            url: '/ViewPendingDetails',
            templateUrl: 'app/components/View Details/viewPendingDetails.html',
            controller: 'viewPendingDetailsCtrl',
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
