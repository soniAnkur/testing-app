(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  var application = angular.module('application', [ 'ui.router',
                                                    'ngMaterial' ]);
    application.config(function ($stateProvider, $urlRouterProvider) {

        //$urlRouterProvider.when('/dashboard', '/dashboard/overview');
        $urlRouterProvider.otherwise('/sidebar');

        $stateProvider
            .state('base', {
                abstract: true,
                url: '',
                templateUrl: 'src/application/view/base.html'
            })
            .state('sidebar', {
                url: '/sidebar',
                parent: 'base',
                templateUrl: 'src/application/view/sidebar.html'
                //controller: 'DashboardCtrl'
            })
    });

})();
