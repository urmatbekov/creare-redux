import React, {Component} from 'react';
import {connect} from "../redux/react-redux";

class App extends Component {
    render() {
        return (
            <div>

                <button onClick={this.props.addNumber}>+</button>
                {this.props.number}
                <button onClick={this.props.minusNumber}>-</button>
                <p>
                    modal
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapActionToProps = (dispatch) => {
    return {
        addNumber: () => {
            dispatch({type: "add"})
        },
        minusNumber: () => {
            dispatch({type: "minus"})
        },
    }
}

export default connect(mapStateToProps, mapActionToProps)(App);