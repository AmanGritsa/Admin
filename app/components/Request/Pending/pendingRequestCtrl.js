cyndyApp.controller('pendingRequestCtrl', function ($scope, $state, apiCall, $http, $stateParams) {

    var token = localStorage.getItem('token');
    $scope.myLoader = true;

    if (token == 'null') {
        $state.go('login');
    }
    else {

        // get list of pending request
        $scope.users = [];
        var userType = localStorage.getItem('userType');
        var json = {
            userType: userType
        };
        apiCall.getData('POST', 'getPendingRequest', json, token).then(function (dataResponse) {
            $scope.myLoader = false;
            if (dataResponse.data.status == 200) {
                $scope.users = dataResponse.data.data;
            }
        });

        // go to view details
        $scope.viewDetail = function (userData) {
            params = {
                'user': userData
            }
            $state.go('navigation.viewPendingDetails', params);
        };

        // go to manage image
        $scope.manageImage = function (userData) {
            params = {
                'user': userData
            }
            $state.go('navigation.manage', params);
        };

        // download image uploaded by user
        $scope.downloadImage = function (url) {
            $http.get(url, { responseType: 'blob' })
                .then(function (results) {
                    var data = results.data;
                    var blob = new Blob(
                        [data],
                        { type: "image/jpeg" }
                    );
                    saveAs(blob, "image.jpg");
                });
        }

        // delete pending request
        $scope.deleteRequest = function (user) {
            var json = {
                styleId: user.styleId
            };
            apiCall.getData('DELETE', 'deleteRequest', json, token).then(function (dataResponse) {

                var index = $scope.users.indexOf(user);

                if (dataResponse.data.status == 200) {
                    swal({
                        type: 'success',
                        title: 'Request Removed',
                        text: 'Request successfully deleted'
                    });
                    $scope.users.splice(index, 1);
                }
                else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: dataResponse.data.message
                    });
                }
            });
        }
    }

})