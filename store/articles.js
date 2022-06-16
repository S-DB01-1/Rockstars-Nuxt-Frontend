import Vue from "vue";

const resourceURL = 'articles';

export const getters = {
  articleRead: state => () => {
    return state.articles;
  },
  articleGet: state => (id) => {
    return state.articles[id];
  },
  articleGetLastThree: state => (id) => {
    return state.articles;
  },
  articleSearch: state => (id, query) => {
    return state.articles;
  }
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
  async articleGetLastThree({commit}) {
    const articles = await this.$axios.$get(`/api/${resourceURL}/?ordering=-datecreated&format=json`);
    articles.results.forEach(item => {
      commit('articleSet', item);
    });
  },
  async articleSearch({commit}, {id, query}) {
    const articles = await this.$axios.$get(`/api/${resourceURL}/?tribe_id=${id}&search=${query}`);
    articles.results.forEach(item => {
      commit('articleSet', item);
    });
  }
};

export default {
  actions,
  getters,
  mutations
};
