import axios from 'axios'
import Vue from "vue";

const resourceURL = 'articles'
export const state = () => ({})

export const getters = {
  articleRead: state => {
    return state.articles
  },
  articleGet: state => (id) => {
    return state.articles[id]
  }
}

export const mutations = {
  articleSet(state, item) {
    Vue.set(state.articles, item.id, item)
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
  articleRead({ commit }) {
    axios.get(
      resourceURL
    ).then(response => {
      response.data.results.forEach(item => {
        commit('articleSet', item)
      })
    }).catch(error => {
      console.error(error)
    }).finally(() => {
      console.log("i finishedddd")
    })
  },
  articleGet({ commit }, { id }) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/${id}`
    ).then(response => {
      // If request is successful then add the item to the state.
      commit('articleSet', response.data)
    }).catch(error => {
      console.error(error)
    })
  },
  tribeArticlesGet({commit}, {id}) {
    axios.get(
      `${resourceURL}/?tribe=${id}`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('rockstarSetFilter', item);
      });
    }).catch(error => {
      console.error(error);
    });
  }
}

export default {
  actions,
  getters,
  mutations
}
