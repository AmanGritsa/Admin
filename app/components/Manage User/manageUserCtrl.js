cyndyApp.controller('manageUserCtrl', function ($scope, $state, apiCall) {
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
        apiCall.getData('POST', 'getAllUsers', json, token).then(function (dataResponse) {
            $scope.myLoader = false;
            if (dataResponse.data.status == 200) {
                $scope.users = dataResponse.data.data;
            }
            else {
                alert(dataResponse.data.message);
            }
        });

        $scope.sendMessage = function (user) {
            swal({
                title: "Success thru Style",
                text: "<textarea id='text' placeholder='Write a message....' style='height: 90px;width: 95%'></textarea>",
                html: true,
                showCancelButton: true,
                closeOnConfirm: false,
            }, function (inputValue) {
                var val = document.getElementById('text').value;
                if (inputValue === false) return false;
                if (val === "") {
                    swal.showInputError("You need to write something!");
                    return false
                }

                var json = {
                    userType: userType,
                    email: user.email,
                    message: val
                };
                apiCall.getData('POST', 'sendMessageToUser', json, token).then(function (dataResponse) {
                    if (dataResponse.data.status == 200) {
                        swal("Sent!", "Your message has been sent to " + user.userName, "success");
                    }
                    else {
                        alert(dataResponse.data.message);
                    }
                });

            });


        }

    }

})