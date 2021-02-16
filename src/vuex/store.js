import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let stateLength = 0;

let store = new Vuex.Store({
    state: {
        items: [],
        allDataLoaded: false,
    },
    mutations: {
        SET_ITEMS_TO_STATE: (state, items) => {
            state.items = items;
        },
        ALL_DATA_LOADED: (state, allDataLoaded) => {
            state.allDataLoaded = allDataLoaded;
        }
    },
    actions: {
        GET_ITEMS_FROM_API({commit}) {
            return axios('http://localhost:3000/items', {
                method: "GET"
            })
            .then((items) => {
                let arr = [];
                for (let i=0; i <stateLength + 3; i++) {
                    arr.push(items.data[i]);
                }

                commit('SET_ITEMS_TO_STATE', arr);
                stateLength += 3;

                if (stateLength >= items.data.length) {
                    commit('ALL_DATA_LOADED', true);
                }
            })
            .catch((error) => {
                console.error(error);
                return error;
            })
        },
    },
    getters: {
        ITEMS(state) {
            return state.items;
        },
        DATA_LOADED(state) {
            return state.allDataLoaded
        }
    },
});

export default store;