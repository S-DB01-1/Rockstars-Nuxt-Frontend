import Vue from "vue";

const resourceURL = 'articles';

export const getters = {
  articleTextGet: state => () => {
    return state.articleText;
  },
};

export const mutations = {
  articleTextSet(state, item) {
    Vue.set(state.articleText, item.id, item);
  }
};

export const actions = {
  async articleTextGet({commit}, {id}) {
    const articleTexts = await this.$axios.$get(`/api/${resourceURL}/?article=${id}&format=json`);
    articleTexts.results.forEach(item => {
      commit('articleTextSet', item);
    });
  }

};

export default {
  actions,
  getters,
  mutations
};
