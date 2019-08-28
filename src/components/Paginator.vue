<template>
  <div>
    <button
      type="button"
      :disabled="!prev"
      @click.prevent="$emit('change', prev)"
    >
      Prev
    </button>
    <button
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
