import Vue from 'vue'

//http will be the properties where we pass our axios in main.js
export default function demo(http) {
    const state = {
        user: {},
        isLoaded: false
    }

    const getters = {
        getUser(state) {
            return state.user
        },

        getIsLoaded(state) {
            return state.isLoaded
        }
    }

    const mutations = {
        //Add or update object via Vue.set method
        updateUser(state, { fieldName, value }) {
            Vue.set(state.user, fieldName, value)
        },

        updateIsLoaded(state, value) {
            if (typeof (value) !== 'boolean')
                return
            state.isLoaded = value
        }
    }

    const actions = {
        // can destructure other methods like commit, dispatch, state, getters, rootgetters, 
        updateUser({ commit }, payload = { fieldName: null, value: null }) {
            if (!payload.fieldname || !payload.value)
                return

            commit("updateUser", payload)

            //Below is the example when you want to access dispatch from other module
            //dispatch('ModuleNamme/dispatchFunctionName', {root:true})
        },

        updateIsLoaded({ commit }, payload = { isLoaded: null }) {
            if (!payload.isLoaded)
                return

            commit("updateIsLoaded", payload.isLoaded)
        }
    }

    return {
        namespaced: true,
        state,
        getters,
        mutations,
        actions
    }
}