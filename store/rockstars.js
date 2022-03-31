import axios from 'axios'
import Vue from 'vue'

const resourceURL = 'rockstars'
const rockstarList = []

export const getters = {
  rockstarRead: state => {
    return state.rockstars
  }
}

export const mutations = {
  rockstarSet(state, item) {
    state.rockstars = item
  },
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
  rockstarRead({ commit }) {
    axios.get(
      'rockstars'
    ).then(response => {
      response.data.results.forEach(item => {
        rockstarList.push(item)
      })
      commit('rockstarSet', rockstarList)
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
  }
}

export default {
  actions,
  getters,
  mutations
}
