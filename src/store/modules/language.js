export default function demo() {
    const state = {
        language: "EN"
    }

    const getters = {
        getLanguage(state) {
            return state.language
        }
    }

    const mutations = {
        updateLanguage(state, value) {
            state.language = value
        }
    }

    const actions = {
        updateLanguage({ commit }, payload = { language: "EN" }) {
            commit("updateLanguage", payload.language)
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