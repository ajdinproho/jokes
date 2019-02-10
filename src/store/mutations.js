import types from './mutation-types';

export default {
  [types.SPREMI_KATEGORIJE](state, categories) {
    state.categories = categories;
  },
  [types.SPREMI_VIC](state, joke) {
    state.jokes.push(joke);
  },
};
