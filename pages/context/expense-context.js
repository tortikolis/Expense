import React, {createContext, useReducer} from 'react';

const initialState = {
    expenseList: []
};

export const ExpenseContext = createContext(initialState);

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
         return {
            ...state,
            expenseList: [action.payload, ...state.expenseList]
         };
         case "REMOVE_EXPENSE":
             return {
                 ...state,
                 expenseList: state.expenseList.filter(expense => expense.id !== action.payload)
             }
         default:
             return state;
    }
}

export const ExpenseContextProvider = props => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return(
        <ExpenseContext.Provider value={{state,dispatch}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}