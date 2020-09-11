/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojmodule-element-utils', 'ojs/ojmodule-element', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
    'ojs/ojoffcanvas', 'services/firebase', 'services/firebase-app', 'services/firebase-auth', 'services/firebase-database', 'services/firebase-firestore', 'services/firebase-messaging'
],
        function (oj, ko, moduleUtils) {
            function ControllerViewModel() {
                var self = this;

                var config = {
                    apiKey: "AIzaSyD5AXvTg3PXlfkcwLGOfFqw3vB-we9umQk",
                    authDomain: "smart-seat.firebaseapp.com",
                    databaseURL: "https://smart-seat.firebaseio.com",
                    projectId: "smart-seat",
                    storageBucket: "smart-seat.appspot.com",
                    messagingSenderId: "492683422741"
                };
                firebase.initializeApp(config);


                // Media queries for repsonsive layouts
                var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
                self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
                var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
                self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

                // Router setup
                self.router = oj.Router.rootInstance;
                self.router.configure({
                    'analytics': {label: 'Analytics', isDefault: true},
                    'dashboard': {label: 'Dashboard'},
                    'HistoryData': {label: 'History Data'},
                    'UserSetup': {label: 'User Setup'}
                });
                oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

                self.moduleConfig = ko.observable({'view': [], 'viewModel': null});

                self.loadModule = function () {
                    ko.computed(function () {
                        var name = self.router.moduleConfig.name();
                        var viewPath = 'views/' + name + '.html';
                        var modelPath = 'viewModels/' + name;
                        var masterPromise = Promise.all([
                            moduleUtils.createView({'viewPath': viewPath}),
                            moduleUtils.createViewModel({'viewModelPath': modelPath})
                        ]);
                        masterPromise.then(
                                function (values) {
                                    self.moduleConfig({'view': values[0], 'viewModel': values[1]});
                                }
                        );
                    });
                };

                // Navigation setup
                var navData = [
                    {name: 'Analytics', id: 'analytics',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
                    {name: 'Dashboard', id: 'dashboard',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'},
                    {name: 'History Data', id: 'HistoryData',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'},
                    {name: 'User Setup', id: 'UserSetup',
                        iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'}
                ];
                self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

                // Drawer
                // Close offcanvas on medium and larger screens
                self.mdScreen.subscribe(function () {
                    oj.OffcanvasUtils.close(self.drawerParams);
                });
                self.drawerParams = {
                    displayMode: 'push',
                    selector: '#navDrawer',
                    content: '#pageContent'
                };
                // Called by navigation drawer toggle button and after selection of nav drawer item
                self.toggleDrawer = function () {
                    return oj.OffcanvasUtils.toggle(self.drawerParams);
                }
                // Add a close listener so we can move focus back to the toggle button when the drawer closes
                $("#navDrawer").on("ojclose", function () {
                    $('#drawerToggleButton').focus();
                });

                // Header
                // Application Name used in Branding Area
                self.appName = ko.observable("App Name");
                // User Info used in Global Navigation area
                self.userLogin = ko.observable("john.hancock@oracle.com");

                // Footer
                function footerLink(name, id, linkTarget) {
                    this.name = name;
                    this.linkId = id;
                    this.linkTarget = linkTarget;
                }
                self.footerLinks = ko.observableArray([
                    new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
                    new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
                    new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
                    new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
                    new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
                ]);
            }

            return new ControllerViewModel();
        }
);
