/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojchart'],
        function (oj, ko, $) {

            function DashboardViewModel() {
                var self = this;

                /* toggle button variables */
                self.stackValue = ko.observable('off');
                self.orientationValue = ko.observable('vertical');
                self.stackLabelValue = ko.observable('on');

                self.groupOption = ko.observable("Disorder Type");
                self.seriesOption = ko.observable("Gender:");
                self.seriesDisplay = ko.observableArray(["auto"]);
                self.groupDisplay = ko.observableArray(["auto"]);

                self.tooltipDisplaySeries = ko.pureComputed(function () {
                    return self.seriesDisplay().length > 0 ? "off" : "auto";
                });

                self.tooltipDisplayGroup = ko.pureComputed(function () {
                    return self.groupDisplay().length > 0 ? "auto" : "off";
                });

                /* chart data */
                var barSeries = [{name: "Men", items: [45, 50, 60, 50, 30, 65]},
                    {name: "Women", items: [55, 50, 40, 50, 70, 35]}];

                var barGroups = ["Back Problems", "Shoulder & Neck Problems", "Joint Problems", "Headache or Eyestrain", "Stress & Anxiety", "Weight Gain"];

                self.barSeriesValue = ko.observableArray(barSeries);
                self.barGroupsValue = ko.observableArray(barGroups);

                /*Pie Chart*/

                self.threeDValue = ko.observable('on');

                /* chart data */
                var pieSeries = [{name: "Bad Posture", items: [74]},
                    {name: "Other work-related issues", items: [26]}];

                this.pieSeriesValue = ko.observableArray(pieSeries);



            }


            return new DashboardViewModel();
        }
);
