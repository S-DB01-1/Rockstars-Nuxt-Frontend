import axios from 'axios';
import Vue from "vue";

const resourceURL = 'videos';
export const state = () => ({});

export const getters = {
  videoRead: state => (id) => {
    return state.videos;
  },
  videoGet: state => (id) => {
    return state.videos[id];
  }
};

export const mutations = {
  videoSet(state, item) {
    Vue.set(state.videos, item.id, item);
  }
};

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1";

export const actions = {
  async videoRead({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/?tribe=${id}`);
    response.data.results.forEach(item => {
      commit('videoSet', item);
    });
  },
  async videoGet({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/${id}/`);
    commit('videoSet', response.data);
  }
};

export default {
  actions,
  getters,
  mutations
};
