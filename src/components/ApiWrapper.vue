<template>
  <div class="api-wrapper">
    <div v-if="isLoading" class="api-wrapper__loader">loading...</div>
    <div v-else-if="isError" class="api-wrapper__error">Error: {{ errorMessage }}</div>
    <div v-else class="api-wrapper__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import * as statusTypes from '@/const/statusTypes';

export default {
  name: 'ApiWrapper',
  props: {
    status: {
      type: String,
      default: statusTypes.loading,
    },
    errorMessage: {
      type: String,
      default: 'something went wrong...',
    },
  },
  computed: {
    isLoading() {
      return this.status === statusTypes.loading;
    },
    isError() {
      return this.status === statusTypes.error;
    },
  },
}
</script>

<style lang="scss" scoped>
.api-wrapper__loader {
  text-align: center;
  color: green;
}

.api-wrapper__error {
  text-align: center;
  color: red;
}
</style>