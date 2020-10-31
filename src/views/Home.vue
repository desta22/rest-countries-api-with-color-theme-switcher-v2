<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >

    <MyPagination
      :totalItems="allCountriseChunks.totalItems"
      :totalPages="allCountriseChunks.totalPages"
    >
      <template #data="{pageNumber}">
        <CountriesList
          :pageNumber="pageNumber"
          :countries="allCountriseChunks"
        ></CountriesList>
        neki texk
      </template>
    </MyPagination>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import CountryBox from '@/components/CountryBox.vue'
import CountriesList from '@/components/CountriesList.vue'
import MyPagination from '@/components/MyPagination.vue'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    // CountryBox,
    CountriesList,
    MyPagination
  },
  mounted () {
  },
  computed: {
    allCountrise () {
      // return this.$store.state.allCountrise
      return this.$store.getters.getAllCountries
    },
    allCountriseChunks () {
      return this.$store.getters.getAllCountriesChunks(8)
    }
  }
}
</script>
