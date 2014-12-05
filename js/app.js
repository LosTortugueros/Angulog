
(function(){

    var app = angular.module("angulog", ['ui.bootstrap', 'angularChart']);

    app.controller("ContainerController", function(){
        this.tab = 1;

        this.setTab = function(id)
        {
            this.tab = id;
        }

        this.isTab = function(id)
        {
            return this.tab == id;
        }

    });

    app.controller("PCController", ["$scope", "$http", function($scope, $http){

        $scope.datasetClicks = [];

        $http.get('http://0.0.0.0:3000/click').success(function(data, status, headers, config){

            $scope.datasetClicks = data;

        });

        $scope.schemaClicks = {
            pseudo: {
                type: 'string',
                name: 'Personne'
            }
        };
        $scope.optionsClicks = {
            rows: [{
                key: 'click',
                type: 'bar',
                name: 'Nombre de clicks',
                color: '#42a5f5'
            }],
            xAxis: {
                key: 'pseudo'
            }
        };




        $scope.datasetKeys = [];

        $http.get('http://0.0.0.0:3000/toutch').success(function(data, status, headers, config){

            $scope.datasetKeys = data;

        });

        $scope.schemaKeys = {
            pseudo: {
                type: 'string',
                name: 'Personne'
            }
        };
        $scope.optionsKeys = {
            rows: [{
                key: 'toutch',
                type: 'bar',
                name: 'Nombre de touches tapées',
                color: '#42a5f5'
            }],
            xAxis: {
                key: 'pseudo'
            }
        };

        /*$scope.data = [
            {x: 0, value: 4, otherValue: 14},
            {x: 1, value: 8, otherValue: 1},
            {x: 2, value: 15, otherValue: 11},
            {x: 3, value: 16, otherValue: 147},
            {x: 4, value: 23, otherValue: 87},
            {x: 5, value: 42, otherValue: 45}
        ];

        $scope.options = {
            axes: {
                x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 10, ticks: 2},
                y: {type: 'linear', min: 0, max: 1, ticks: 5},
                y2: {type: 'linear', min: 0, max: 1, ticks: [1, 2, 3, 4]}
            },
            series: [
                {y: 'value', color: 'steelblue', thickness: '2px', type: 'area', striped: true, label: 'Pouet'},
                {y: 'otherValue', axis: 'y2', color: 'lightsteelblue', visible: false, drawDots: true, dotSize: 2}
            ],
            lineMode: 'linear',
            tension: 0.7,
            tooltip: {mode: 'scrubber', formatter: function(x, y, series) {return 'pouet';}},
            drawLegend: true,
            drawDots: true,
            columnsHGap: 5
        }*/

    }]);

    app.controller("BSController", ["$scope","$http",function($scope,$http){

        $scope.datasetDistance = [];

        $http.get('http://0.0.0.0:3000/distance').success(function(data, status, headers, config){

            $scope.datasetDistance = data;

        });

        $scope.schemaDistance = {
            pseudo: {
                type: 'string',
                name: 'Personne'
            }
        };
        $scope.optionsDistance = {
            rows: [{
                key: 'distance',
                type: 'bar',
                name: 'Nombre de métres parcourue',
                color: '#42a5f5'
            }],
            xAxis: {
                key: 'pseudo'
            }
        };

        $scope.datasetCLickLine = [];

        $http.get('http://0.0.0.0:3000/clickTime').success(function(data, status, headers, config){

            $scope.datasetClickLineJules = data;

        });

        $scope.schemaCLickLine = {
            clicks: {
                type: 'integer',
                name: 'Time'
            }
        };

        $scope.optionsCLickLine = {
            rows: [{
                key: 'jules',
                type: 'line',
                name: 'Nombre clicks effectués par jules',
                color: '#42a5f5'
            },
                {
                    key: 'hugo',
                    type: 'line',
                    name: 'Nombre clicks effectués par seb',
                    color: '#42a5f5'
                }],
            xAxis: {
                key: 'clicks'
            }
        };





    }]);

    app.controller("BNController",["$scope","$http",function($scope,$http){

        $scope.datasetBoisson = [];

        $http.get('http://0.0.0.0:3000/boisson').success(function(data, status, headers, config){

            $scope.datasetBoisson = data;

        });

        $scope.schemaBoisson = {
            boisson: {
                type: 'string',
                name: 'Type'
            }
        };
        $scope.optionsBoisson = {
            rows: [{
                key: 'qte%',
                type: 'bar',
                name: 'Nombre de métres parcourue',
                color: '#42a5f5'
            }],
            xAxis: {
                key: 'boisson'
            }
        };

        $scope.datasetNourriture = [];

        $http.get('http://0.0.0.0:3000/nourriture').success(function(data, status, headers, config){

            $scope.datasetNourriture = data;

        });

        $scope.schemaNourriture = {
            nourriture: {
                type: 'string',
                name: 'Type'
            }
        };
        $scope.optionsNourriture = {
            rows: [{
                key: 'qte%',
                type: 'bar',
                name: 'Nombre de métres parcourue',
                color: '#42a5f5'
            }],
            xAxis: {
                key: 'nourriture'
            }
        };



    }]);

})();
