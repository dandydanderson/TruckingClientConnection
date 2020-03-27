angular.module('app-orders-form', [])
.controller('MainController', function($scope) {
})
.directive('myAutocomplete', function($log) {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
      var autocomplete = new google.maps.places.Autocomplete(element[0]);
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var address = element.prop('value')
        console.log(address);
        ngModel.$setViewValue(address);
      });
    }
  };
});