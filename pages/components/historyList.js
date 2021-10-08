import HistoryItem from "./historyItem";
import { ExpenseContext } from "../context/expense-context";
import { Fragment, useContext } from "react";


export const HistoryList = (props) => {
    const {state} = useContext(ExpenseContext);
    const itemList = state.expenseList;
    return(
        <Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                {itemList.map( item => <HistoryItem text={item.expense} amount={item.expenseAmount} id={item.id} key={item.id}/>)}
           </ul> 
        </Fragment>
    )
}

export default HistoryList;