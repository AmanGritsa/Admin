cyndyApp.controller('dashboardCtrl', function ($scope, $state, apiCall, $stateParams) {

    
    


    
    var token = localStorage.getItem('token');
    var userType = localStorage.getItem('userType');
    var json = {
        userType: userType
    };
    $scope.users = [];
    // console.log(userDetails);
    $scope.viewDetail = function (userData) {
        params = {
            'user': userData
        }
        $state.go('navigation.viewDetails', params);
    };

    $scope.manageImage = function (userData) {
        params = {
            'user': userData
        }
        $state.go('navigation.manage', params);
    };

   
    apiCall.getData('POST', 'getUsersToManageImage', json, token).then(function (dataResponse) {

        if(dataResponse.data.status == 200){
            $scope.users = dataResponse.data.data;
        }
        else {
            alert(dataResponse.data.message);
        }
    });
   
    // $scope.users = [
    //     {
    //         'name': 'John',
    //         'email': 'john@gmail.com',
    //         'phoneNumber': '1234567890',
    //         'stylistName': 'N/A'
    //     },
    //     {
    //         'name': 'John',
    //         'email': 'john@gmail.com',
    //         'phoneNumber': '1234567890',
    //         'stylistName': 'N/A'
    //     },
    //     {
    //         'name': 'John',
    //         'email': 'john@gmail.com',
    //         'phoneNumber': '1234567890',
    //         'stylistName': 'N/A'
    //     },
    //     {
    //         'name': 'John',
    //         'email': 'john@gmail.com',
    //         'phoneNumber': '1234567890',
    //         'stylistName': 'N/A'
    //     }
    // ]
})