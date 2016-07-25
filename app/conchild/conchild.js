angular.module('MS.conchild', [
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/conchild/:ChildID', {
            templateUrl: 'app/conchild/conchild.html',
            controller: 'ConchildCtrl'
        })
    })
    .controller('ConchildCtrl', function ($scope, $routeParams) {
        console.log($routeParams.ChildID);
        $scope.users = {
            'osipovvictor': {
                firstname: 'Osipov',
                secondname: 'Victor',
                thirdname: 'Valentinovich',
                birthdate: '66.66.66',
                age: 'fucking a lot'
            },
            'gataulindias': {
                firstname: 'Gataulin',
                secondname: 'DiaZ',
                thirdname: 'Nonamed',
                birthdate: '13.37.69',
                age: 'gay'
            },
            'sentyabovmax': {
                firstname: 'Sentyabov',
                secondname: 'Maxim',
                thirdname: 'Nonamed',
                birthdate: '22.86.66',
                age: 'tozhe gay'

            }
        };

        $scope.myInterval = 100000;
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
        $scope.change = function (tab) {
            console.log('Condition change');
            $scope.resetcond();
            $scope.tabs[tab].condition = 'active';
        };
        $scope.resetcond = function () {
            $scope.tabs[0].condition = '';
            $scope.tabs[1].condition = '';
        }
        $scope.user = $scope.users[$routeParams.ChildID];
    })