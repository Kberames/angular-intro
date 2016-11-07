// Define the App Controller.
var app = angular.module('app');

app.controller (
    // Name of the controller.
    'HomeController',

    // Dependencies for the controller to work.
    [
        '$scope',

        // Controller callback function.
        function ($scope) {
            console.log("Home Controller has been loaded.");

            $scope.title = "Kim's Home Page";

            $scope.list = [
                "sarah",
                "jay",
                "sam"
            ]

            $scope.testMethod = function () {
                console.log("Test method fired.");

            }
        }
    ]
);
