// (function() {

    eventsApp.factory('eventData', function() {
        
    // angular
    //     .module('eventsApp')
    //     .factory('eventData', eventData);

    // function eventData() {
    
        return {
            event: {
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
                sessions: [{
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    currentBid: 0,
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In the session you will learn stuff',
                    upVoteCount: 0
                }, {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    currentBid: 34,
                    duration: 2,
                    level: 'Intro',
                    abstract: 'In the session you will learn a little more stuff',
                    upVoteCount: 0
                }, {
                    name: 'Well behaved controllers',
                    creatorName: 'Fred Flintstone',
                    currentBid: 42,
                    duration: 4,
                    level: 'Beginning',
                    abstract: 'In the session you will learn some stuff. In the session you will learn some stuff. In the session you will learn some stuff.',
                    upVoteCount: 0
                }]
            }
        };

    }
    );
    
    // eventsApp.controller("EventController", ["$scope", EventController]);

// })();