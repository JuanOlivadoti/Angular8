'use strict';
angular.module('MainApp')
    .controller('LoansCtrl', function ($scope, $routeParams, $location, API_URL, $rootScope, AnalyticsService, CheckPartnerService) {
        sessionStorage.clear();
        $rootScope.showDocumentsInFooter = false;

        $scope.apiUrl = API_URL;
        $scope.routeParams = $routeParams;
        $scope.routeParams["mainResource"] = $scope.routeParams["mainResource"]?$scope.routeParams["mainResource"]:"scprocessdirect";
        if ($scope.isOrange = CheckPartnerService.isOrange()) {
            $scope.routeParams["origin"] = "Orange";
        }

        if ($scope.isCookie = CheckPartnerService.isCookie()) {
            $scope.routeParams["origin"] = "Cookie";
        }

        if ($scope.isCookie = CheckPartnerService.isWP()) {
            $scope.routeParams["origin"] = "WP";
        }
        if ($scope.isCookie = CheckPartnerService.isWithOutCookie()) {
            $scope.routeParams["origin"] = "SinCookie";
        }
        if ($scope.isCookie = CheckPartnerService.isProgramatica()) {
            $scope.routeParams["origin"] = "LP";
        }
        AnalyticsService.contentUpdate($location.path());
    });
