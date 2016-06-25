angular.module('MS.achievements', [
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/achievements', {
            templateUrl: 'app/achievements/achievements.html',
            controller: 'AchCtrl'
        })
    })
    .controller('AchCtrl', function ($scope, $rootScope) {
        $scope.achievements = [
            {
                id: 0,
                station: 'Автомастерская',
                name: 'Прошел базовое занятие "Мастер-класс: ПДД"',
                gained: '70',
                rank: 'Заслуженный мастер III категории',
                showdesc: false
            },
            {
                id: 1,
                station: 'Автомастерская',
                name: 'Прошел базовое занятие "Мастер-класс: ПДД"',
                gained: '70',
                rank: 'Заслуженный мастер III категории',
                showdesc: false
            },
            {
                id: 2,
                station: 'Автомастерская',
                name: 'Прошел базовое занятие "Мастер-класс: ПДД"',
                gained: '70',
                rank: 'Заслуженный мастер III категории',
                showdesc: false
            }
        ];
        $rootScope.newach = $scope.achievements.length;
        $scope.showdesc = function(id) {
            $scope.achievements[id].showdesc = !$scope.achievements[id].showdesc;
        };
    })