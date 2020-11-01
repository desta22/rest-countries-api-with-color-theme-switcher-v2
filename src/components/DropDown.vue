<template>
  <div class='region-select-sec'>

    <div
      class='dropdown'
      v-bind:class='{ show : isOpen }'
      v-on-clickaway="away"
    >
      <a
        href='#'
        class='btn btn-primary dropdown__btn'
        @click.prevent='toggleDropdown'
        @keydown.space.exact.prevent='toggleDropdown'
      >
        {{selectTitle}}
        <!-- <fa-icon
          class='dropdown__icon'
          :icon='['fas', iconClass]'
        /> -->
      </a>
      <transition
        name='fade'
        appear
      >
        <ul
          class='dropdown__menu'
          v-if='isOpen'
        >
          <li>
            <a
              v-for='(region , index) in regionsList'
              :key='index'
              class="dropdown__item"
              href='#'
              @click.prevent='selectRegionFromDropdown(region)'
            >{{region.name}}</a>
          </li>
        </ul>
      </transition>
    </div>

  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [clickaway],
  name: 'DropDown',
  data () {
    return {
      iconClass: 'chevron-down',
      isOpen: false,
      selectTitle: 'Filter by Region',
      regionsList: [],
      loadedRegionList: [],
      regions: [
        { name: 'Asia', slug: 'asia' },
        { name: 'Europe', slug: 'europe' },
        { name: 'Africa', slug: 'africa' },
        { name: 'Oceania', slug: 'oceania' },
        { name: 'Americas', slug: 'americas' },
        { name: 'Polar', slug: 'polar' }
      ]
    }
  },
  watch: {
    isOpen () {
      if (this.isOpen) {
        this.iconClass = 'chevron-up'
      } else {
        this.iconClass = 'chevron-down'
      }
    }
  },
  mounted () {
    if (this.$route.name === 'Region' && this.$route.params.slug) {
      const slug = this.$route.params.slug
      this.setSelected(this.regions.find(r => r.slug === slug))
    } else if (this.$route.name === 'Home') {
      this.regionsList = this.regions
    }
  },
  methods: {
    setDropdown (region) {
      let filteredRegionList = []
      if (region.slug !== 'all') {
        this.selectTitle = region.name
        // remove selected
        filteredRegionList = this.regions.filter((e) => {
          return e.name !== region.name
        })
        // add 'all' item
        filteredRegionList.unshift({ name: 'Select all', slug: 'all' })
      } else {
        this.selectTitle = 'Filter by Region'
        filteredRegionList = this.regions
      }
      this.regionsList = filteredRegionList
    },
    setSelected (region, page_number = 0) {
      let filteredRegionList = []
      this.selectTitle = region.name
      filteredRegionList = this.regions.filter((e) => {
        return e.name !== region.name
      })
      filteredRegionList.unshift({ name: 'Select all', slug: 'all' })
      this.regionsList = filteredRegionList
    },
    selectRegionFromDropdown (region) {
      this.toggleDropdown()
      this.setDropdown(region)
      if (region.slug !== 'all') {
        this.$router.push({ name: 'Region', params: { slug: region.slug } })
      } else {
        this.$router.push({ name: 'Home' })
      }
    },
    toggleDropdown () {
      this.isOpen = !this.isOpen
    },
    away: function () {
      this.isOpen = false
    }
  }
}
</script>

<style lang='scss'>
.dropdown {
  display: inline-block;
  position: relative;
}
.btn.dropdown__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 200px;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
  /*padding: 17px 25px;*/
}
.dropdown__icon {
  fill: var(--color-text);
}
.dropdown__menu {
  text-align: left;
  width: 100%;
  display: block;
  position: absolute;
  z-index: 50;
  top: 62px;
  border-radius: 4px;
  padding: 10px 0;
  /*display: none;*/
  background-color: var(--color-bg);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);
  /*background-color: red;*/
}
.dropdown__item {
  color: var(--color-text);
  display: block;
  padding: 8px 25px;
  &:hover,
  &:focus {
    background-color: var(--color-text);
    color: var(--color-bg);
    .dropdown__icon {
      fill: var(--color-bg);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
