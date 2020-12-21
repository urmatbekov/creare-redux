const createStore = (reduce) => {
    return {
        state: reduce(undefined, {}),
        dispatch(action) {
            this.state = reduce(this.state, action)
        },
        getDispatch() {
            return this.dispatch.bind(this)
        },
        getState() {
            return this.state
        }
    }
}

export default createStore;