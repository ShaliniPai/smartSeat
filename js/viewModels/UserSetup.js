/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
        function (oj, ko, $) {

            function AboutViewModel() {
                var self = this;
                self.userId = ko.observable();
                self.name = ko.observable();
                self.age = ko.observable();
                self.weight = ko.observable();
                self.height = ko.observable();
                self.phone=ko.observable();

                self.writeUserData = function () {
                    console.log(self.name());
                    console.log(self.age());
                    console.log(self.weight());
                    console.log(self.height());
                    firebase.database().ref('users/' + self.name()).set({

                        username: self.name(),

                        age: self.age(),

                        weight: self.weight(),

                        height: self.height(),
                        
                        phone:self.phone()

                    });


                }
//                self.loadData=function(){
//                    console.log("name:" +self.userId());
//                    console.log("age:" +self.name());
//                    
//                    
//                }

            }


            return new AboutViewModel();
        }
);
