/**
 * Created by selargui on 03-02-17.
 */
var cars = angular.module('cars', []);
cars.controller('carsController', new function () {
    var carsList = '{ "carsList" : [' +
        '{ "name":"Bugatti 16.4 Veyron" , "description":"desc1" },' +
        '{ "name":"Ferrari 488 GTB" , "description":"desc2" } ]}';
    var carsJson = JSON.parse(carsList);
});


