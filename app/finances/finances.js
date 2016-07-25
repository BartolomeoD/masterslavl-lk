angular.module('MS.finances', [
    'ngRoute','ngAnimate'
])
.config(function($routeProvider) {
    $routeProvider.when('/app/finances', {
        templateUrl: 'app/finances/finances.html',
        controller: 'FinancesCtrl'
    })
})
.controller('FinancesCtrl', function($scope) {
	$scope.showType = function(type){
		switch(type){
			case 'cardOp': if($scope.showCard) return true; break;
			case 'cashOp': if($scope.showCash) return true; break;
			case 'securitiesOp': if($scope.showSecurities) return true; break;
			case 'charityOp': if($scope.showCharity) return true; break;
			
		}
	}
	$scope.show=[true, true, true, true];
	$scope.showCard=true;
	$scope.showSecurities=true;
	$scope.showCash=true;
	$scope.showCharity=true;
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
			image:'images/card.png',
			type: 'cardOp',
            date: '20.05.2016',
            station: 'Автомастерская',
            rank: 'Прохождение БЗ "Мастер"',
            spend: 80,
        },
        {
			image:'images/cash.png',
			type: 'cashOp',
            date: '20.05.2016',
            station: 'Автомастерская',
            rank: 'Прохождение БЗ "Мастер"',
            spend: 70,
        },
        {
			image:'images/securities.png',
			type: 'securitiesOp',
            date: '20.05.2016',
            station: 'Автомастерская',
            rank: 'Прохождение БЗ "Мастер"',
            spend: 90,
        },
        {
			image:'images/charity.png',
			type: 'charityOp',
            date: '20.05.2016',
            station: 'Автомастерская',
            rank: 'Прохождение БЗ "Мастер"',
            spend: 90,
        }
    ]
})