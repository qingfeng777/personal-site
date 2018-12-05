import Vue from 'vue'
import Vuex from 'vuex'
import article from './moudle/article'
 
Vue.use(Vuex)
 
const state = {
  pjtnews: 0,
  count: 1
}
 
const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  }
}
export default new Vuex.Store({
  state,
  mutations,
  modules: {
      article
  }
});
