<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
export default {
  created () {
    if (!this.$store.state.allCountrise.length > 0) {
      this.$store.dispatch('getAllCountries')
    }
  },
  components: {
    HeaderComp
  }
}
</script>

<style lang="scss">
</style>
