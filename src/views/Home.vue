<template>
  <div class="home">
   <div class="mb-3">

   </div>

    <MyPagination :totalPages="allCountriseChunks.totalPages">
      <template #data="{pageNumber}">
        <CountriesList
          :pageNumber="pageNumber"
          :countries="allCountriseChunks"
        ></CountriesList>
      </template>
    </MyPagination>

  </div>
</template>

<script>

import CountriesList from '@/components/CountriesList.vue'
import MyPagination from '@/components/MyPagination.vue'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    CountriesList,
    MyPagination
  },
  mounted () {
  },
  computed: {
    allCountriseChunks () {
      return this.$store.getters.getAllCountriesChunks(8)
    }
  }
}
</script>
