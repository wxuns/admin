// import Vue from 'vue'
import Axios from 'axios'
const state = {
  user: null,
  isLogin: false
}

const actions = {
  async login ({commit}, user) {
    commit('SET_DOING_LOGIN', true)
    // 模拟登陆
    var res = await new Promise((resolve, reject) => {
      user.nickName = user.rolename
      sessionStorage.setItem('user', JSON.stringify(user))
      setTimeout(() => {
        resolve({bool: true, user})
      }, 2000)
    })
    commit('SET_LOGIN_USER', user)
    commit('SET_LOGIN_TOKEN', user.token)
    commit('SET_DOING_LOGIN', false)
    return res
  },
  async getLoginUser ({commit}) {
    // 模拟请求用户信息
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var user = sessionStorage.getItem('user')
        // console.log(JSON.parse(user))
        commit('SET_LOGIN_USER', JSON.parse(user))
        resolve({bool: true, user})
      }, 1000)
    })
  },
  async logout ({commit}) {
    // 模拟退出
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('token')
        commit('SET_LOGIN_USER', null)
        resolve({bool: true})
      }, 2000)
    })
  }
}

const mutations = {
  SET_DOING_LOGIN (state, isLogin) {
    state.isLogin = isLogin
  },
  SET_LOGIN_USER (state, user) {
    state.user = user
  },
  SET_LOGIN_TOKEN (state, token) {
    if (token) {
      sessionStorage.setItem('token', token)
    } else {
      sessionStorage.removeItem('token')
    }
  }
}

export default {
  state,
  actions,
  mutations
}
