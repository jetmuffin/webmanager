(function() {
	'use strict';

	angular
		.module('webmanager')
		.directive('wmSidebar', wmSidebar);

	/** @ngInject */
	function wmSidebar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/sidebar/sidebar.html',
			scope: {
			},
			controller: SidebarController,
			controllerAs: 'vm',
			bindToController: true
		};

        return directive;

        /** @ngInject */
        function SidebarController() {
            // TODO
        }
    }
})();