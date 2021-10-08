import { ExpenseContext } from "../context/expense-context";
import { useContext } from "react";

const IncExp = () => {
        const {state} = useContext(ExpenseContext);
   
        let income = 0.00;
        let expense = 0.00;
        state.expenseList.forEach(item => {
          if(item.expenseAmount > 0) income += item.expenseAmount;
          if(item.expenseAmount < 0) expense += item.expenseAmount;
        })
      

    return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
      </div>

    )
}

export default IncExp;