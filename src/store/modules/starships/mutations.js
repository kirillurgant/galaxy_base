import * as statusTypes from '@/const/statusTypes';
import {
  FETCH_RESOURCE,
  FETCH_RESOURCE_SUCCESS,
  FETCH_RESOURCE_ERROR,
  SET_STARSHIPS_LIST,
  SET_STARSHIPS_ITEM,
} from './mutationTypes';

export default {
  [FETCH_RESOURCE](state) {
    state.status = statusTypes.loading;
    state.errorMessage = '';
  },
  [FETCH_RESOURCE_SUCCESS](state) {
    state.status = statusTypes.success;
  },
  [FETCH_RESOURCE_ERROR](state, errorMessage) {
    state.status = statusTypes.error;
    state.errorMessage = errorMessage;
  },

  [SET_STARSHIPS_LIST](state, {
    results, next, previous, currentPage,
  }) {
    state.list = results;
    state.next = next;
    state.previous = previous;
    state.currentPage = currentPage;
  },
  [SET_STARSHIPS_ITEM](state, { data, id }) {
    state.item = data;
    state.currentItemId = id;
  },
};
