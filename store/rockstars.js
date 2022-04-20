import axios from 'axios'
import Vue from "vue";

var indexFilter = 0;
const resourceURL = 'rockstars'
export const state = () => ({})

export const getters = {
  rockstarRead: state => {
    return state.rockstars
  },
  rockstarGet: state => (id) => {
    return state.rockstars[id]
  }
}

export const mutations = {
  rockstarSet(state, item) {
    Vue.set(state.rockstars, item.id, item)
  },
  rockstarSetFilter(state, item) {
    Vue.set(state.rockstars, indexFilter, item)
    indexFilter++
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
  rockstarRead({ commit }) {
    // Send get request to the backend.
    axios.get(
      resourceURL
    ).then(response => {
      response.data.results.forEach(item => {
        commit('rockstarSet', item)
      })
    }).catch(error => {
      console.error(error)
    })
  },
  rockstarGet({ commit }, { id }) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/${id}`
    ).then(response => {
      // If request is successful then add the item to the state.
      commit('rockstarSet', response.data)
    }).catch(error => {
      console.error(error)
    })
  },
  tribeRockstarGet({commit}) {
    axios.get(
        `${resourceURL}/?tribe=2`
    ).then(response => {
        response.data.results.forEach(item => {
            commit('rockstarSetFilter', item)
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
