import Vue from "vue";

const resourceURL = 'articles';

export const getters = {
  articleRead: state => () => {
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

export const actions = {
  async articleRead({commit}, {id}) {
    const articles = await this.$axios.$get(`/api/${resourceURL}/?tribe=${id}&format=json`);
    articles.results.forEach(item => {
      commit('articleSet', item);
    });
  },
  async articleGet({commit}, {id}) {
    const article = await this.$axios.$get(`/api/${resourceURL}/${id}/?format=json`);
    commit('articleSet', article);
  },
};

export default {
  actions,
  getters,
  mutations
};
