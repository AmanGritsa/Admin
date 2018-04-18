cyndyApp.controller('manageImageCtrl', function ($scope, $state, $stateParams, apiCall) {

    var token = localStorage.getItem('token');

    if (!$stateParams.user.email) {
        $state.go('navigation.dashboard');
    }
    else {
        $scope.user = $stateParams.user;
    }


    $scope.submitImage = function () {

        var imageData = {
            styleId: $scope.user.styleId,
            email: $scope.user.email,
            colors: {
                hair: $scope.hairColor,
                skin: $scope.skinColor,
                eyes: $scope.eyeColor,
                lips: $scope.lipsColor,
                metals: $scope.metalsColor,
                dress: $scope.dressColor
            }
        };

        apiCall.getData('POST', 'updateImageDetails', imageData, token).then(function (dataResponse) {

            if (dataResponse.data.status == 200) {
                swal({
                    type: 'success',
                    title: 'Image Updated',
                    text: dataResponse.data.message
                })
            }
            else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: dataResponse.data.message
                  })
            }
        });

    }

});