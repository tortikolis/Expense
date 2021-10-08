import { ExpenseContext } from "../context/expense-context";
import { useContext } from "react";

const Balance = () => {

    const {state} = useContext(ExpenseContext);

    let total = 0.00;
    state.expenseList.forEach(expense => total += expense.expenseAmount);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Balance;