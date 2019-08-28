import Vue from 'vue';
import Vuex from 'vuex';
import startships from './modules/starships';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    startships,
  },
});
