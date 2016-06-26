angular.module('MS.connections', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider.when('/app/connections', {
        templateUrl: 'app/connections/connections.html',
        controller: 'ConnectionsCtrl'
    })
})
.controller('ConnectionsCtrl', function($scope, $window) {
    $scope.connections = [
        {
            name: 'Осипов Виктор',
            link: 'https://new.vk.com/buktp'
        },
        {
            name: 'Гатауллин Диас',
            link: 'https://new.vk.com/maybe_online'
        },
        {
            name: 'Сентябов Максим',
            link: 'https://new.vk.com/hellpad'
        }
    ];
    $scope.gotopage = function(user) {
        $window.open(user.link);
    }
})