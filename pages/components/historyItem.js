
export const HistoryItem = ({ removeItem, text, amount, id}) => {

    const handleRemovingItem = (e) => {
        console.log(e.target)
        removeItem(id)
    }

    const liClass = amount > -1 ? "plus" : "minus";
    return(      
        
        <li className={liClass} id={id}>
            {text} <span>{amount}$</span><button onClick={handleRemovingItem} className="delete-btn">x</button>
        </li>  
 

    )
}