(function() {
  'use strict';

  angular
    .module('app')
    .controller('ArticlesCtrl', ArticlesCtrl);
    // .controller('ArticlesDetailCtrl', ArticlesDetailCtrl)
    // .controller('ArticlesCatCtrl', ArticlesCatCtrl)
    // .controller('ArticlesCreateCtrl', ArticlesCreateCtrl)
    // .controller('ArticlesEditCtrl', ArticlesEditCtrl);

    ArticlesCtrl.$inject = ['$route'];
})();