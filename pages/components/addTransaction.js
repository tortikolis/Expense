import { useState, useContext } from "react";
import { ExpenseContext } from "../context/expense-context";


const AddTransaction = () => {
    const [textInput, setTextInput] = useState("");
    const [amountInput, setAmountInput] = useState("");

    const { dispatch} = useContext(ExpenseContext);


    const handleTextInput = (e) => {
        e.preventDefault();
        setTextInput(e.target.value);
    }

    const handleAmountInput = (e) => {
        e.preventDefault();
        const amountFloat = parseFloat(e.target.value);
        setAmountInput(amountFloat);
    }

    const clearDataFromInputs = () => {

        setTextInput("");
        setAmountInput("");
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch({
            type: "ADD_EXPENSE",
            payload: {
                expense: textInput,
                expenseAmount: isNaN(parseInt(amountInput)) ? 0 : parseInt(amountInput),
                id: Date.now()
            }
        }) 
        clearDataFromInputs();
    }
    
    return(
        
        <div>
            <h3>Add new transaction</h3>
            <form id="form">
        <       div className="form-control">
                <label htmlFor="text">Text</label>
                <input value={textInput} onChange={handleTextInput} type="text" id="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount" >Amount <br /> (negative - expense, positive - income) </label>
                <input value={amountInput} onChange={handleAmountInput} type="number" id="amount" placeholder="Enter amount..." />
            </div>
            <button onClick={handleSubmit} disabled={amountInput === ""} className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;