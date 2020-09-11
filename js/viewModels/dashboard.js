/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'bootbox', 'ojs/ojselectcombobox'],
        function (oj, ko, $, bootbox) {

            function IncidentsViewModel() {
                var self = this;
                /*Use case Values*/
                self.legPosition = ko.observable(0);
                self.legPositionLabel = ko.observable(0);
                self.occupancy = ko.observable();
                self.occupancyLabel = ko.observable();
                self.backPosition = ko.observable(0);
                self.tilt = ko.observable(0);
                self.xAxis = ko.observable(0);
                self.yAxis = ko.observable(0);
                self.zAxis = ko.observable(0);
                self.water = ko.observable();
                self.stress = ko.observable();
                /*Username Dropdown*/
                self.value = ko.observableArray();
                self.userNameLkp = ko.observableArray();
                var url = 'https://smart-seat.firebaseio.com/live';
                console.log(url);
                var listData = new Firebase(url);
                listData.on('value', function (snapshot) {
                    console.log(snapshot);
                    var data = snapshot.val();
                    /*Back position Calculation*/
                    var ultrasonic = Math.ceil(data.head)
                    self.backPosition(ultrasonic);
                    console.log(self.backPosition());
                    if (self.backPosition() > 150) {
                        console.log("10");
                        document.getElementById("BackPostureImage").src = "css/images/Ultrasonic/PerfectBackPosture.PNG";
                        document.getElementById("GoodPosture").style.display = "block";
                        document.getElementById("BadPosture").style.display = "none";
                    } else if (self.backPosition() > 80 && self.backPosition()<90) {
                        console.log("207");
                        document.getElementById("BackPostureImage").src = "css/images/Ultrasonic/LittleForward.PNG";
                        document.getElementById("GoodPosture").style.display = "none";
                        document.getElementById("BadPosture").style.display = "block";
                    } else if(self.backPosition()<65) {
                        document.getElementById("BackPostureImage").src = "css/images/Ultrasonic/LittleMoreForward.PNG";
                        document.getElementById("GoodPosture").style.display = "none";
                        document.getElementById("BadPosture").style.display = "block";
                    }
                    console.log(self.backPosition());
                    /*Occupancy of Chair*/
                    self.occupancy(data.ir);
                    if (self.occupancy() === 0) {
                        self.occupancyLabel("Occupied");
                        document.getElementById('occupancyColor').style.background = "Green";
                    } else if (self.occupancy() === 1) {
                        self.occupancyLabel("Un-occupied");
                        document.getElementById('occupancyColor').style.background = "Red";
                    }

                    /*Leg Position Calculation*/
                    var legPosture = Math.ceil(data.left);
                    self.legPositionLabel(legPosture);
                    self.legPosition(data.left);
                    if (self.legPosition() > 200 || self.legPosition() < 30) {
                        console.log("WP");
                        document.getElementById("legPosture").src = "css/images/LegPosture/WrongPosture.PNG";
                        document.getElementById("outcomeMark").src = "css/images/Red-Cross-Mark-Download-PNG.png";
                    } else {
                        console.log("CP");
                        document.getElementById("legPosture").src = "css/images/LegPosture/RightPosture.PNG";
                        document.getElementById("outcomeMark").src = "css/images/checkmark-png-28.png";
                    }

                    /*Tilt Value Calculation*/
                    var tiltValue = Math.ceil(data.y)
                    self.tilt(tiltValue);
                    self.xAxis(data.x);
                    self.yAxis(data.y);
                    self.zAxis(data.z);
                    if (self.tilt() >380) {
                        document.getElementById("TiltImage").src = "css/images/Tilt/FullTilt.PNG";

                    } else if (self.tilt() > 370 || self.tilt() < 380) {
                        document.getElementById("TiltImage").src = "css/images/Tilt/Straight.PNG";

                    } else if(self.tilt()<367) {
                        document.getElementById("TiltImage").src = "css/images/Tilt/Straight.PNG";
                    }
                    console.log(self.tilt());
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
                });
                self.valueChangeHandler = function (context, valueParam) {
                    if (valueParam.option == "value")
                    {
                        var valueObj = buildValueChange(valueParam);
                        var data = JSON.stringify(valueObj, null, 4);
                        console.log(data);
                        var json = JSON.parse(data);
                        console.log(json);
                        var uName = json.value[0];
                        console.log(uName);
                        var url = 'https://smart-seat.firebaseio.com/users/' + uName + '/';
                        var listData = new Firebase(url);
                        listData.on('value', function (snapshot) {
                            console.log(snapshot.val());
                            var data = snapshot.val();
                            console.log('data' + JSON.stringify(data));
                            // var data= snapshot.val();

//                    console.log(data.ir);
//                    console.log(data.ultrasonic);

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
                    document.getElementById('dashboardData').style.display = "block";

                }
                setInterval(function () {
                    console.log("hi");
                    var x = document.getElementById("snackbar");
                    x.className = "show";
                    setTimeout(function () {
                        x.className = x.className.replace("show", "");
                    }, 3000);
                }, 180000);

                $(document).ready(function () {
                    var fiveMinutes = 60*5,
                            display = document.querySelector('#time');
                    startTimer(fiveMinutes, display);
                });


                function startTimer(duration, display) {
                    var timer = duration, minutes, seconds;
                    setInterval(function () {
                        minutes = parseInt(timer / 60, 10)
                        seconds = parseInt(timer % 60, 10);

                        minutes = minutes < 10 ? "0" + minutes : minutes;
                        seconds = seconds < 10 ? "0" + seconds : seconds;

                        display.textContent = minutes + ":" + seconds;


                        if (timer == 10) {
                            document.getElementById('shakeDiv').style.display = "block"
                        }
                        if (--timer < 0) {
                            timer = duration;
                            document.getElementById('shakeDiv').style.display = "none";
                        }


                    }, 1000);
                }





            }
            return new IncidentsViewModel();
        }
);
