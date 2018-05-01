cyndyApp.controller('dashboardCtrl', function ($scope, $state, apiCall, $stateParams) {

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
            $state.go('navigation.viewDetails', params);
        };

        $scope.manageImage = function (userData) {
            params = {
                'user': userData
            }
            $state.go('navigation.manage', params);
        };


        apiCall.getData('POST', 'getUsersToManageImage', json, token).then(function (dataResponse) {
            $scope.myLoader = false;
            if (dataResponse.data.status == 200) {
                $scope.users = dataResponse.data.data;
            }
        });


        $scope.downloadPdf = function (user) {
            var pdf = new jsPDF();
            var width = pdf.internal.pageSize.width;
            var height = pdf.internal.pageSize.height;
            var img = new Image;
            img.onload = function () {
                pdf.text(20, 20, 'User Name :');
                pdf.text(60, 20, user.userName);
                pdf.text(20, 30, 'Email Id :');
                pdf.text(60, 30, user.email);
                pdf.text(20, 40, 'Mob. Number :');
                pdf.text(60, 40, user.phoneNumber);
                pdf.text(20, 50, 'Stylist Name :');
                pdf.text(60, 50, user.stylistName);
                pdf.text(20, 70, 'User Image');
                pdf.addImage(this, 'JPEG', 20, 100, 180, 150);
                pdf.save("report.pdf");
            };
            img.crossOrigin = "";  // for demo as we are at different origin than image
            img.src = user.imageUrl;

        }
    }

})