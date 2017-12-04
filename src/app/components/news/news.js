angular
  .module('app')
  .component('fountainTechs', {
    templateUrl: 'app//components/news/news.html',
    controller: NewsController
  });

/** @ngInject */
function NewsController($http, services,$scope) {
	var vm = this;
	services.importData().then(function (response) {
		vm.techs =response.data;
		console.log(vm);
	});

	vm.newClicked = function (data) {
		services.setDataSelected(data.title);
		console.log(services.dataSelected);
	}
};
