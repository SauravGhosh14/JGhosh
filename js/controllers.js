var showAlert,scrollTop,showLoading,hideLoading,doRefresh;
angular.module('app.controllers', [])
  
.controller('jGhoshHealthChartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('jGhoshHealthChartCtrl', function ($scope, $stateParams, $ionicPopup, $ionicScrollDelegate, $ionicLoading) {
   $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
         title: 'Success',
         template: 'Data Submitted!'
      });
      alertPopup.then(function(res) {
      });
   };

        $scope.scrollTop = function() {
            $ionicScrollDelegate.scrollTop();
        };
    
    $scope.showLoading = function() {
      $ionicLoading.show({
         template: 'Loading...'
      });
   };

   $scope.hideLoading = function(){
      $ionicLoading.hide();
   };
    showAlert = $scope.showAlert;
    scrollTop = $scope.scrollTop; 
    showLoading = $scope.showLoading;
    hideLoading = $scope.hideLoading;
    
    $scope.doRefresh = function() {    
        document.getElementById("gform").reset();
        $scope.$broadcast('scroll.refreshComplete');
    };  
})
 