import axios from 'axios'
import Vue from "vue";

const resourceURL = 'podcasts'
export const state = () => ({})

export const getters = {
  podcastRead: state => {
    return state.podcasts
  },
  podcastGet: state => (id) => {
    return state.podcasts[id]
  }
}

export const mutations = {
  podcastSet(state, item) {
    Vue.set(state.podcasts, item.id, item)
  },
}

axios.defaults.baseURL = "https://dd36-145-93-172-152.ngrok.io/api/v1"

export const actions = {
  podcastRead({ commit }, { id }) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/?tribe=${id}`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('podcastSet', item)
      })
    }).catch(error => {
      console.error(error)
    })
  },
  podcastGet({ commit }, { id }) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/${id}`
    ).then(response => {
      // If request is successful then add the item to the state.
      commit('podcastSet', response.data)
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
