
(function(){

    var app = angular.module("angulog", ['ui.bootstrap']);

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

})();
