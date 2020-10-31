<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link
        class="navbar-brand"
        to="/"
      >Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
      <div class="ml-auto">

 <DropDown></DropDown>
      </div>

      </div>
    </nav>
    <ul class="nav ">
      <li class="nav-item mr-auto">

      </li>

      <li class="nav-item">

      </li>
    </ul>
    <div id="nav">

      <!-- <router-link to="/region/africa">Region</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import DropDown from './components/DropDown.vue'
export default {
  created () {
    if (!this.$store.state.allCountrise.length > 0) {
      this.$store.dispatch('getAllCountries')
    }
  },
  components: {
    DropDown
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
