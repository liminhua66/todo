import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: JSON.parse(localStorage.getItem("todolist")) || [],
        isSel: 'all',
    },
    mutations: {
        ADDTODO(state, payload) {
            state.todoList.unshift(payload)
            localStorage.setItem("todolist", JSON.stringify(state.todoList));
        },
        TOGGLETODO(state, id) {
            state.todoList.map(val => {
                if (val.id === id) {
                    val.isDone = !val.isDone
                    return val
                } else {
                    return val
                }
            })
            localStorage.setItem("todolist", JSON.stringify(state.todoList));
        },
        DELTODO(state, id) {
            const index = state.todoList.findIndex(ele => ele.id === id)
            state.todoList.splice(index, 1)
            localStorage.setItem("todolist", JSON.stringify(state.todoList));
        },
        CHANGELIST(state, str) {
            state.isSel = str
        },
        CLEARDONE(state) {
            state.todoList.filter(item => !item.isDone)
            localStorage.setItem("todolist", JSON.stringify(state.todoList));
        },
        ISALL(state,payload) {
            state.todoList.forEach(item => item.isDone = payload)
            localStorage.setItem("todolist", JSON.stringify(state.todoList));
        }
    },
    actions: {},
    getters: {
        filterList(state) {
            if (state.isSel === 'all') {
                return state.todoList
            } else if (state.isSel === 'yes') {
                return state.todoList.filter(item => item.isDone)
            } else {
                return state.todoList.filter(item => !item.isDone)
            }
        }
    },
    modules: {}
})