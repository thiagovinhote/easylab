import vue from 'vue';
import Router from 'vue-router';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Reserva from '../pages/Reserva';
import Solicitacoes from '../pages/Solicitacoes';
import NotFound from '../pages/NotFound';
import Vue from 'vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
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
  }
];

export default new Router({
  routes,
  mode: 'history',
});
