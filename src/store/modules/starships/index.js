import * as statusTypes from '@/const/statusTypes';
import mutations from './mutations';
import actions from './actions';

const initState = {
  status: statusTypes.loading,
  errorMessage: '',
  list: [],
  item: {},
  next: '',
  previous: '',
  currentPage: '',
  currentItemId: '',
};

export default {
  state: initState,
  mutations,
  actions,
};
