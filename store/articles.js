import axios from 'axios'
import Vue from "vue";

const resourceURL = 'articles'
export const state = () => ({})

export const getters = {
  articleRead: state => (id) => {
    return state.articles
  },
  articleGet: state => (id) => {
    return state.articles[id]
  },
  articleGetLastThree: state => (id) => {
    return state.articles
  },
  articleSearch: state => (id, query) => {
    return state.articles
  }
}

export const mutations = {
  articleSet(state, item) {
    Vue.set(state.articles, item.id, item)
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
  articleRead({ commit }, { id }) {
    axios.get(
      `${resourceURL}/?tribe=${id}`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('articleSet', item)
      })
    }).catch(error => {
      console.error(error)
    })
  },
  articleGet({ commit }, { id }) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/${id}/`
    ).then(response => {
      // If request is successful then add the item to the state.
      commit('articleSet', response.data)
    }).catch(error => {
      console.error(error)
    })
  },
  articleGetLastThree({ commit }) {
    // Send get request to the backend.
    axios.get(
      `articles/?ordering=-datecreated&format=json`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('articleSet', item)
      })
    }).catch(error => {
      console.error(error)
    })
  },
  articleSearch({ commit }, { id, query }) {
    axios.get(
      `${resourceURL}/?tribe_id=${id}&search=${query}`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('articleSet', item)
      })
    }).catch(error => {
      console.error(error)
    })
  }
}

export default {
  actions,
  getters,
  mutations
}
