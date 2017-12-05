angular
  .module('app')
  .component('fountainHeader', {
    templateUrl: 'app/components/header/header.html',
      controller: HeaderController
  });

/** @ngInject */
function HeaderController($scope, services, $timeout) {
	var vm = this;

	vm.animate = false;
	vm.dataSelected = services.getData();
	$scope.$watch(function(){
		return services.getData();
	}, function (newValue) {
		$timeout(function() {
			vm.animate=true;
		}, 500);
		$timeout(function() {
			vm.dataSelected = newValue;
		}, 500);
		vm.animate=false;
	});
}