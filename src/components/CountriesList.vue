<template>
  <div>

    <p>pageNumber : {{pageNumber}}</p>
    <p>totalItems : {{countries.totalItems}}</p>
    <p>totalPages : {{countries.totalPages}}</p>
    <p>perPage : {{countries.perPage}}</p>

    <div class="container">
      <div class="row">
        <CountryBox
          v-for="item in countries['items'][pageNumber-1]"
          :key="item.alpha3Code"
          :country="item"
        ></CountryBox>
      </div>
    </div>
  </div>
</template>

<script>
import CountryBox from '@/components/CountryBox.vue'
export default {
  name: 'CountriesList',
  components: {
    CountryBox
  },
  props: ['pageNumber', 'countries']
}
</script>

<style>
</style>
