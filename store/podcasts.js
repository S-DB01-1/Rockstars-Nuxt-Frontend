import axios from 'axios';
import Vue from "vue";

const resourceURL = 'podcasts';
export const state = () => ({});

export const getters = {
  podcastRead: state => (id) => {
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

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1";

export const actions = {
  async podcastRead({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/?tribe=${id}`);
    response.data.results.forEach(item => {
      commit('podcastSet', item);
    });
  },
  async podcastGet({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/${id}/`);
    commit('articleSet', response.data);
  }
};

export default {
  actions,
  getters,
  mutations
};
