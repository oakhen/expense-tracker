import Header from "./components/Header"
import "./App.css"
import IncomeExpense from "./components/IncomeExpense"
import ExpenseHistory from "./components/ExpenseHistory"
import AddNewTransaction from "./components/AddNewTransaction"
import { useContext } from "react"
import { expeneseContext } from "./components/store/store"

const totalIncome = (arr) => {
  let income = {
    gain: 0,
    loss: 0,
  }

  if (arr.length > 0) {
    arr.reduce((acc, ci) => {
      if (ci.amount < 0) {
        acc += Math.abs(ci.amount)
      }
      income.loss = acc
      return acc
    }, 0)

    arr.reduce((acc, ci) => {
      if (ci.amount > 0) {
        acc += ci.amount
      }
      income.gain = acc
      return acc
    }, 0)
  }

  return income
}

function App() {
  const {
    state: { expenses },
  } = useContext(expeneseContext)
  const total = expenses.reduce((acc, item) => (acc += item.amount), 0) || 0

  console.log(totalIncome(expenses))
  return (
    <div className="app">
      <Header />
      <div className="balance">
        <h3>Your Balance</h3>
        <h1>${total}</h1>
      </div>
      <IncomeExpense income={totalIncome(expenses)} />

      <ExpenseHistory />
      <AddNewTransaction />
    </div>
  )
}
export default App
