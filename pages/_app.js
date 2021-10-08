
import { ExpenseContextProvider } from "./context/expense-context";

import '../styles/globals.css';

import Balance from './components/balance';
import Container from './components/container';
import IncExp from './components/incExp';
import Title from './components/title';
import AddTransaction from './components/addTransaction';
import HistoryList from './components/historyList';



const MyApp = () => {
  

  return (
    <Container>
      <Title />
      <ExpenseContextProvider>
      <Balance />
      <IncExp />
      <HistoryList />
      <AddTransaction />
      </ExpenseContextProvider>
    </Container>
  )
}

export default MyApp
