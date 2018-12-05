import * as types from './mutation-types'

import alertsCluster from '../../../fetch/alertsCluster'
// initial state
const state = {
  listData: [],       // 主列表数据
  listPageNum: 1,     // 主列表页码
  listLoading: false, // 主列表载入状态
  itemData: {}       // 当前详情数据
}

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  // 获取列表
  getList ({ commit, state }, searchKey) {
    commit(types.SET_LIST_LOADING, true)
    commit('base/SET_LOADING', 'start', { root: true })
    alertsCluster._getList(searchKey)
      .then(res => {
        commit(types.SET_LIST_DATA, res['data'])
        commit(types.SET_LIST_LOADING, false)
        commit('base/SET_LOADING', 'finish', { root: true })
      })
      .catch((error) => {
        console.log(error.msg)
        commit(types.SET_LIST_LOADING, false)
        commit('base/SET_LOADING', 'error', { root: true })
      })
  },
  // 获取单条记录,传id则请求api数据，不传则清空
  getItem ({ commit, state }, id) {
    commit('base/SET_LOADING', 'start', { root: true })
    if (id) {
      alertsCluster._get(id)
        .then(res => {
          commit(types.SET_ITEM_DATA, res['data'])
          commit('base/SET_LOADING', 'finish', { root: true })
        })
        .catch((error) => {
          console.log(error.msg)
          commit('base/SET_LOADING', 'error', { root: true })
        })
    } else {
      commit(types.SET_ITEM_DATA, {})
    }
  },
  // 更改页码
  listChangePage ({ dispatch, commit, state }, num) {
    commit(types.LIST_CHANGE_PAGE, num)
  }
}

// mutations
const mutations = {
  [types.SET_LIST_DATA] (state, savedata) {
    state.listData = savedata
  },
  [types.SET_ITEM_DATA] (state, savedata) {
    state.itemData = savedata
  },
  [types.SET_LIST_LOADING] (state, savedata) {
    state.listLoading = savedata
  },
  [types.LIST_CHANGE_PAGE] (state, savedata) {
    state.listPageNum = savedata
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
