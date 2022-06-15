import Vue from "vue";

const resourceURL = 'tribes';

export const getters = {
  tribeRead: state => () => {
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

export const actions = {
  async tribeRead({commit}) {
    const tribes = await this.$axios.$get(`/api/${resourceURL}/?tribe=${id}&format=json`);
    tribes.results.forEach(item => {
      commit('tribeSet', item);
    });
  },
  async tribeGet({commit}, {id}) {
    const tribe = await this.$axios.$get(`/api/${resourceURL}/${id}/?format=json`);
    commit('tribeSet', tribe);
  }
};

export default {
  actions,
  getters,
  mutations
};
