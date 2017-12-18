import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/components/empresa/empresa.js';
import '../../ui/components/sindicato/sindicato.js';
import '../../ui/components/funcionario/funcionario.js';
import '../../ui/components/horaextra/adciona_hora.js';

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

FlowRouter.route('/sindicatos', {
    action() {
        BlazeLayout.render('App_body', { main: 'sindicatos'})
    }
});

FlowRouter.route('/empresas/:id/funcionarios', {
    action() {
        BlazeLayout.render('App_body', { main: 'funcionario'})
    }
});

FlowRouter.route('/empresas/:id/addHoras', {
    action() {
        BlazeLayout.render('App_body', { main: 'addhoras'})
    }
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};
