import axios from 'axios';
import Vue from "vue";

const resourceURL = 'articles';
export const state = () => ({});

export const getters = {
  articleRead: state => (id) => {
    return state.articles;
  },
  articleGet: state => (id) => {
    return state.articles[id];
  },
};

export const mutations = {
  articleSet(state, item) {
    Vue.set(state.articles, item.id, item);
  }
};

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1";

export const actions = {
  async articleRead({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/?tribe=${id}`);
    response.data.results.forEach(item => {
      commit('articleSet', item);
    });
  },
  async articleGet({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/${id}/`);
    commit('articleSet', response.data);
  },
};

export default {
  actions,
  getters,
  mutations
};
