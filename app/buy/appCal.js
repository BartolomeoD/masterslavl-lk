angular.module('plunker', [])

.controller('calCtrl', function($scope, countDays) {
	$scope.name = "Иван",
	$scope.week=['пн','вт','ср','чт','пт','сб','вс'],
	$scope.date= new Date();
	$scope.month=$scope.date.getMonth().toLocaleString('ru',options);
	months=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
	$scope.days=countDays.count($scope.date);
	$scope.firstDay=countDays.first($scope.date);
	testHoliday=new Date(2016,5,23);
	textHoliday2=new Date(2016,5,8);
	$scope.holidays=[testHoliday, textHoliday2];
	$scope.viewMonth = function(month){
		 var getMonth = months[month];
		if(month>11){
			getMonth = months[0];
		}
		if(month<0){
			getMonth = months[11];
		}
		return getMonth;
		
	}
	$scope.holidaysFunc = function(date){
		if(date){
			var holiday=false;
			for(var i=0;i<$scope.holidays.length;i++){
				if(date.getDate()==$scope.holidays[i].getDate() && date.getFullYear()==$scope.holidays[i].getFullYear() && date.getMonth()==$scope.holidays[i].getMonth()){
					holiday=true;
				}
			}
			return holiday;
		}
		}	
	function update(){
		$scope.days=countDays.count($scope.date);
		$scope.firstDay=countDays.first($scope.date);
		$scope.month=$scope.date.getMonth();
		$scope.table=countDays.updateTable($scope.date);
		}
	$scope.next = function(){
		$scope.date.setMonth($scope.date.getMonth()+1);
		update();
		}
	$scope.prvs = function(){
		$scope.date.setMonth($scope.date.getMonth()-1);
		update();
		}
	$scope.setDateCal = function (date){
		$scope.date= new Date(date);
		}
	$scope.testDate = new Date();
	dateForCal= new Date($scope.date.getFullYear(), $scope.date.getMonth(),0);
				var options = {
			era: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			timezone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
			};
			
	$scope.table=new Array();
	$scope.testDate = new Date().toLocaleString("ru", options);
	dateNum = new Date();
	dateNum.setDate(1);
    if (dateNum.getDay() == 0) {
      dateNum.setDate(-6);
    }
    else
    { dateNum.setDate(- dateNum.getDay() + 1); }
	//выставляет числа
	for (var i = 0; i < 6; i++) {
		$scope.table[i]=[];
      for (var k = 0; k < 7; k++) {
						dateNum= new Date(dateNum.getFullYear(),dateNum.getMonth(),dateNum.getDate() + 1);
						$scope.table[i][k] = dateNum;
						if (dateNum.getFullYear() == $scope.date.getFullYear()) {
						  if (dateNum.getMonth() < $scope.date.getMonth()) {
							$scope.table[i][k]=null;
						  }
						  if ((dateNum.getMonth() > $scope.date.getMonth())) {
							$scope.table[i][k]=null;
						  }
						}
						else {
						  if (dateNum.getFullYear() < $scope.date.getFullYear()) {
							$scope.table[i][k]=null;
						  }
						  if (dateNum.getFullYear() > $scope.date.getFullYear()) {
							$scope.table[i][k]=null;
						  }
						}			
					  }
    }
	$scope.hideDate = function(date){
		if(date){
			return false;
		}
		else return true;
	}
	
  
})

.factory('countDays', function() {
    return { count:  function(date) {
				return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
				},
				
			 first: function(date){
					firstDay= new Date(date.getFullYear(), date.getMonth(), 1);
					return firstDay=firstDay.getDay();
					},
			 updateTable: function(date){
					table=new Array();
					dateNum = new Date(date);
					dateNum.setDate(1);
					if (dateNum.getDay() == 0) {
					  dateNum.setDate(-6);
					}
					else
					{ dateNum.setDate(- dateNum.getDay() + 1); }
					for (var i = 0; i < 6; i++) {
					table[i]=[];
					for (var k = 0; k < 7; k++) {
						dateNum= new Date(dateNum.getFullYear(),dateNum.getMonth(),dateNum.getDate() + 1);
						table[i][k] = dateNum;
						if (dateNum.getFullYear() == date.getFullYear()) {
						  if (dateNum.getMonth() < date.getMonth()) {
							table[i][k]=null;
						  }
						  if ((dateNum.getMonth() > date.getMonth())) {
							table[i][k]=null;
						  }
						}
						else {
						  if (dateNum.getFullYear() < date.getFullYear()) {
							table[i][k]=null;
						  }
						  if (dateNum.getFullYear() > date.getFullYear()) {
							table[i][k]=null;
						  }
						}			
					  }
    }
					return table;
				}
			}
		}
	
);

        
    

