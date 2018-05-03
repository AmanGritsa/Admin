cyndyApp.controller('pendingRequestCtrl', function ($scope, $state, apiCall, $http, $stateParams) {

    var token = localStorage.getItem('token');
    $scope.myLoader = true;
   
    if (token == 'null') {
        $state.go('login');
    }
    else {
        var userType = localStorage.getItem('userType');
        var json = {
            userType: userType
        };
        $scope.users = [];
        $scope.viewDetail = function (userData) {
            params = {
                'user': userData
            }
            $state.go('navigation.viewPendingDetails', params);
        };

        $scope.manageImage = function (userData) {
            params = {
                'user': userData
            }
            $state.go('navigation.manage', params);
        };

        // download image uploaded by user
        $scope.downloadImage = function(url){
            $http.get(url, {responseType:'blob'})
            .then(function(results){
                var data = results.data; 
                var blob = new Blob(
                    [data],
                    {type: "image/jpeg"}
                );
                saveAs(blob, "image.jpg");
            });
        }

        apiCall.getData('POST', 'getPendingRequest', json, token).then(function (dataResponse) {
            $scope.myLoader = false;
            if (dataResponse.data.status == 200) {
                $scope.users = dataResponse.data.data;
            }
        });
    }

})