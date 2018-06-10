﻿define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function () {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title: 'Home', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'aboutus', title:'About Us', moduleId: 'viewmodels/aboutus', nav: true },
                { route: 'contactus', title: 'Contact Us', moduleId: 'viewmodels/contactus', nav: true },
                { route: 'login', title: 'Login', moduleId: 'viewmodels/login', type: 'right', nav: true },
                { route: 'forgotpassword', title: 'Forgot Password', moduleId: 'viewmodels/forgotpassword', nav: false }
            ]).buildNavigationModel();

            return router.activate({ pushState: true });
        }
    };
});