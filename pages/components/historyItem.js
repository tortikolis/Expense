import { ExpenseContext } from "../context/expense-context";
import { useContext } from "react";

const HistoryItem = ({ text, amount, id}) => {
    const {dispatch} = useContext(ExpenseContext);

    const handleRemovingItem = (e) => {
        dispatch({type: "REMOVE_EXPENSE", payload: id})
    }

    const liClass = amount > -1 ? "plus" : "minus";
    return(      
        
        <li className={liClass} id={id}>
            {text} <span>{amount}$</span><button onClick={handleRemovingItem} className="delete-btn">x</button>
        </li>  
 

    )
}

export default HistoryItem;