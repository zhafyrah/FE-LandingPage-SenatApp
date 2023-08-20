<template>
  <div class="pagination">
    <button @click="onClickPrev" :disabled="page === 1">Prev</button>
    <span class="page-info">{{ page }} / {{ totalPage }}</span>
    <button @click="onClickNext" :disabled="page === totalPage">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    totalPage: Number,
  },
  methods: {
    onClickPrev() {
      this.$emit("click-prev");
    },
    onClickNext() {
      this.$emit("click-next");
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.page-info {
  margin: 0 10px;
}
</style>
