angular
	.module('app')
	.service('services', function ($http) {
		var vm = this;
		vm.dataSelected = "";

		vm.importData = function(){
			return $http
				.get(DEV_API_URL_BASE)
				.then(function (response) {
					vm.data=response;
					return response;
				});
		};

		vm.setDataSelected = function (data) {
			vm.dataSelected = data;
		};

		vm.getData = function () {
			return vm.dataSelected;
		}

	});