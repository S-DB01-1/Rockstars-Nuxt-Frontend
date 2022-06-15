import Vue from "vue";

const baseURL = 'https://s8ifzokvp35u68fi.azurewebsites.net/api/v1';
const resourceURL = 'podcasts';

export const getters = {
  podcastRead: state => () => {
    return state.podcasts;
  },
  podcastGet: state => (id) => {
    return state.podcasts[id];
  }
};

export const mutations = {
  podcastSet(state, item) {
    Vue.set(state.podcasts, item.id, item);
  },
};

export const actions = {
  async podcastRead({commit}, {id}) {
    const podcasts = await this.$axios.$get(`${baseURL}/${resourceURL}/?tribe=${id}`);
    podcasts.results.forEach(item => {
      commit('podcastSet', item);
    });
  },
  async podcastGet({commit}, {id}) {
    const podcast = await this.$axios.$get(`${baseURL}/${resourceURL}/${id}/?format=json`);
    commit('podcastSet', podcast);
  }
};

export default {
  actions,
  getters,
  mutations
};
