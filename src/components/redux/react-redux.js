import React, {useState} from "react"
import {ReduxProvider, ReduxConsumer} from "./provider";

const Provider = ({store, children}) => {
    const [state, setState] = useState(store.getState())

    const dispatch = (action) => {
        store.dispatch(action)
        setState(store.getState())
    }

    return (
        <ReduxProvider value={{state, dispatch}}>
            {children}
        </ReduxProvider>
    )
}

const connect = (mapStateToProps = () => ({}), mapActionsToProps = () => ({})) => (Component) => (props) => {
    return (
        <ReduxConsumer>
            {
                ({state, dispatch}) => {
                    const propsState = mapStateToProps(state, props)
                    const propsActions = mapActionsToProps(dispatch, props)
                    return <Component {...propsActions} {...propsState} {...props}/>
                }
            }
        </ReduxConsumer>
    )
}

export {Provider,connect};