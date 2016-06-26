angular.module('MS.finances', [
    'ngRoute'
])
.config(function($routeProvider) {
    $routeProvider.when('/app/finances', {
        templateUrl: 'app/finances/finances.html',
        controller: 'FinancesCtrl'
    })
})
.controller('FinancesCtrl', function($scope) {
    $scope.finances = {
        express: [
            {
                cash: 720,
                saldo: 20
            },
            {
                cash: 720,
                saldo: 20
            },
            {
                cash: 720,
                saldo: 20
            }
        ],
        others: [
            {
                cash: 720,
                date: '09.06.2016'
            },
            {
                cash: 720,
                date: '09.06.2016'
            },
            {
                cash: 720,
                date: '09.06.2016'
            }
        ]
    }
    $scope.history = [
        {
            date: '20.05.2016',
            station: 'Автомастерская',
            rank: 'Прохождение БЗ "Мастер"',
            spend: 80,
        },
        {
            date: '20.05.2016',
            station: 'Автомастерская',
            rank: 'Прохождение БЗ "Мастер"',
            spend: 70,
        },
        {
            date: '20.05.2016',
            station: 'Автомастерская',
            rank: 'Прохождение БЗ "Мастер"',
            spend: 90,
        }
    ]
})