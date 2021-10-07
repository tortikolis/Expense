import { HistoryItem } from "./historyItem";
import { Fragment } from "react";

export const HistoryList = ({removeItem, itemList}) => {

    return(
        <Fragment>
            <h3>History</h3>
            <ul id="list" className="list">
                {itemList.map( item => <HistoryItem removeItem={removeItem} text={item.expense} amount={item.expenseAmount} id={item.id} key={item.id}/>)}
           </ul> 
        </Fragment>
    )
}