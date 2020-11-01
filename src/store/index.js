import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { transformCountriesList } from '../helper.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    allCountrise: [],
    regionCountrise: []
  },

  getters: {
    getAllCountriesChunks: (state) => (perPage) => {
      return transformCountriesList(state.allCountrise, perPage)
    },
    grtRegCountriseChunks: (state) => (perPage) => {
      return transformCountriesList(state.regionCountrise, perPage)
    },
    getCountryById: (state) => (id) => {
      return state.allCountrise.find(country => country.alpha3Code === id)
    },
    getAllCountries: state => {
      return state.allCountrise
    }
  },

  mutations: {
    GET_ALL_COUNTRIES (state, data) {
      state.allCountrise = data.map((c, index) => {
        c.index = index
        return c
      })
    },
    GET_REGION_COUNTRIES (state, data) {
      state.regionCountrise = data.map((c, index) => {
        c.index = index
        return c
      })
    }
  },

  actions: {
    getAllCountries ({ commit }) {
      axios.get('https://restcountries.eu/rest/v2/all')
        .then((res) => {
          commit('GET_ALL_COUNTRIES', res.data)
        }).catch((err) => {
          console.log(err)
        })
    },
    grtRegionCountrise ({ commit }, slug) {
      axios.get('https://restcountries.eu/rest/v2/region/' + slug)
        .then((res) => {
          commit('GET_REGION_COUNTRIES', res.data)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
