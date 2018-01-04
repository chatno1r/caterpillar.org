angular.module("Caterpillars.controllers", [])
.controller("WecomeController", ["$scope", "$location", "SEOService", function($scope, $location, SEOService) {
     SEOService.setSEO({
         title: "Caterpillars | home",
         //image: "http://" + $location.host() + "/images/tree-31581_960_720.png",
         description: "For fun and profit!",
         url: $location.absUrl()
     });   
}])
.controller("BugsController", ["$scope", "Caterpillars", function($scope, Caterpillars) {
    $scope.regions = ["La Selva", "Louisiana", "Andes"];//to make this be a hyperlink it needs a database?
    $scope.caterpillars = Caterpillars.query();
    $scope.gotBugs = [];  //THIS WORKS. JUST TRYING ANOTHER TACTIC
    // $scope.getBugs = function() {
    //     var sortingBugs = Caterpillars.query(function() {
    //         for (var i = 0; i < sortingBugs.length; i++) {
    //             if ($scope.length === sortingBugs[i].length && $scope.color === sortingBugs[i].color) {
    //            //     console.log(sortingBugs[i].species)
    //                 ($scope.gotBugs).push(sortingBugs[i])
    //             };
    //         };
    //     });
    // };
    var byLength = [];
    var byColor = [];
    var byHorns = [];

    $scope.getBugs = function() {
        var one = Caterpillars.query(function () {
            for (var i = 0; i < one.length; i++) {
                if ($scope.length === one[i].length) {
                    (byLength).push(one[i]);
                    console.log(byLength)
                };
            }; console.log(byLength)
            var two = function() { 
                for (var i = 0; i < byLength.length; i++) {
                    if ($scope.color === byLength[i].color) {
                        (byColor).push(byLength[i]);
                        console.log(byColor);
                        // $scope.gotBugs = byColor;
                    };
                };
            };
            var three = function() {
                for (var i = 0; i < byColor.length; i++) {
                    if ($scope.horns === byColor[i].horns) {
                        (byHorns).push(byColor[i]);
                    }
                }
            }
            two();
            three();
            $scope.gotBugs = byHorns;
            if (($scope.gotBugs).length === 0) {
                alert("there are no matches")
            }
            // console.log(gotBugs())
        });
    };
}])

.controller("LaController", ["$scope", "Families", function($scope, Families) {
    $scope.families = Families.query()
}])

.controller("LaNocController", ["$scope", "LAFamilies", function($scope, LAFamilies) {
    $scope.laNocFamilies = LAFamilies.query();
}])

.controller("CrLimController", ["$scope", "CRFamilies", function($scope, CRFamilies) {
    $scope.crLimFamilies = CRFamilies.query();
}])