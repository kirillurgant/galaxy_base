import api from '@/api';
import * as mutationTypes from './mutationTypes';

export default {
  async getStarships({ commit }, params = {}) {
    const { url } = params;
    commit(mutationTypes.FETCH_RESOURCE);

    try {
      const { data } = await api.getStarships({ url });

      commit(mutationTypes.SET_STARSHIPS_LIST, {
        ...data,
        currentPage: url,
      });
      commit(mutationTypes.FETCH_RESOURCE_SUCCESS);
    } catch (err) {
      commit(mutationTypes.FETCH_RESOURCE_ERROR, err.message || 'Failed to retrieve');
    }
  },

  async getStarshipById({ commit }, id) {
    commit(mutationTypes.FETCH_RESOURCE);

    try {
      const { data } = await api.getStarshipById({ id });

      commit(mutationTypes.SET_STARSHIPS_ITEM, { data, id });
      commit(mutationTypes.FETCH_RESOURCE_SUCCESS);
    } catch (err) {
      commit(mutationTypes.FETCH_RESOURCE_ERROR, err.message || 'Failed to retrieve');
    }
  },
};
