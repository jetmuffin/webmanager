(function() {
    'use strict';

    angular
        .module('webmanager')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {

        var vm = this;
        vm.title = "你好，世界！";
    }
})();
