import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/components/empresa/empresa.js';
import '../../ui/components/avisoPrevio/avisoPrevio.js';
import '../../ui/components/sindicato/sindicato.js';

// Set up all routes in the app
FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'App_home' });
    },
});

FlowRouter.route('/empresas', {
    action() {
        BlazeLayout.render('App_body', { main: 'empresas'})
    }
});

FlowRouter.route('/avisosPrevios', {
    action() {
        BlazeLayout.render('App_body', { main: 'avisosPrevios'})
    }
});

FlowRouter.route('/sindicatos', {
    action() {
        BlazeLayout.render('App_body', { main: 'sindicatos'})
    }
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};
