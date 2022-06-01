import axios from 'axios'
import Vue from "vue";

const resourceURL = 'tribes'
export const state = () => ({})

export const getters = {
  tribeRead: state => (id) => {
    return state.tribes
  },
  tribeGet: state => (id) => {
    return state.tribes[id]
  }
}

export const mutations = {
  tribeSet(state, item) {
    Vue.set(state.tribes, item.id, item)
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
    tribeRead({ commit }) {
        // Send get request to the backend.
        axios.get(
            'tribes'
        ).then(response => {
            response.data.results.forEach(item => {
                commit('tribeSet', item)
            })
        }).catch(error => {
            console.error(error)
        })
    },
    tribeGet({ commit }, { id }) {
        // Send get request to the backend.
        axios.get(
            `${resourceURL}/${id}/`
        ).then(response => {
            // If request is successful then add the item to the state.
            commit('tribeSet', response.data)
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
