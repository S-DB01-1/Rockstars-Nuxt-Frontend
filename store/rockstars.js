import Vue from "vue";

const baseURL = 'https://s8ifzokvp35u68fi.azurewebsites.net/api/v1';
const resourceURL = 'rockstars';

export const getters = {
  rockstarRead: state => () => {
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

export const actions = {
  async rockstarRead({commit}, {id}) {
    const rockstars = await this.$axios.$get(`${baseURL}/${resourceURL}`);
    rockstars.results.forEach(item => {
      commit('rockstarSet', item);
    });
  },
  async rockstarGet({commit}, {id}) {
    const rockstar = await this.$axios.$get(`${baseURL}/${resourceURL}/${id}/?format=json`);
    commit('rockstarSet', rockstar);
  },
};


export default {
  actions,
  getters,
  mutations
};
