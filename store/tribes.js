import axios from 'axios'

const resourceURL = 'tribes'

export const getters = {
  tribeRead: state => {
    return state.tribe
  }
}

export const mutations = {
  tribeSet(state, item) {
    
    state.tribes = item
  }
}

axios.defaults.baseURL = "http://localhost:8000/api/v1/"

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
                commit('tribeSet', objects)
            })
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