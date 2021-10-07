import React, {useState} from 'react';

import '../styles/globals.css';

import { Balance } from './components/balance';
import { Container } from './components/container';
import { IncExp } from './components/incExp';
import { Title } from './components/title';
import { AddTransaction } from './components/addTransaction';
import { HistoryList } from './components/historyList';



const MyApp = () => {
  const [expenseItemList, setExpenseItemList] = useState([]);

  
  const getFormData = (text, amount) => {
    setExpenseItemList( prevList => {
      return(
        [
          {
            expense : text,
            expenseAmount : amount,
            id: Date.now()
          },
          ...prevList
        ]
      )
    })
  }


  const removeItem = (id) => {
    console.log(id)
    setExpenseItemList( prevList => prevList.filter( item => item.id !== id) )
  }

  return (
    <Container>
      <Title />
      <Balance expenseList={expenseItemList}/>
      <IncExp expenseList={expenseItemList}/>
      <HistoryList itemList={expenseItemList} removeItem={removeItem}/>
      <AddTransaction sendFormData={getFormData}/>
    </Container>
  )
}

export default MyApp
