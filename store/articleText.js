import axios from 'axios'
import Vue from "vue";

// const resourceURL = 'articles'
export const state = () => ({})

export const getters = {
  articleTextGet: state => (id) => {
    return state.articleText
  },
}

export const mutations = {
  articleTextSet(state, item){
    Vue.set(state.articleText, item.id, item)
  }
}

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1"

export const actions = {
  articleTextGet({commit}, {id}){
    axios.get(
      `articletext/?article=${id}`
    ).then(response => {
      // If request is successful then add the item to the state.
      response.data.results.forEach(item => {
        commit('articleTextSet', item)
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
