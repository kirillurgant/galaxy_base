<template>
  <api-wrapper :status="starships.status" :error-message="starships.errorMessage">
    <div class="starship">
      <div
        v-for="(item, key) in starships.item"
        :key="key"
      >
        <p v-if="!Array.isArray(item)" :class="{ bold: key === 'name' }">{{ item }}</p>
      </div>
    </div>
  </api-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ApiWrapper from '@/components/ApiWrapper.vue';

export default {
  name: 'StarshipsItem',
  components: {
    ApiWrapper,
  },
  created() {
    if (this.id === this.starships.currentItemId) return;
    this.getStarshipById(this.id);
  },
  props: {
    id: String,
  },
  computed: {
    ...mapState(['starships']),
  },
  methods: {
    ...mapActions(['getStarshipById']),
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
  color: darkblue;
}
</style>
