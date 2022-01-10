import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建store
const actions = {
    changeIfLogin(context, value) {
        context.commit('ChangeIfLogin', value)
    }
}
const mutations = {
    ChangeIfLogin(state, value) {
        state.isLoginFlag = value;
    },
    ChangeIfHomeIsCity(state, value) {
        state.ifHomeIsCity = value;
    }
}
const state = {
    isLoginFlag : "false",
    ifHomeIsCity : "home"
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})