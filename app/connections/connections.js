angular.module('MS.connections', [
    'ngRoute',
    'ui.bootstrap'
])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/connections', {
            templateUrl: 'app/connections/connections.html',
            controller: 'ConnectionsCtrl'
        })
    })
    .controller('ConnectionsCtrl', function ($scope, $location) {
        $scope.connections = [
            {
                name: 'Осипов Виктор',
                id: 'osipovvictor'
            },
            {
                name: 'Гатауллин Диас',
                id: 'gataulindias'
            },
            {
                name: 'Сентябов Максим',
                id: 'sentyabovmax'
            }
        ];
        $scope.gotopage = function (user) {
            $location.path('app/conchild/' + user);
        };
    })