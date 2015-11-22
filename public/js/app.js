/**
 * Created by Ralf on 20/11/2015.
 */
(function() {
    var app = angular.module('store', []);

    var assetBasePath = 'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/';

    var gems = [
        {
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        canPurchase: true,
        images: [
            assetBasePath+"images/gem-02.gif",
            assetBasePath+"images/gem-05.gif",
            assetBasePath+"images/gem-09.gif"
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        canPurchase: false,
        images: [
            assetBasePath+"images/gem-01.gif",
            assetBasePath+"images/gem-03.gif",
            assetBasePath+"images/gem-04.gif"
        ],
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org",
            createdOn: 1397490980837
        }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        canPurchase: true,
        images: [
            assetBasePath+"images/gem-06.gif",
            assetBasePath+"images/gem-07.gif",
            assetBasePath+"images/gem-10.gif"
        ],
        reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
        }]
    }];

    app.controller('GalleryController', function(){
        this.current = 0;

        this.setCurrent = function(newCurrent){
            this.current = newCurrent ? newCurrent : 0;
        };
    });

    app.controller("StoreController", function(){
        this.products = gems;
    });

    app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(newTab){
            this.tab = newTab;
        };

        this.isSet = function(currentTab){
            return this.tab === currentTab;
        };
    });

})();