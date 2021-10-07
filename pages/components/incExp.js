
export const IncExp = ({expenseList}) => {
   
        let income = 0.00;
        let expense = 0.00;
        expenseList.forEach(item => {
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