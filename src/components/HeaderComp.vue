<template>
  <div class="site-header">
    <div class="container">
      <div class="main-nav">
        <router-link
          class="logo-link"
          to="/"
        >Where in the world</router-link>
        <a
          @click="toggleMode"
          class="mode-link"
        >
          <fa-icon
            class="mode-link__icon"
            :icon="['far', 'moon']"
          />
          Dark mode
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  data () {
    return {
      isDark: false
    }
  },
  methods: {
    toggleMode () {
      this.isDark = !this.isDark
      if (this.isDark) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }
  }

}
</script>

<style lang="scss">
.site-header {
  padding: 30px 0;
  background-color: var(--color-bg);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  @include mq("sm") {
    margin-bottom: 50px;
  }
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  font-size: 18px;
  font-weight: 800;
  color: var(--color-text);
  @include mq("sm") {
    font-size: 24px;
  }
}

.mode-link {
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  @include mq("sm") {
    font-size: 16px;
  }
}

.mode-link__icon {
  margin-right: 10px;
}
</style>
