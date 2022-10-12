import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      upvoteManagerSelectedStates: { }
    }
  },
  mutations: {
    setupNewUpvoteManagers (state, managerStates) {
      for(const { id, selected } of managerStates){
        state.upvoteManagerSelectedStates[id] = { selected: selected }
      }
    },
    updateUpdateManager(state, {id, selected}) {
      state.upvoteManagerSelectedStates[id].selected = selected
    }
  },
  actions: {
    setupNewUpvoteManagers (context, managerStates) {
      context.commit('setupNewUpvoteManagers', managerStates)
    },
    updateUpdateManager(context, params) {
      context.commit('updateUpdateManager', params)
    }
  }
})