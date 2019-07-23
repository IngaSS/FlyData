import Vue from 'vue';
import Vuex from 'vuex';
import machines from './machines'
import details from "./details";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        machines,
        details
    }
})