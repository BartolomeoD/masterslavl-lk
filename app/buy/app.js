var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, countDays) {
	$scope.days=3;
	$scope.days=countDays;
  
});


app.directive('mydatepicker',['countDays', function(countDays) {
    return {
        restrict: 'A',
        require : 'ngModel',
		templateUrl: "temp.html",
		replace: true,
		scope: {},
        link : function (scope, element, attributes, ngModelCtrl,countDays) {
			Date.prototype.daysInMonth = function() {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
			};
			scope.name = "Иван",
			scope.week=['пн','вт','ср','чт','пт','сб','вс'],
			scope.date= new Date();
			scope.days=countDays;
			scope.month=scope.date.getMonth();
			scope.months=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
			scope.days=123;
			scope.days=countDays.day;
        }
	}
}]);
app.factory('countDays', function() {
  return {day:32}
  
});

        
    

