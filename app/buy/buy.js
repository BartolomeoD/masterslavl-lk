angular.module('MS.buy', [
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/buy', {
            templateUrl: 'app/buy/buy.html',
            controller: 'BuyCtrl'
        })
    })
    .controller('BuyCtrl', function ($scope, $rootScope) {
	$scope.choosen=0;
	$scope.myChoose = 0;
	$scope.total=0;
	$scope.countTicket=[0,0,0,0,0];
	$scope.change=[
			{
                id: 0,
                desc: 'Весь день 10:00 - 19:00',
				price: 1380,
				width: 'col-xs-8'
            },
            {
                id: 1,
                desc: '10:00 - 14:00',
				price: 690,
				width: 'col-xs-4'
            },
            {
                id: 2,
                desc: '11:00 - 15:00',
				price: 690,
				width: 'col-xs-4'
            },
            {
                id: 3,
                desc: '12:00 - 16:00',
				price: 690,
				width: 'col-xs-4'
            },
            {
                id: 4,
                desc: '13:00 - 17:00',
				price: 690,
				width: 'col-xs-4'
            },
            {
                id: 5,
                desc: '14:00 - 18:00',
				price: 690,
				width: 'col-xs-4'
            },
            {
                id: 6,
                desc: '15:00 - 19:00',
				price: 690,
				width: 'col-xs-4'
            },
            {
                id: 7,
                desc: '17:00 - 19:00',
				price: 690,
				width: 'col-xs-4'
            }
	];
      $scope.checkChange = function (data) {
      $scope.myChoose = data;
	  $scope.choosen = data;
	  $scope.UpdatePrice();
	}
	$scope.UpdatePrice = function(){
		$scope.total=($scope.countTicket[0]+$scope.countTicket[1]+$scope.countTicket[2]+$scope.countTicket[3]+$scope.countTicket[4])*$scope.change[$scope.myChoose]['price'];
	
	}
	$scope.calcTicket = function(index){
		if($scope.countTicket[index]>0)
			{
				$scope.countTicket[index]=$scope.countTicket[index]-1;
				$scope.UpdatePrice();
			}
	}
	$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
	
    });
