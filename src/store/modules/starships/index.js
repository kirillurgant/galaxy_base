import * as statusTypes from '@/const/statusTypes';
import mutations from './mutations';
import actions from './actions';

const initState = {
  status: statusTypes.loading,
  errorMessage: '',
  data: [],
  next: '',
  previous: '',
};

export default {
  state: initState,
  mutations,
  actions,
};
