
let app = angular.module('myApp',[]);
app.controller('formCtrl', function($scope){

    $scope.horasTrabajo = 0;
    $scope.tarifaHora = 0;

    $scope.calcularBasico = function(){
        return $scope.horasTrabajo * $scope.tarifaHora;
    }
    $scope.calcularDescuento = function(){
        if($scope.calcularBasico() < 500){
            return 0;
        }else if($scope.calcularBasico() <= 1000){
            return $scope.calcularBasico() * 0.02;
        }else if($scope.calcularBasico() <= 4000){
            return $scope.calcularBasico() * 0.08;
        }else if($scope.calcularBasico() <= 8000){
            return $scope.calcularBasico() * 0.15;
        }else if($scope.calcularBasico() < 10000){
            return $scope.calcularBasico() * 0.21;
        }else if($scope.calcularBasico() > 9999){
            return $scope.calcularBasico() * 0.30;
        }
    }
    $scope.salarioNeto = function(){
        return $scope.calcularBasico() - $scope.calcularDescuento()
    }
});