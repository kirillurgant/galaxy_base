<template>
  <ul class="starships-list">
    <li
      v-for="(item, index) in starships"
      :key="`${index}-starship`"
      class="starships-list__item"
    >
      {{ item.name }}
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
