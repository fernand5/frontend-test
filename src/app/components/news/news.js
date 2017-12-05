angular
  .module('app')
  .component('fountainTechs', {
    templateUrl: 'app//components/news/news.html',
    controller: NewsController
  });

/** @ngInject */
function NewsController($http, services) {
	var vm = this;
	services.importData().then(function (response) {
		vm.techs = response.data;
	});

	vm.newClicked = function (data) {
		$('.collapsible').collapsible();
		services.setDataSelected(data.title);
	};
}
