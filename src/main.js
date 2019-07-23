import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import TTs from './views/TTs';
import DataTT1 from './views/DataTT1';
import MachinesList from './views/MachinesList';
import NotFoundComponent from './views/NotFoundComponent';
import MachinesDetails from './views/MachinesDetails'; // для отображения через АПИ
import axios from 'axios';
import store from './store/store';
// import Details from './views/Details'; // для отображения без АПИ

Vue.use(VueRouter);
export const eventBus = new Vue();

const routes = [
    { path: './', component: Home },
    { path: '/', component: Home },
    { path: '/TT-page/', component: Home },
    { path: '/TTs', component: TTs },
    // { path: '/DataTT1', component: DataTT1 },
    { path: '/list', component: MachinesList },
    { path: '*', component: NotFoundComponent },
    { path: '/details/:Did', name: 'MachinesDetails', component: MachinesDetails},
    { path: '/dataDetails/:Did', name: 'DataTT1', component: DataTT1 } // для отображения через АПИ
    // {path: '/details/:Did', name: 'Details', component: Details} // для отображения без АПИ
]

const router = new VueRouter({
    mode: 'hash',
    routes
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    axios,
    render: h => h(App),
}).$mount('#app')