import types from './mutation-types';

export default {
  saveCategories({ commit }, categories) {
    commit(types.SPREMI_KATEGORIJE, categories);
  },
  saveJoke({ commit }, joke) {
    commit(types.SPREMI_VIC, joke);
  },
};
