<template>

    <div class="country-list-nav">
      <Search></Search>
      <DropDown></DropDown>
    </div>

</template>

<script>
import Search from '../components/Search.vue'
import DropDown from '../components/DropDown.vue'
export default {
  name: 'ListHeader',
  components: {
    Search,
    DropDown
  }
}
</script>

<style lang="scss">
.country-list-nav {
  margin-bottom: 50px;
}

.country-list-nav {
  display: block;
  @include mq("sm") {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
