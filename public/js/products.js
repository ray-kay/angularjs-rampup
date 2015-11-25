/**
 * Created by Ralf on 25/11/2015.
 */
(function(){
    var app = angular.module('store-products', []);

    app.directive("productDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/product-description.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict: 'A',
            templateUrl: "partials/product-specs.html"
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: "partials/product-reviews.html"
        };
    });

    app.directive('productTabs', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/product-tabs.html',
            controller: function(){
                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(setTab) {
                    this.tab = setTab;
                };
            },
            controllerAs: 'tab'
        };
    });

    app.directive('productGallery', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };

                this.assetBasePath = 'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/';
            },
            controllerAs: 'gallery'
        };
    });

})();