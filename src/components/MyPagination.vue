<template>
  <div class="pagination__sec">
    <!-- <p>Pagination totalPages: {{totalPages}}</p>
    <p>Pagination pageNumber: {{pageNumber}}</p> -->
    <!-- List of countries -->
    <slot
      name="data"
      :pageNumber="pageNumber"
    />
    <p class="pagination__desc">Current page {{pageNumber}} of {{totalPages}} pages</p>
    <div class="pagination__row">
      <div class="pagination">
        <span class="less-btns">
          <!-- First Btn -->
          <button
            :disabled="pageNumber <= 1"
            @click="toFirstPage"
            class="pagination__btn first"
          >
            <fa-icon
              class="pagination__btn-icon"
              :icon="['fas', 'angle-double-left']"
            />
          </button>
          <!-- Previouse Btn -->
          <button
            :disabled="pageNumber <= 1"
            @click="toPreviousePage"
            class="pagination__btn prev"
          >
            <fa-icon
              class="pagination__btn-icon"
              :icon="['fas', 'arrow-left']"
            />
          </button>
        </span>

        <!-- Dots -->
        <span
          v-if="showDots"
          class="pagination__dots"
        >
          <fa-icon
            class="pagination__dots-icon"
            :icon="['fas', 'ellipsis-h']"
          />
        </span>

        <!-- Number Btns -->
        <span class="pagination__numbers">
          <span
            class="pagination__number"
            v-for="(item, index) in totalPages"
            :key="index"
          >
            <button
              v-if="isBtnVIsible(item)"
              @click="pageNumber = index + 1"
              :class="['pagination__btn', 'number', pageNumber === index + 1 ? 'active' : '' ] "
            >{{index + 1}}</button>
          </span>
        </span>

        <!-- Dots -->
        <span
          v-if="showDots"
          class="pagination__dots"
        >
          <fa-icon
            class="pagination__dots-icon"
            :icon="['fas', 'ellipsis-h']"
          />
        </span>
        <span class="more-btns">
          <!-- Next Btn -->
          <button
            :disabled="pageNumber >= totalPages"
            @click="toPNextPage"
            class="pagination__btn next"
          >
            <fa-icon
              class="pagination__btn-icon"
              :icon="['fas', 'arrow-right']"
            />
          </button>

          <!-- Last Btn -->
          <button
            :disabled="pageNumber >= totalPages"
            @click="toLastPage"
            class="pagination__btn last"
          >
            <fa-icon
              class="pagination__btn-icon"
              :icon="['fas', 'angle-double-right']"
            />
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  props: ['totalPages'],
  data () {
    return {
      pageNumber: 1,
      visibleNumbers: [],
      showDots: true
    }
  },
  methods: {
    toPreviousePage () {
      if (this.pageNumber > 1) {
        this.pageNumber--
      } else {
        this.pageNumber = 1
      }
    },
    toPNextPage () {
      if (this.pageNumber < this.totalPages) {
        this.pageNumber++
      } else {
        this.pageNumber = this.totalPages
      }
    },
    toLastPage () {
      this.pageNumber = this.totalPages
    },
    toFirstPage () {
      this.pageNumber = 1
    },
    shortenPaginationList () {
      const totalPages = Array.from({ length: this.totalPages }, (_, i) => i + 1)
      const first5 = totalPages.slice(0, 5)
      const first3 = totalPages.slice(0, 3)
      const last5 = totalPages.slice(Math.max(totalPages.length - 5, 1))
      const last3 = totalPages.slice(Math.max(totalPages.length - 3, 1))

      if (this.totalPages > 5) {
        let shortenArr = []
        if (first3.includes(this.pageNumber)) {
          shortenArr = first5
        } else if (last3.includes(this.pageNumber)) {
          shortenArr = last5
        } else {
          shortenArr = totalPages.slice(this.pageNumber - 3, this.pageNumber + 2)
        }
        this.visibleNumbers = shortenArr
        this.showDots = true
      } else {
        this.visibleNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1)
        this.showDots = false
      }
    },
    isBtnVIsible (item) {
      return this.visibleNumbers.includes(item)
    }
  },
  // computed: {
  //   regionCountrise () {
  //     return this.$store.state.regionCountrise
  //   }
  // },
  watch: {
    pageNumber () {
      this.shortenPaginationList()
    },
    totalPages () {
      this.shortenPaginationList()
    },
    $route (to, from) {
      if (to.name === 'Home' || to.name === 'Region') {
        this.pageNumber = 1
      }
    }
  },
  mounted () {
    this.shortenPaginationList()
  }
}
</script>

<style lang="scss">
.pagination__sec {
  padding: 50px 0px;
}

.pagination__desc {
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}
.pagination__row {
}
.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.pagination__btn {
  border-radius: 4px;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: var(--color-text);
  border: 1px solid var(--color-text);
  background-color: var(--color-bg);
  margin: 5px;

  &.active {
    background-color: var(--color-text);
    color: var(--color-bg);
    border-color: var(--color-text);
    &:disabled,
    &[disabled] {
      opacity: 1;
      cursor: initial;
    }
  }

  /*background-color:var(--rgb-color-text);*/
  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    cursor: pointer;
    color: var(--color-bg);
    border-color: var(--color-text);
    background-color: rgba(var(--rgb-color-text), 0.8);
  }
  &:disabled,
  &[disabled] {
    opacity: 0.5;
    cursor: initial;
  }
  &.number {
  }
}
.pagination__numbers {
  display: flex;
}
.pagination__number {
  display: none;
  @include mq("sm") {
    display: block;
  }
}

.pagination__dots {
  padding: 0 20px;
  line-height: 40px;
  display: none;

  @include mq("md") {
    display: block;
  }
}
.less-btns,
.more-btns {
  display: flex;
}
@media only screen and (max-width: 600px) {
  .pagination {
    display: grid;
    grid-template-areas:
      "numbers numbers"
      "less more";
  }
  .pagination__numbers {
    grid-area: numbers;
  }
  .less-btns {
    grid-area: less;
  }
  .more-btns {
    grid-area: more;
    justify-content: flex-end;
  }
}
</style>
