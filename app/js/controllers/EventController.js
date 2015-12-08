// IIFE pattern

(function() {

    // 2/3 - define the eventsApp module. It's important to pass the [] which tells angular that the module is defined here,
    // otherwise, angular will think that this is a reference to a module that is defined elsewhere.
    // var eventsApp = angular.module("eventViewer", []);
    eventsApp = angular.module("eventsApp");

    var EventController = function($scope) {
        
        $scope.buttonDisabled = false;
        $scope.sortorder = 'name';

        $scope.event = {
            name: 'Angular Boot Camp',
            date: Date.parse('12/4/2015'),
            // date: new Date(2015, 12, 4),
            // date: '20151204T00:00:00',
            time: ' 4:20 pm',
            location: {
                address: 'Smuggs',
                city: 'Cambridge',
                state: 'VT'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    currentBid: 0,
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In the session you will learn stuff',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    currentBid: 34,
                    duration: 2,
                    level: 'Intro',
                    abstract: 'In the session you will learn a little more stuff',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Fred Flintstone',
                    currentBid: 42,
                    duration: 4,
                    level: 'Beginning',
                    abstract: 'In the session you will learn some stuff. In the session you will learn some stuff. In the session you will learn some stuff.',
                    upVoteCount: 0
                }
            ]
        };
        
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

    };

    // 3/3 - now, register the module
    //  This tells the controller that this is the EventController and EventController is the function to use...
    eventsApp.controller("EventController", ["$scope", EventController]);

})();