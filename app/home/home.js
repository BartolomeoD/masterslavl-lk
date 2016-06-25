angular.module('MS.home', ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/home', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        })
    })
    .controller('HomeCtrl', function ($scope) {
        $scope.myInterval = 3000;
        $scope.user = {
            avasrc: 'images/avatar.png',
            firstname: 'Кристина',
            secondname: 'Виктория',
            thirdname: 'Гримми',
            birthdate: '12 мартя 1994',
            age: '22',
            money: 1550,
            cash: 1300
        }
        $scope.papers = {
            express: [
                {
                    cash: 720,
                    saldo: 20
                },
                {
                    cash: 730,
                    saldo: 30
                },
                {
                    cash: 740,
                    saldo: 40
                }
            ],
            other: [
                {
                    cash: 100,
                    saldo: 10
                },
                {
                    cash: 110,
                    saldo: 10
                },
                {
                    cash: 120,
                    saldo: 20
                }
            ]
        }
        $scope.slides = [
            {
                name: '9 МАЯ',
                desc: 'Описание'
            },
            {   
                name: '1 ИЮНЯ',
                desc: 'Описание'
            }
        ];
        $scope.tabs = [
            {
                condition: 'active'  
            },
            {
                condition: ''
            },
        ]
        $scope.change = function(tab) {
            console.log('Condition change');
            $scope.resetcond();
            $scope.tabs[tab].condition = 'active';
        };
        $scope.resetcond = function() {
            $scope.tabs[0].condition = '';
            $scope.tabs[1].condition = '';
        }
    })