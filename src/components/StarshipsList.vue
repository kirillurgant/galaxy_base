<template>
  <ul class="starships-list">
    <li
      v-for="(item, index) in starships"
      :key="`${index}-starship`"
      class="starships-list__item"
    >
      <router-link :to="getUrl(item.url)">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'StarshipsList',
  props: {
    starships: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getUrl(url) {
      const { pathname } = new URL(url);
      const id = pathname.split('/').reverse().find(item => item);

      return `/starships/${id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.starships-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.starships-list__item {
  margin-bottom: 10px;
}
</style>
