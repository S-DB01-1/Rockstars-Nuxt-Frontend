import axios from 'axios'

const resourceURL = 'tribes'
const tribeList = []

export const getters = {
  tribeRead: state => {
    return state.tribes
  }
}

export const mutations = {
  tribeSet(state, item) {

    state.tribes = item
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
    tribeRead({ commit }) {
        // Send get request to the backend.
        axios.get(
            'tribes'
        ).then(response => {
            // If request is successful then loop every item in the retrieved list
            // and add it to the state.
            // response = JSON.parse(response)
            response.data.results.forEach(item => {
                // commit('tribeSet', item)
                tribeList.push(item)
            })
            commit('tribeSet', tribeList)
        }).catch(error => {
            console.error(error)
        })
    },
    tribeGet({ commit }, { id }) {
        // Send get request to the backend.
        axios.get(
            `${resourceURL}/${id}`
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
