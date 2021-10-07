import React from 'react';

export const Balance = ({expenseList}) => {
    let total = 0.00;
    expenseList.forEach(expense => total += expense.expenseAmount);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}