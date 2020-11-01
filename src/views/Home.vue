<template>
  <div class="home">
    <ListHeader></ListHeader>
    <div class="container">
      <MyPagination :totalPages="allCountriseChunks.totalPages">
        <template #data="{pageNumber}">
          <CountriesList
            :pageNumber="pageNumber"
            :countries="allCountriseChunks"
          ></CountriesList>
        </template>
      </MyPagination>
    </div>

  </div>
</template>

<script>

import CountriesList from '@/components/CountriesList.vue'
import MyPagination from '@/components/MyPagination.vue'
import ListHeader from '@/components/ListHeader.vue'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    CountriesList,
    MyPagination,
    ListHeader
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
