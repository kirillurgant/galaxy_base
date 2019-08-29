<template>
  <api-wrapper :status="starships.status" :error-message="starships.errorMessage">
    <div class="starships">
      <div class="starships__input">
        <input type="text" name="filter" id="filter" placeholder="Фильтр" v-model="filterInput">
      </div>
      <div class="starships__list">
        <starships-list v-if="starshipsFiltered.length" :starships="starshipsFiltered" />
        <template v-else>Ничего не найдено. Попробуйте изменить запрос.</template>
      </div>
      <div class="starships__paginator">
        <paginator :prev="starships.previous" :next="starships.next" @change="changePaginator" />
      </div>
    </div>
  </api-wrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';
// @ is an alias to /src
import ApiWrapper from '@/components/ApiWrapper.vue';
import StarshipsList from '@/components/StarshipsList.vue';
import Paginator from '@/components/Paginator.vue';

export default {
  name: 'Starships',
  components: {
    ApiWrapper,
    StarshipsList,
    Paginator,
  },
  created() {
    this.getStarshipsHandler(this.pageUrl);
  },
  props: {
    filter: {
      type: String,
      default: '',
    },
    pageUrl: {
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
        this.$router.replace({
          name: 'starships',
          query: {
            ...this.$route.query,
            filter,
          },
        }, () => {});
      },
    },
    ...mapState({
      starshipsFiltered(state) {
        const filter = this.filter.trim().toLowerCase();

        return state.starships.list.filter((starship) => {
          const starshipName = starship.name.trim().toLowerCase();

          return starshipName.search(filter) !== -1;
        });
      },
      starships: state => state.starships,
    }),
  },
  methods: {
    ...mapActions(['getStarships']),
    changePaginator(url) {
      const query = Object.assign({}, this.$route.query, { pageUrl: url });

      this.getStarships({ url });

      this.$router.push({ name: 'starships', query });
    },
    getStarshipsHandler(pageUrl) {
      const { currentPage } = this.starships;
      if (this.starships.list.length && (currentPage === pageUrl)) return;

      this.getStarships({ url: pageUrl });
    },
  },
  watch: {
    pageUrl(val) {
      this.getStarshipsHandler(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.starships__input, .starships__list {
  margin-bottom: 20px;
}

#filter {
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 3px;
}
</style>
