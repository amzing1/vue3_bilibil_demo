import { ref } from 'vue';
import { createStore } from 'vuex'

export default createStore({
  state: {
    currentIndex: ref(0)
  },
  mutations: {
    changeIndex(state, index: number) {
      state.currentIndex = ref(index);
    }
  },
  actions: {
  },
  modules: {
  }
})
