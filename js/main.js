/**
 * Created by selargui on 03-02-17.
 */
(function() {
    var main = angular.module('main', ['cars']);
    main.controller('ProductController', function(){
       this.product = main.carsJson[1];
    });

})();
