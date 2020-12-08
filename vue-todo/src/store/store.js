import Vue from 'vue';
import Vuex from 'vuex';

import todoApp from "./modules/todoApp";

Vue.use(Vuex); // Vue plugin 추가 : global functionality

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});
