<template>
  <ul class="starships-list">
    <li
      v-for="(item, index) in starships"
      :key="`${index}-starship`"
      class="starships-list__item"
    >
      <router-link :to="item.url">{{ item.name }}</router-link>
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
};
</script>
