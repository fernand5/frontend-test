angular
  .module('app')
  .component('app', {
    templateUrl: 'app/components/main/main.html',
      controller: MainController
  });

/** @ngInject */
function MainController(services, $timeout) {
    var vm = this;

    vm.preloader = true;

    vm.load = function () {
	    $timeout(function() {
		    vm.preloader=true;
	    }, 1000);
	    vm.preloader=false;
    };

};