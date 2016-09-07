(function() {
  'use strict';

  angular
    .module('webmanager')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
