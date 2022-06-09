import axios from 'axios'
import Vue from "vue";

const resourceURL = 'videos'
export const state = () => ({})

export const getters = {
  videoRead: state => (id) => {
    return state.videos
  },
  videoGet: state => (id) => {
    return state.videos[id]
  },
  videoSearch: state => (id, query) => {
    return state.videos
  }
}

export const mutations = {
  videoSet(state, item) {
    Vue.set(state.videos, item.id, item)
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
  videoRead({ commit }, { id }) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/?tribe=${id}`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('videoSet', item)
      })
    }).catch(error => {
      console.error(error)
    })
  },
  videoGet({ commit }, { id }) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/${id}/`
    ).then(response => {
      // If request is successful then add the item to the state.
      commit('videoSet', response.data)
    }).catch(error => {
      console.error(error)
    })
  },
  videoSearch({ commit }, { id, query }) {
    axios.get(
      `${resourceURL}/?tribe_id=${id}&search=${query}`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('videoSet', item)
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
