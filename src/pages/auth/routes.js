import Auth from './Auth';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import RecuperaSenha from './components/RecuperaSenha';

export default [
  {
    path: 'auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro,
      },
      {
        path: '/recupera-senha',
        name: 'RecuperaSenha',
        component: RecuperaSenha,
      },
    ],
  },
];
