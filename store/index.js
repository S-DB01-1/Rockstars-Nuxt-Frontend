import Vue from "vue";
import Vuex from "vuex";
import tribes from "./tribes.js";
// import rockstars from "./rockstars.js";
 
Vue.use(Vuex);
 
export default () => new Vuex.Store({
  state: () => ({
    tribes: {}
    // rockstars: {},
  }),
  mutations: {
    ...tribes.mutations,
  },
  actions: {
    ...tribes.actions,
    // ...rockstars.actions,
  },
  modules: {},
  getters: {
    ...tribes.getters,
    // ...rockstars.getters,
  }
})