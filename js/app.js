
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

        $http.get('http://0.0.0.0:3000/david/click').success(function(data, status, headers, config){

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

        $http.get('http://0.0.0.0:3000/david/click').success(function(data, status, headers, config){

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
                key: 'click',
                type: 'bar',
                name: 'Nombre de clicks',
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

})();
