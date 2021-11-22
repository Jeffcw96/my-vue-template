import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'

Vue.use(Vuex)

export default function store(http) {
    return new Vuex.Store({
        modules: {
            demo: demo(http),
        }
    })
}