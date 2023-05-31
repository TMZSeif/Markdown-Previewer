import { configureStore } from '@reduxjs/toolkit'
const ADD = "ADD";

const addInput = input => ({
    type: ADD,
    input: input
});

const inputReducer = (state='', action) => {
    switch(action.type) {
        case ADD:
            return action.input;
        default:
            return state;
    }
}

export const mapStateToProps = state => ({
    input: state
});

export const mapDispatchToProps = dispatch => ({
    addInput: input => dispatch(addInput(input))
})

const store = configureStore({reducer: inputReducer})

export default store