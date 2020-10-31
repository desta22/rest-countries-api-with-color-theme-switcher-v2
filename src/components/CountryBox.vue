<template>
  <div class="col-lg-3 col-md-4 mb-3 ">
    <div class="country-box">

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
      <!-- <div class="code">
      {{country.alpha3Code}}
      </div> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'CountryBox',
  props: ['country']
}
</script>

<style>
.country-box {
  position: relative;
}
.flag {
  padding-bottom: 75%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.name{
  background-color: #fff;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: inline-block;
}
.index{
  background-color: #fff;
  /* padding: 10px; */
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
}
.code{
  background-color: #fff;
  padding: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-block;
}
</style>
