<template>
  <div>

    <!-- <p>pageNumber : {{pageNumber}}</p>
    <p>totalItems : {{countries.totalItems}}</p>
    <p>totalPages : {{countries.totalPages}}</p>
    <p>perPage : {{countries.perPage}}</p> -->

    <div class="country-list__grid">
      <CountryBox
        v-for="item in countries['items'][pageNumber-1]"
        :key="item.alpha3Code"
        :country="item"
      ></CountryBox>
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

<style lang="scss">
.country-list__grid {
  display: grid;
  grid-auto-rows: 1fr;
  column-gap: 60px;
  row-gap: 60px;
  @include mq("sm") {
    grid-template-columns: repeat(2, 1fr);
  }
  @include mq("md") {
    grid-template-columns: repeat(3, 1fr);
  }
  @include mq("lg") {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
