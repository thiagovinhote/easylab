import vue from 'vue';
import Router from 'vue-router';

import { routes as routesAuth } from '../pages/auth';
import Reserva from '../pages/Reserva';
import Laboratorios from '../pages/Laboratorios';
import Solicitacoes from '../pages/Solicitacoes';
import NotFound from '../pages/NotFound';
import Vue from 'vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  ...routesAuth,
  {
    path: '/reserva',
    name: 'Reserva',
    component: Reserva,
  },
  {
    path: '/solicitacoes',
    name: 'Solicitacoes',
    
    component: Solicitacoes,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },{
    path: '/laboratorios',
    name: 'Laboratorios',
    component: Laboratorios,
  }
];

export default new Router({
  routes,
  mode: 'history',
});
