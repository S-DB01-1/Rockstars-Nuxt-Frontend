import Vue from "vue";

const resourceURL = 'videos';

export const getters = {
  videoRead: state => () => {
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

export const actions = {
  async videoRead({commit}, {id}) {
    const videos = await this.$axios.$get(`/api/${resourceURL}/?tribe=${id}&format=json`);
    videos.results.forEach(item => {
      commit('videoSet', item);
    });
  },
  async videoGet({commit}, {id}) {
    const video = await this.$axios.$get(`/api/${resourceURL}/${id}/?format=json`);
    commit('videoSet', video);
  }
};

export default {
  actions,
  getters,
  mutations
};
