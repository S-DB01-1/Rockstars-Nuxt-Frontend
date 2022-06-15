import Vue from "vue";

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
    const rockstars = await this.$axios.$get(`/api/${resourceURL}/?tribe=${id}&format=json`);
    rockstars.results.forEach(item => {
      commit('rockstarSet', item);
    });
  },
  async rockstarGet({commit}, {id}) {
    const rockstar = await this.$axios.$get(`/api/${resourceURL}/${id}/?format=json`);
    commit('rockstarSet', rockstar);
  },
};


export default {
  actions,
  getters,
  mutations
};
