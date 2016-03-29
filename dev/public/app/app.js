angular
.module(
	'app.route', 
	['ngRoute']
)
.config(config)

function config($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'views/home/index.html'
    })
    .when('/services', {
        templateUrl: 'views/services/index.html'
    })

    //$locationProvider.html5Mode(true);
} 

config.$inject = ['$routeProvider', '$locationProvider']