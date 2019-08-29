<template>
  <div class="paginator">
    <button
      class="paginator__button"
      type="button"
      :disabled="!prev"
      @click.prevent="$emit('change', prev)"
    >
      Previous
    </button>
    <button
      class="paginator__button"
      type="button"
      :disabled="!next"
      @click.prevent="$emit('change', next)"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    next: String,
    prev: String,
  },
};
</script>

<style lang="scss" scoped>
.paginator__button {
  margin-right: 10px;
  padding: 5px 10px;
  background: rgb(241, 240, 240);
  border: 0;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
