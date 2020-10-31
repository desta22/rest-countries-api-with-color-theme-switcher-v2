<template>
  <div class="region">
    Region

    <!-- <div v-if="grtRegCountrise.totalItems > 0">{{grtRegCountrise}}</div> -->
    <!-- {{grtRegCountrise}} -->
    <!-- {{$store.state.regionCountrise}} -->

    <MyPagination :totalPages="grtRegCountrise.totalPages">
      <template #data="{pageNumber}">
        <CountriesList
          :pageNumber="pageNumber"
          :countries="grtRegCountrise"
        ></CountriesList>
      </template>
    </MyPagination>

  </div>
</template>

<script>
import CountriesList from '../components/CountriesList.vue'
import MyPagination from '@/components/MyPagination.vue'
export default {
  name: 'Region',
  data () {
    return {
      slug: this.$route.params.slug
    }
  },
  components: {
    CountriesList,
    MyPagination
  },
  mounted () {
    this.$store.dispatch('grtRegionCountrise', this.$route.params.slug)
    // counterList()
  },

  computed: {
    grtRegCountrise () {
      return this.$store.getters.grtRegCountriseChunks(8)
    }
  },
  watch: {
    $route (to, from) {
      // console.log('to: ', to)
      // console.log('from: ', from)
      if (to.params.slug !== 'all') {
        this.$store.dispatch('grtRegionCountrise', this.$route.params.slug)
      }
    }
  }

}
</script>

<style>
</style>
