var myApp = angular.module('myApp', ['ngRoute', 'gilbox.kineticSlider']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/brothers', {
        templateUrl:  'pages/brothers.html',
        controller: 'brothersController'
    })
    
    .when('/alumni', {
        templateUrl: 'pages/alumni.html',
        controller: 'alumniController'
    })
    
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })
});

myApp.controller('mainController', ['$scope', '$timeout', '$window', function($scope, $timeout, $window) {
    $scope.photos = [
        {name: "images/ato1.jpg"},
        {name: "images/ato2.jpg"},
        {name: "images/ato3.jpg"},
        {name: "images/ato1.jpg"},
        {name: "images/ato2.jpg"},
        {name: "images/ato3.jpg"}
    ]
    
    $('#eventlist').gCalReader({
      calendarId:'q8774hmduqesk7mjpt7c5iq530@group.calendar.google.com',
      apiKey:'AIzaSyCH7F6ChOHVASIiOY6QU4KPCVxjLufu0Jc',
      dateFormat: 'LongDate',
      errorMsg: 'No events in calendar',
      maxEvents: 25,
      futureEventsOnly: true,
      sortDescending: false
    });
        
    //This is really dumb. The image carousel has a bug where it doesn't load right
    //initially unless there is a resize event...
    $timeout(function() {
        $window.dispatchEvent(new Event("resize"));
    },  10);
    
}]);

myApp.controller('brothersController', ['$scope', function($scope) {
    
    $scope.brothers = [
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        },
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        },
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        },
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        }
    ];
}]);

myApp.controller('alumniController', ['$scope', function($scope) {
        $scope.alumni = [
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        },
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        },
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        },
        {
            "name" : "John Doe",
            "title" : "President",
            "image" : "images/ato3.jpg"
        }
    ];
}]);

myApp.controller('aboutController', ['$scope', function($scope) {
    
}]);

myApp.controller('contactController', ['$scope', function($scope) {
    
}]);

myApp.directive("brotherImage", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/brotherImage.html',
       replace: true,
       scope: {
            brotherObj: "="
       }
   } 
});

$(function(){ 
    var navMain = $("#navbarCollapse");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
 });
});