import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // Vue plugin 추가 : global functionality

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    arr.push(item);
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, index) {
            const item = state.todoItems[index];
            localStorage.removeItem(item.item);
            state.todoItems.splice(index, 1);
        },
        toggleOneItem(state, index) {
            const item = state.todoItems[index];
            item.completed = !item.completed
            localStorage.setItem(item.item, JSON.stringify(item))
        },
        removeAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    },
    actions: {
        // fetchTodoItems(context) {
        //     context.commit()
        // }
    }
});
