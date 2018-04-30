cyndyApp.controller('manageImageCtrl', function ($scope, $state, $stateParams, apiCall) {

    var token = localStorage.getItem('token');

    if (!$stateParams.user.email) {
        $state.go('navigation.dashboard');
    }
    else {

        $scope.skins = [{}];
        $scope.eyes = [{}];
        $scope.neutrals = [{}];
        $scope.lips = [{}];
        $scope.metals = [{}];
        $scope.reds = [{}];
        $scope.wows = [{}];
        $scope.accents = [{}];
        $scope.avoids = [{}];

        $scope.addSkin = function () {
            if ($scope.skins.length >= 3) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 3 colors!"
                });
            }
            else {
                $scope.skins.push({ skin: '' });
            }
        };
        $scope.addEyes = function () {
            if ($scope.eyes.length >= 3) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 3 colors!"
                });
            }
            else {
                $scope.eyes.push({ eye: '' });
            }
        };

        $scope.addLips = function () {
            if ($scope.lips.length >= 3) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 3 colors!"
                });
            }
            else {
                $scope.lips.push({ lip: '' });
            }
        };
        $scope.addMetals = function () {
            if ($scope.metals.length >= 3) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 3 colors!"
                });
            }
            else {
                $scope.metals.push({ metal: '' });
            }
        };
        $scope.addReds = function () {
            if ($scope.reds.length >= 3) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 3 colors!"
                });
            }
            else {
                $scope.reds.push({ red: '' });
            }
        };
        $scope.addNeutrals = function () {
            if ($scope.neutrals.length >= 10) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 10 colors!"
                });
            }
            else {
                $scope.neutrals.push({ hair: '' });
            }

        };
        $scope.addWows = function () {
            if ($scope.wows.length >= 5) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 5 colors!"
                });
            }
            else {
                $scope.wows.push({ wow: '' });
            }
        };
        $scope.addAccents = function () {
            if ($scope.accents.length >= 10) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 10 colors!"
                });
            }
            else {
                $scope.accents.push({ accent: '' });
            }
        };
        $scope.addAvoids = function () {
            if ($scope.avoids.length >= 5) {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: "You can't add more than 5 colors!"
                });
            }
            else {
                $scope.avoids.push({ avoid: '' });
            }
        };

        $scope.user = $stateParams.user;

        // Rotate Image
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var width = 0;
        var height = 0;
        var diagonal = 0;
        var angleInDegrees = 0;
        var image = document.createElement("img");
        image.onload = function () {
            width = image.naturalWidth;
            height = image.naturalHeight;
            diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
            ctx.canvas.height = diagonal;
            ctx.canvas.width = diagonal;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(diagonal / 2, diagonal / 2);
            ctx.rotate(0 * Math.PI / 180);
            ctx.drawImage(image, -width / 2, -height / 2);
            ctx.restore();
        }
        image.src = $scope.user.imageUrl;

        $scope.rotateRight = function () {
            angleInDegrees += 90;
            drawRotated(angleInDegrees);
        };

        $scope.rotateLeft = function () {
            angleInDegrees -= 90;
            drawRotated(angleInDegrees);
        };

        function drawRotated(degrees) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(diagonal / 2, diagonal / 2);
            ctx.rotate(degrees * Math.PI / 180);
            ctx.drawImage(image, -width / 2, -height / 2);
            ctx.restore();
        }
    }

    $scope.skinValues = [];
    $scope.eyeValues = [];
    $scope.lipValues = [];
    $scope.metalValues = [];
    $scope.redValues = [];
    $scope.neutralValues = [];
    $scope.wowValues = [];
    $scope.accentValues = [];
    $scope.avoidValues = [];

    // Submit Image by Admin
    $scope.submitImage = function () {

        var imageData = {
            styleId: $scope.user.styleId,
            email: $scope.user.email,
            colors: {
                skin: $scope.skinValues,
                eyes: $scope.eyeValues,
                lips: $scope.lipValues,
                metals: $scope.metalValues,
                reds: $scope.redValues,
                neutral: $scope.neutralValues,
                wow: $scope.wowValues,
                accent: $scope.accentValues,
                avoids: $scope.avoidValues
            }
        };
        console.log(imageData);

        apiCall.getData('POST', 'updateImageDetails', imageData, token).then(function (dataResponse) {

            if (dataResponse.data.status == 200) {
                swal({
                    type: 'success',
                    title: 'Image Updated',
                    text: dataResponse.data.message
                });
                $state.go('navigation.dashboard');
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