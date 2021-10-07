
import { useState } from "react";


export const AddTransaction = (props) => {
    const [textInput, setTextInput] = useState("");
    const [amountInput, setAmountInput] = useState("");

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
        props.sendFormData(textInput, amountInput); 
        clearDataFromInputs();
    }
    //console.log(textInput)
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
            <button onClick={handleSubmit} className="btn">Add transaction</button>
            </form>
        </div>
    )
}