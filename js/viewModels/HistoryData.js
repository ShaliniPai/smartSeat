/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'moment', 'ojs/ojdatetimepicker', 'ojs/ojtimezonedata','ojs/ojchart', "daterangepicker", 'bootstrap-datepicker', 'ojs/ojselectcombobox', 'ojs/ojbutton'],
        function (oj, ko, $,moment) {

            function CustomerViewModel() {
                var self = this;
                var self = this;
                var date1;
                var date2;
                var uName;
                var d1;
                var currentData = [];
                self.IR = ko.observable(0);
                self.ultrasonic = ko.observable();
                self.start = ko.observable();
                self.end = ko.observable();
                self.value = ko.observableArray();
                self.minwater = ko.observable();
                self.consumedwater = ko.observable();
                self.waterlabel = ko.observable();




                self.orientationValue = ko.observable('vertical');

                /* chart data */
                self.lineSeries = ko.observableArray();

                var lineSeries = [{name: "Series 1", items: [2, 1.5, 1.8, 2, 2.5]}];

                var lineGroups = ["Nov 19 2018", "Nov 20 2018", "Nov 21 2018", "Nov 22 2018", "Nov 23 2018"];


                self.lineSeriesValue = ko.observableArray(lineSeries);
                self.lineGroupsValue = ko.observableArray(lineGroups);




                self.lineSeries1 = ko.observableArray();

                var lineSeries1 = [{name: "Series 1", items: [10,9,10,8,4]}];

                var lineGroups1 = ["Nov 19 2018", "Nov 20 2018", "Nov 21 2018", "Nov 22 2018", "Nov 23 2018"];


                self.lineSeriesValue1 = ko.observableArray(lineSeries1);
                self.lineGroupsValue1 = ko.observableArray(lineGroups1);



               
                self.xTitle = ko.observable('Days');
                self.xStyle = ko.observable({"fontStyle": "italic", "color": "#6070C7"});
                self.xAxisLineColor = ko.observable('#9E9E9E');
                self.xAxisLineWidth = ko.observable(1);

                self.yTitle = ko.observable('Liter');
                self.yStyle = ko.observable({"fontStyle": "italic", "color": "#6070C7"});
                self.yMajorTickColor = ko.observable('#C4CED7');
                self.yMajorTickWidth = ko.observable(1);
                self.yMajorTickStyle = ko.observable('solid');
                self.yTickLabelPosition = ko.observable('outside');

                self.xAxis = ko.pureComputed(function () {
                    return {
                        title: self.xTitle(),
                        titleStyle: self.xStyle(),

                    };
                });

                self.yAxis = ko.pureComputed(function () {
                    return {
                        title: self.yTitle(),
                        titleStyle: self.yStyle(),

                    };
                });


                self.xTitle1 = ko.observable('Days');
                self.xStyle = ko.observable({"fontStyle": "italic", "color": "#6070C7"});
                self.xAxisLineColor = ko.observable('#9E9E9E');
                self.xAxisLineWidth = ko.observable(1);

                self.yTitle1 = ko.observable('Total Hours');
                self.yStyle = ko.observable({"fontStyle": "italic", "color": "#6070C7"});
                self.yMajorTickColor = ko.observable('#C4CED7');
                self.yMajorTickWidth = ko.observable(1);
                self.yMajorTickStyle = ko.observable('solid');
                self.yTickLabelPosition = ko.observable('outside');

                self.xAxis1 = ko.pureComputed(function () {
                    return {
                        title: self.xTitle1(),
                        titleStyle: self.xStyle(),

                    };
                });

                self.yAxis1 = ko.pureComputed(function () {
                    return {
                        title: self.yTitle1(),
                        titleStyle: self.yStyle(),

                    };
                });
                
                
                
                
                 self.xTitle2 = ko.observable('Days');
                self.xStyle = ko.observable({"fontStyle": "italic", "color": "#6070C7"});
                self.xAxisLineColor = ko.observable('#9E9E9E');
                self.xAxisLineWidth = ko.observable(1);

                self.yTitle2 = ko.observable('Count');
                self.yStyle = ko.observable({"fontStyle": "italic", "color": "#6070C7"});
                self.yMajorTickColor = ko.observable('#C4CED7');
                self.yMajorTickWidth = ko.observable(1);
                self.yMajorTickStyle = ko.observable('solid');
                self.yTickLabelPosition = ko.observable('outside');

                self.xAxis2 = ko.pureComputed(function () {
                    return {
                        title: self.xTitle2(),
                        titleStyle: self.xStyle(),

                    };
                });

                self.yAxis2 = ko.pureComputed(function () {
                    return {
                        title: self.yTitle2(),
                        titleStyle: self.yStyle(),

                    };
                });
                
                
                

                self.stackValue = ko.observable('off');
                self.orientationValue = ko.observable('vertical');

                /* chart data */
                var barSeries = [{name: "Series 1", items: [7, 8.5, 9, 7.5, 9]},
                ];

                var barGroups = ["Nov 19 2018", "Nov 20 2018", "Nov 21 2018", "Nov 22 2018", "Nov 23 2018"];

                self.barSeriesValue = ko.observableArray(barSeries);
                self.barGroupsValue = ko.observableArray(barGroups);




                self.userNameLkp = ko.observableArray();
                /*Date Attributes */
                var dateTimeConverter = oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME);
                var dateOptions = {day: '2-digit', month: 'short'};
                self.dayMonth = dateTimeConverter.createConverter(dateOptions);
                self.xAxisOptions = ko.observable({});
                self.start = moment().subtract(6, 'days').startOf("day");
                self.end = moment().endOf("day");
                self.dateText = ko.observable();
                $(document).ready(function () {
                    $("#reportrange").daterangepicker({startDate: self.start,
                        endDate: self.end,
                        ranges: {
//                            'Today': [moment(), moment()],
//                            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                            'Last 7 Days': [moment().subtract(6, 'days'), moment()]
                        }
                    }, self.datePicked);
                });
                self.datePicked = function (start, end) {
                    self.start = start;
                    self.end = end;
                    self.dateText(self.start.format('MMMM D, YYYY') + ' - ' + self.end.format('MMMM D, YYYY'))
                    date1 = self.start.toString();
                    date2 = self.end.toString();
                    date1 = self.start.toString();
                    date2 = self.end.toString();
                    date1 = new Date(date1);
                    date2 = new Date(date2);
                    console.log(date1);
                    console.log(date2);
                    d1 = date1;
                    self.loadData();
                };
                // self.datePicked(self.start, self.end);
                self.dateText(self.start.format('MMMM D, YYYY') + ' - ' + self.end.format('MMMM D, YYYY'))
                date1 = self.start.toString();
                date2 = self.end.toString();
                var url = 'https://smart-seat.firebaseio.com/live';
                console.log(url);
                var listData = new Firebase(url);
                listData.on('value', function (snapshot) {
                    console.log(snapshot);
                    var data = snapshot.val();
                    self.IR(data.ir);
                    self.ultrasonic(data.ultrasonic);
//                    console.log(data.ir);
//                    console.log(data.ultrasonic);
                    console.log(self.IR());
                    console.log(self.ultrasonic());
                });
                var url = 'https://smart-seat.firebaseio.com/users/';
                console.log(url);
                var listData = new Firebase(url);
                listData.on('value', function (snapshot) {
                    console.log(snapshot.val());
                    var data = snapshot.val();
                    self.userNameLkp.removeAll();
                    for (var key in data) {
                        if (data.hasOwnProperty(key)) {
                            var val = data[key];
                            console.log(val.username);
                            self.userNameLkp.push({'value': val.username, "label": val.username});
                        }
                    }
                    console.log(JSON.stringify(self.userNameLkp()));
                    console.log(self.IR());
                    console.log(self.ultrasonic());
                });
                self.valueChangeHandler = function (context, valueParam) {
                    if (valueParam.option == "value")
                    {
                        var valueObj = buildValueChange(valueParam);
                        var data = JSON.stringify(valueObj, null, 4);
                        console.log(data);
                        var json = JSON.parse(data);
                        console.log(json);
                        uName = json.value[0];
                        console.log(uName);
                        var url = 'https://smart-seat.firebaseio.com/users/' + uName + '/history';
                        var listData = new Firebase(url);
                        listData.on('value', function (snapshot) {
                            console.log(snapshot.val());
                            var data = snapshot.val();
                            console.log('data' + JSON.stringify(data));
                            // var data= snapshot.val();
                            var date = new Date();
                            date.setHours(0, 0, 0, 0);
                            for (var key in data) {
                                if (data.hasOwnProperty(key)) {
                                    var date2 = new Date(key);
                                    if (date2.getTime() === date.getTime())
                                    {
                                        console.log(true);
                                        var val = data[key];
                                        console.log("Matched data is:" + val);
                                        console.log(val);
                                    } else
                                    {
                                        console.log(false);
                                    }
                                }
                            }
                            console.log(self.IR());
                            console.log(self.ultrasonic());
                        });
                    }
                };
                function buildValueChange(valueParam) {
                    var valueObj = {};
                    valueObj.value = valueParam.value;
                    return valueObj;
                }
                self.clickedButton = ko.observable("");
                self.Load = function (event) {
                    self.clickedButton(event.currentTarget.id);
                    document.getElementById("hide").style.display = "block";
                };

                self.loadData = function () {
                    var url1 = 'https://smart-seat.firebaseio.com/users/' + uName + '/history';
                    console.log("URL:" + url1);
                    var listData = new Firebase(url1);
                    listData.on('value', function (snapshot) {
                        console.log("Fire" + snapshot.val());
                        var data = snapshot.val();
                        console.log('dataaaaaaaaaaa:' + JSON.stringify(data));
//                        self.oneweek=ko.observable('Mon Nov 19 2018 23:59:59 GMT+0530 (India Standard Time)');
//                       self.yesterday=ko.observable('Sat Nov 24 2018 00:00:00 GMT+0530 (India Standard Time)');
//                        if (date1 === d1)
//                        {
//                            console.log("yes");
//                            self.minwater(21);
//                            self.consumedwater(9);
//
//                            if (self.consumedwater() < self.minwater())
//                            {
//                                self.waterlabel("Goal InCompleted");
//                            } else
//                            {
//                                self.waterlabel("Goal Completed");
//                            }
//
//                        } else
//                       
//
//                        {
//                            console.log("1 WEEK");
//                        }
                        /* toggle button variables */


                    });

                }

            }


            return new CustomerViewModel();
        }
);
