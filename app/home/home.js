angular.module('MS.home', ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/home', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        })
    })
    .controller('HomeCtrl', function ($scope, $http, $sce, $document) {
	$scope.display = function(){
		if($cookies.get("auth")){
			return {'display':'block'}	
		}
	}
        $document[0].onscroll = function() {
            if ($document[0].documentElement.scrollTop + $document[0].documentElement.clientHeight >= $document[0].documentElement.scrollHeight) {
                $scope.getVkposts();
            };
        };
        $scope.offset = 0;
        $scope.Vkdata = [];
        $scope.getVkposts = function () {
            $scope.vkurl = "https://api.vk.com/method/wall.get?owner_id=-50625305&offset=" + $scope.offset + "&count=5&callback=JSON_CALLBACK";
            console.log($scope.vkurl);
            $http.jsonp($scope.vkurl, { crossOrigin: true }).success(function (data) {
                data.response.splice(0, 1);
                $scope.Vkdata = $scope.Vkdata.concat(data.response);
                console.log($scope.Vkdata);
                $scope.offset += 5;
                console.log($scope.offset);
            });
        };
        $scope.ALERT = function () {
            $window.alert('SCROLLed');
        };
        $scope.getVkposts();
        $scope.sce = $sce;
        $scope.myInterval = 5000;
        $scope.user = {
            avasrc: 'images/avatar.png',
            firstname: 'Кристина',
            secondname: 'Виктория',
            thirdname: 'Гримми',
            birthdate: '12 мартя 1994',
            age: '22',
            money: 1550,
            cash: 1300
        };
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
    })