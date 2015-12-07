// IIFE pattern

(function() {

    // 2/3 - define the eventsApp module. It's important to pass the [] which tells angular that the module is defined here,
    // otherwise, angular will think that this is a reference to a module that is defined elsewhere.
    // var eventsApp = angular.module("eventViewer", []);
    eventsApp = angular.module("eventsApp");

    var EventController = function($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '12/4/2015',
            time: ' 4:20 pm',
            location: {
                address: 'Smuggs',
                city: 'Cambridge',
                state: 'VT'
            },
            imageUrl: '/img/angularjs-logo.png'
        };

    };

    // 3/3 - now, register the module
    //  This tells the controller that this is the EventController and EventController is the function to use...
    eventsApp.controller("EventController", ["$scope", EventController]);

})();