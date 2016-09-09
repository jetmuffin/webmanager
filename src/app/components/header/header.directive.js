(function() {
    'use strict';

    angular
        .module('webmanager')
        .directive('wmHeader', wmHeader);

    /** @ngInject */
    function wmHeader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/header/header.html',
            scope: {
            },
            controller: HeaderController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function HeaderController() {
            // TODO
        }
    }
})();