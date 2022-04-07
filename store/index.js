import Vue from "vue";
import Vuex from "vuex";
import tribes from "./tribes.js";
import rockstars from "./rockstars.js";
import articles from './articles';
import videos from "./videos";
import podcasts from "./podcasts";

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: () => ({
    tribes: {},
    articles: {},
    rockstars: {},
    podcasts: {},
    videos: {}
  }),
  mutations: {
    ...tribes.mutations,
    ...articles.mutations,
    ...rockstars.mutations,
    ...podcasts.mutations,
    ...videos.mutations,
  },
  actions: {
    ...tribes.actions,
    ...articles.actions,
    ...rockstars.actions,
    ...podcasts.actions,
    ...videos.actions,
  },
  modules: {},
  getters: {
    ...tribes.getters,
    ...articles.getters,
    ...rockstars.getters,
    ...podcasts.getters,
    ...videos.getters,
  }
})
