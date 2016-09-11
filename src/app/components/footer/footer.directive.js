(function() {
    'use strict';

    angular
        .module('webmanager')
        .directive('wmFooter', wmFooter);

    /** @ngInject */
    function wmFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/footer/footer.html',
            scope: {
            },
            controller: FooterController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function FooterController() {
            // TODO
        }
    }
})();