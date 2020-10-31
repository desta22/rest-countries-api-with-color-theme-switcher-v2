<template>
  <div>
    <p>Pagination totalPages: {{totalPages}}</p>
    <p>Pagination pageNumber: {{pageNumber}}</p>
    <div class="pagination-row">
      <!-- First Btn -->
      <button
        :disabled="pageNumber <= 1"
        @click="toFirstPage"
        class="btn btn-secondary mx-1 pagination-btn"
      > &lt;&lt; </button>

      <!-- Previouse Btn -->
      <button
        :disabled="pageNumber <= 1"
        @click="toPreviousePage"
        class="btn btn-secondary mx-1 pagination-btn"
      > &#8592; </button>

      <!-- Dots -->
      <span
        v-if="showDots"
        class="pagination__dots"
      > --- </span>

      <!-- Number Btns -->
      <span
        v-for="(item, index) in totalPages"
        :key="index"
      >
        <button
          v-if="isBtnVIsible(item)"
          @click="pageNumber = index + 1"
          :class="['btn', 'btn-secondary',  'mx-1', 'mb-1', 'pagination-btn', pageNumber === index + 1 ? 'active' : '' ] "
        >{{index + 1}}</button>
      </span>

      <!-- Dots -->
      <span
        v-if="showDots"
        class="pagination__dots"
      > --- </span>

      <!-- Next Btn -->
      <button
        :disabled="pageNumber >= totalPages"
        @click="toPNextPage"
        class="btn btn-secondary mx-1 pagination-btn"
      > &#8594; </button>

      <!-- Last Btn -->
      <button
        :disabled="pageNumber >= totalPages"
        @click="toLastPage"
        class="btn btn-secondary mx-1 pagination-btn"
      > &gt;&gt; </button>
    </div>

    <slot
      name="data"
      :pageNumber="pageNumber"
    />
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
  computed: {

  },
  watch: {
    pageNumber () {
      this.shortenPaginationList()
    },
    totalPages () {
      this.shortenPaginationList()
    }
  },
  mounted () {
    this.shortenPaginationList()
  }
  // props: ['pageNumber']
}
</script>

<style scoped>
.btn.pagination-btn.active {
  background-color: #d61877;
  border-color: #d61877;
  cursor: auto;
}
.pagination-row {
  padding: 10px;
}
</style>
