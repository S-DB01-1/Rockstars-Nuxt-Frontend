import axios from 'axios'

const resourceURL = 'articles'
const articleList = []

export const getters = {
  articleRead: state => {
    return state.article
  }
}

export const mutations = {
  articleSet(state, item) {
    
    state.articles = item
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
    articleRead({ commit }) {
        // Send get request to the backend.
        axios.get(
            'articles'
        ).then(response => {
            // If request is successful then loop every item in the retrieved list
            // and add it to the state.
            // response = JSON.parse(response)
            response.data.results.forEach(item => {
                // commit('articleSet', item)
                articleList.push(item)
            })
            commit('articleSet', articleList)
        }).catch(error => {
            console.error(error)
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
    }
}
 
export default {
    actions,
    getters,
    mutations
}