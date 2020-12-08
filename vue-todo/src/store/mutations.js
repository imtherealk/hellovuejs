const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
};

const removeOneItem = (state, index) => {
    const item = state.todoItems[index];
    localStorage.removeItem(item.item);
    state.todoItems.splice(index, 1);
};

const toggleOneItem = (state, index) => {
    const item = state.todoItems[index];
    item.completed = !item.completed;
    localStorage.setItem(item.item, JSON.stringify(item));
};

const removeAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
};

export {
    addOneItem,
    removeOneItem,
    toggleOneItem,
    removeAllItems
}