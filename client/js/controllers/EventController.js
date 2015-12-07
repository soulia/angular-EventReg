(function() {

    var eventsApp = angular.module("eventViewer", []);

    var EventController = function($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '12/4/2015',
            time: ' 4:20 pm'
        };

    };

    eventsApp.controller("EventController", EventController);

})();