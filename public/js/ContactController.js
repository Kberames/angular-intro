// Define the App Controller.
var app = angular.module('app');

app.controller (
    // Name of the controller.
    'ContactController',

    // Dependencies for the controller to work.
    [
        '$scope',

        // Controller callback function.
        function ($scope) {
            console.log("Contact Controller has been loaded.");

            $scope.title = "Kim's Contact Page";

        }
    ]
);
