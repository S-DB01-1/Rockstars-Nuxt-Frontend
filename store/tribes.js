import axios from 'axios';
import Vue from "vue";

const resourceURL = 'tribes';
export const state = () => ({});

export const getters = {
  tribeRead: state => (id) => {
    return state.tribes;
  },
  tribeGet: state => (id) => {
    return state.tribes[id];
  }
};

export const mutations = {
  tribeSet(state, item) {
    Vue.set(state.tribes, item.id, item);
  }
};

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1";

export const actions = {
  async tribeRead({commit}) {
    const response = await axios.get(`${resourceURL}/?tribe=${id}`);
    response.data.results.forEach(item => {
      commit('tribeSet', item);
    });
  },
  async tribeGet({commit}, {id}) {
    const response = await axios.get(`${resourceURL}/${id}/`);
    commit('tribeSet', response.data);
  }
};

export default {
  actions,
  getters,
  mutations
};
