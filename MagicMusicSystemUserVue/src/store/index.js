/*
 * @Description: 
 * @Author: 
 * @Date: 2024-03-16 01:26:34
 */
import Vue from 'vue'
import Vuex from 'vuex'
import configure from './configure'
import user from './user'
import song from './song'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        configure,
        user,
        song
    }
})

export default store