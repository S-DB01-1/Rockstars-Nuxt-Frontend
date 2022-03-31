import Vue from "vue";
import Vuex from "vuex";
import tribes from "./tribes.js";
import rockstars from "./rockstars.js";
import articles from './articles';

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: () => ({
    tribes: {},
    articles: {},
    rockstars: {}
  }),
  mutations: {
    ...tribes.mutations,
    ...articles.mutations,
    ...rockstars.mutations
  },
  actions: {
    ...tribes.actions,
    ...articles.actions,
    ...rockstars.actions,
  },
  modules: {},
  getters: {
    ...tribes.getters,
    ...articles.getters,
    ...rockstars.getters,
  }
})
