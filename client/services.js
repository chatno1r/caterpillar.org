angular.module("Caterpillars.services", [])

.service("SEOService", ["$rootScope", function($rootScope) {
    this.setSEO = function(seoObj) {
        $rootScope.seo = {};
        for (var prop in seoObj) {
            $rootScope.seo[prop] = seoObj[prop];
        }
    }
}])