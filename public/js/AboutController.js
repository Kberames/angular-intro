// Define the App Controller.
var app = angular.module('app');

app.controller (
    // Name of the controller.
    'AboutController',

    // Dependencies for the controller to work.
    [
        '$scope',

        // Controller callback function.
        function ($scope) {
            console.log("About Controller has been loaded.");

            $scope.title = "Kim's About Page";

        }
    ]
);
