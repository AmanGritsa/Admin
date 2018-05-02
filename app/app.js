var cyndyApp = angular.module('CyndyPorter', ['ui.router'])


    .run(function ($rootScope) {

        $rootScope.getConvertedDate = function (time) {
            var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

            var date = new Date(time);

            var dateStr = date.getDate() + ' '
                + months[date.getMonth()] + ' '
                + date.getFullYear();
            return dateStr;
        }


    })
