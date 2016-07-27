
angular.module('AUTH', [
    'ngRoute',
    'ngCookies',
	'ngAnimate',
	'reg', 
	'ui.mask'
])
.config(function($routeProvider) {
	$routeProvider.when('/', {
            templateUrl: 'app/auth/template/firstpage.html', controller: 'MainCtrl'
        })
})
.controller('MainCtrl', function($scope,$location,$http, $cookies, $rootScope) {	
	$scope.display = function(){
		if($cookies.get("auth")){}
		else{
			return {'display':'block'}	
		}
	}
        $scope.changeView = function(){
            $location.path('app/auth/template/secondpage.html'); // path not hash
        }    
      $scope.gotopage = function () {
            $location.path('/1');
        };
	$scope.auth = function(){
		if($scope.phonenumber && $scope.password){		
		console.log("ПОЕХАЛИ!!!");
		 document.location.href='lk.html';
		$cookies.put('auth','true');
		}
	}
})
.run( function($rootScope, $location, $cookies) {
    if($cookies.get("auth")){
		document.location.href='lk.html';
	}
})

//регистрация
angular.module('reg', [
    'ngRoute',
	'ngAnimate',
	'qrScanner'
])
.config(function($routeProvider) {
	$routeProvider.when('/1', {
            templateUrl: 'app/auth/template/secondpage.html', controller: 'regCtrl'
        });
	$routeProvider.when('/2', {templateUrl: 'app/auth/template/thirdpage.html', controller: 'regCtrl'
		});
	$routeProvider.when('/3', {templateUrl: 'app/auth/template/fourthpage.html', controller: 'regCtrl'
		});
})
.controller('regCtrl', function($scope,$location, store ,$http, $cookies, $timeout) {
	$scope.store = store;
	$scope.password;
	$scope.checkpassword;
    $scope.gotopage = function (page) {
            $location.path('/'+page);
        };
	$scope.confirm = function () {
		if($scope.password){
			if($scope.password === $scope.checkpassword){
				console.log('Имя'+store.name+' Фамилия '+store.surname+' Телефон '+store.phone+' пароль '+$scope.password);
				$location.path('/');
			}		
		}
	}
	
        $scope.onSuccess = function(data) {
            var audio = new Audio('app/auth/qr/audio/beep.mp3');
            audio.play();           
			console.log(data);
                    $timeout(function() {$location.path('/2')}, 300);
        };
        $scope.onError = function(error) {
            console.log(error);
        };
        $scope.onVideoError = function(error) {
            console.log(error);
        };
})

.factory('store', function() {
  return {
        name: 'Вася',
		surname: 'Пупкин',
		phone: ''
    }
});