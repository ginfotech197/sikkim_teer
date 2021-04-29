app.controller("CommonNumbersCtrl", function ($scope,$http,$filter,$rootScope,dateFilter,$timeout,$interval,$window) {
    $scope.msg = "This is CommonNumbers controller";
    
    $scope.getDrawList=function () {
        var request = $http({
            method: "get",
            dataType:JSON,
            url: api_url+"/getAllDrawTimes",
            data: {}
            ,headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function(response){
            $scope.drawTimes=response.data;
        });
    };

    $scope.getDrawList();
    $scope.commonNumbersArray=[
        {
            drawId:1,house:'',ending:'',directOne:'',directTwo:''
        },
        {
            drawId:2,house:'',ending:'',directOne:'',directTwo:''
        }
    ];
    
});

