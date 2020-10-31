import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function chunkArray (arr, chunkSize) {
  var myArray = [...arr]
  var results = []

  while (myArray.length) {
    results.push(myArray.splice(0, chunkSize))
  }

  return results
}
export default new Vuex.Store({
  state: {
    allCountrise: []
  },
  getters: {
    getAllCountriesChunks: (state) => (perPage) => {
      const all = state.allCountrise
      const countriesData = {
        totalItems: 0,
        totalPages: 0,
        perPage: 0,
        items: []
      }
      countriesData.totalItems = all.length
      countriesData.perPage = perPage
      countriesData.items = chunkArray(all, perPage)
      countriesData.totalPages = countriesData.items.length

      return countriesData
    },
    getAllCountries: state => {
      return state.allCountrise
    },
    getAllCountriesChunks2: state => {
      const all = state.allCountrise
      const countriesData = {
        totalItems: 0,
        totalPages: 0,
        perPage: 0,
        items: []
      }
      countriesData.totalItems = all.length
      countriesData.perPage = 8
      countriesData.items = chunkArray(all, 8)
      countriesData.totalPages = countriesData.items.length

      return countriesData
    }
  },
  mutations: {
    GET_ALL_COUNTRIES (state, data) {
      state.allCountrise = data.map((c, index) => {
        c.index = index
        return c
        // console.log(c)
      })
    }
  },
  actions: {
    getAllCountries ({ commit }) {
      axios.get('https://restcountries.eu/rest/v2/all')
        .then((res) => {
          // console.log(res.data)
          commit('GET_ALL_COUNTRIES', res.data)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
