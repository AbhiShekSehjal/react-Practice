function Reducer(state, action) {

    if (action.type === "increment") {
        state += 1;
    }
    if (action.type === "decrement") {
        state -= 1;
    }
    return state
}

export default Reducer
