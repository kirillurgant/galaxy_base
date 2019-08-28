import * as statusTypes from '@/const/statusTypes';
import {
  GET_STARSHIPS,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIPS_ERROR,
} from './mutationTypes';

export default {
  [GET_STARSHIPS](state) {
    state.status = statusTypes.loading;
    state.errorMessage = '';
  },
  [GET_STARSHIPS_SUCCESS](state, { results, next, previous }) {
    state.status = statusTypes.success;
    state.data = results;
    state.next = next;
    state.previous = previous;
  },
  [GET_STARSHIPS_ERROR](state, errorMessage) {
    state.status = statusTypes.error;
    state.errorMessage = errorMessage;
  },
};
