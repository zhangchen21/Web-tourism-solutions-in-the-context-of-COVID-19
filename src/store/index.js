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
        if(value == "false") state.currentUser = ""
    },
    ChangeIfHomeIsCity(state, value) {
        state.ifHomeIsCity = value;
    },
    AddUser(state, value) {
        state.currentUser = value;
    }
}
const state = {
    isLoginFlag : "false",
    ifHomeIsCity : false,
    currentUser: ""
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})