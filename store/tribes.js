import Vue from "vue";

const resourceURL = 'tribes';
export const state = () => ({})

export const getters = {
  tribeRead: state => (id) => {
    return state.tribes;
  },
  tribeGet: state => (id) => {
    return state.tribes[id];
  },
  tribeGetLastThree: state => (id) => {
    return state.tribes;
  },
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
  },
  async tribeGetLastThree({commit}, {limit}) {
    const tribes = await this.$axios.$get(`/api/${resourceURL}/?limit=${limit}`);
    tribes.results.forEach(item => {
      commit('tribeSet', item);
    });
  }
};

export default {
  actions,
  getters,
  mutations
};
