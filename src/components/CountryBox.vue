<template>
  <div class="country-box">
    <!-- <div class="country-box">
      <div
        class="flag"
        :style="{ backgroundImage: 'url(' + country.flag + ')' }"
      >
      </div>
      <div class="name">
        {{country.name}}
      </div>
      <div class="index">
        {{country.index}}
      </div>
    </div> -->

    <router-link
      :to="'/country/'+countryCode"
      class="country-box__link"
    >
     <div class="index">
        {{country.index}}
      </div>
      <div
        class="country-box__flag"
        v-bind:style="{ backgroundImage: 'url(' + country.flag + ')' }"
      >

      </div>
      <div class="country-box__body">

        <h3 class="country-box__name">{{country.name}}</h3>
        <p class="country-box__text"><strong>Population:</strong> {{country.population}}</p>
        <p class="country-box__text"><strong>Region:</strong> {{country.region}}</p>
        <p class="country-box__text"><strong>Capital:</strong> {{country.capital}}</p>
      </div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'CountryBox',
  props: ['country'],
  computed: {
    countryCode: function () {
      return this.country.alpha3Code.toLowerCase()
    }
  }
}
</script>

<style lang="scss">
/* .country-box {
  position: relative;
}
.flag {
  padding-bottom: 75%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.name {
  background-color: #fff;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: inline-block;
} */
.index {
  background-color: #fff;
  /* padding: 10px; */
  text-align: center;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}
.country-box {
}
.country-box__link {
  position: relative;
  height: 100%;
  color: var(--color-text);
  display: block;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 3px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  background-color: var(--color-el);
  &:hover,
  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 15px rgba(0, 0, 0, 0.15);
  }
}
.country-box__name {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
}
.country-box__flag {
  padding-top: 60%;
  background-size: cover;
  background-position: center;
}
.country-box__text {
  font-size: 16px;
  margin-bottom: 10px;
}

.country-box__body {
  padding: 30px 25px;
}
</style>
