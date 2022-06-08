import axios from 'axios';
import Vue from "vue";
const resourceURL = 'rockstars';
export const state = () => ({});

export const getters = {
  rockstarRead: state => (id) => {
    return state.rockstars;
  },
  rockstarGet: state => (id) => {
    return state.rockstars[id];
  },
};

export const mutations = {
  rockstarSet(state, item) {
    Vue.set(state.rockstars, item.id, item);
  }
};

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1";

export const actions = {
  async rockstarRead({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/?tribe=${id}`);
    response.data.results.forEach(item => {
      commit('rockstarSet', item);
    });
  },
  async rockstarGet({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/${id}/`);
    commit('rockstarSet', response.data);
  },
};


export default {
  actions,
  getters,
  mutations
};
