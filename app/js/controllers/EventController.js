// IIFE pattern

// (function() {

// 2/3 - define the eventsApp module. It's important to pass the [] which tells angular that the module is defined here,
// otherwise, angular will think that this is a reference to a module that is defined elsewhere.
// var eventsApp = angular.module("eventViewer", []);

eventsApp = angular.module("eventsApp");

// angular
//     .module('eventsApp')
//     .controller('EventController', EventController);

// var EventController = function($scope, eventData) 

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.buttonDisabled = false;
        $scope.sortorder = 'name';

        $scope.event = eventData.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);

// 3/3 - now, register the module
//  This tells the controller that this is the EventController and EventController is the function to use...
// eventsApp.controller("EventController", ["$scope", EventController]);

// })();