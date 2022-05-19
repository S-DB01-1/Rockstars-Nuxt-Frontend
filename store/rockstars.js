import axios from 'axios';
import Vue from "vue";

let indexFilter = 0;
const resourceURL = 'rockstars';
export const state = () => ({});

export const getters = {
  rockstarRead: state => (id) => {
    return state.rockstars;
  },
  rockstarGet: state => (id) => {
    return state.rockstars[id];
  },
};

export const mutations = {
  rockstarSet(state, item) {
    Vue.set(state.rockstars, item.id, item);
  },
  // Workaround for Array length
  rockstarSetFilter(state, item) {
    Vue.set(state.rockstars, indexFilter, item);
    indexFilter++;
  }
};

axios.defaults.baseURL = "https://s8ifzokvp35u68fi.azurewebsites.net/api/v1";

export const actions = {
  rockstarRead({commit}, {id}) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/?tribe=${id}`
    ).then(response => {
      response.data.results.forEach(item => {
        commit('rockstarSet', item);
      });
    }).catch(error => {
      console.error(error);
    });
  },
  rockstarGet({commit}, {id}) {
    // Send get request to the backend.
    axios.get(
      `${resourceURL}/${id}`
    ).then(response => {
      // If request is successful then add the item to the state.
      commit('rockstarSet', response.data);
    }).catch(error => {
      console.error(error);
    });
  },
};


export default {
  actions,
  getters,
  mutations
};
