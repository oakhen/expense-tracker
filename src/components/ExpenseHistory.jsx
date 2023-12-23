import { useContext } from "react"
import Card from "./Card"
import { expeneseContext } from "./store/store"

function ExpenseHistory() {
  const {
    state: { expenses },
  } = useContext(expeneseContext)

  return (
    <div className="expense-history">
      <h2>History</h2>
      <hr />

      <div className="expense-container">
        {expenses.map((expense, i) => (
          <Card key={i} expense={expense} />
        ))}
      </div>
    </div>
  )
}
export default ExpenseHistory
