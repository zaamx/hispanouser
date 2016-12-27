import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Registro from '../views/Registro'
import LlamaDoctor from '../views/LlamaDoctor'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      title: 'le home',
      component: Home
    },
    {
      path: '/ingresar',
      title: 'le login',
      component: Login
    },
    {
      path: '/registro',
      title: 'le login',
      component: Registro
    },
    {
      path: '/llamadoctor',
      title: 'le login',
      component: LlamaDoctor
    }
  ]
})
