<template>
  <api-wrapper :status="status" :error-message="errorMessage">
    <div class="starships">
      <div class="starships__input">
        <input type="text" name="filter" id="filter" v-model="filterInput">
      </div>
      <div class="starships__list">
        <starships-list :starships="starships" />
      </div>
    </div>
  </api-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
// @ is an alias to /src
import ApiWrapper from '@/components/ApiWrapper.vue';
import StarshipsList from '@/components/StarshipsList.vue';

export default {
  name: 'Starships',
  components: {
    ApiWrapper,
    StarshipsList,
  },
  created() {
    this.getStarships();
  },
  props: {
    filter: {
      type: String,
      default: '',
    },
  },
  computed: {
    filterInput: {
      get() {
        return this.filter;
      },
      set(filter) {
        const query = filter ? { filter } : {};
        this.$router.replace({ name: 'starships', query });
      },
    },
    ...mapState({
      starships(state) {
        const filter = this.filter.trim().toLowerCase();

        return state.starships.data.filter((starship) => {
          const starshipName = starship.name.trim().toLowerCase();

          return starshipName.search(filter) !== -1;
        });
      },
      status: (state) => state.starships.status,
      errorMessage: (state) => state.starships.errorMessage,
    }),
  },
  methods: {
    ...mapActions(['getStarships']),
  },
};
</script>
