console.log("hello world");

var app = angular.module (
    // This is the name of the application/module
    'app',
    // Specify the dependencies or required modules need
    // for this application to run.

    // Specify that we want to include the angular ui
    // router for page navigation
    ['ui.router']
);

// Setup the app module.
app.config([
    // Specify the dependencies objects to pull into the configuration.
    '$stateProvider',

    // Callback method to run for the configuration.
    function ($stateProvider){

        // Our stateProvider controlls what state our app is in.
        $stateProvider
        .state ('home', {
            url: '/',
            // template: 'Hi all this is a test...'
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .state ('about', {
            url: '/about',
            // template: 'This is the about test...'
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })
        .state ('contact', {
            url: '/contact',
            // template: 'This is the contact test...'
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
    })
    }
]);
