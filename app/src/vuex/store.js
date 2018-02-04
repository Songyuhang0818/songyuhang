import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    bgColor:'red',
    title:'nnnnn'
}

const mutations = {
    change(state,bgColor){
        state.bgColor = bgColor;
    },
    titleChange(state,title){
        state.title = title;
    }
}
export default new Vuex.Store({
    state,
    mutations
})