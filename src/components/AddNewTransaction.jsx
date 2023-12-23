import { useContext, useState } from "react"
import { expeneseContext } from "./store/store"

function AddNewTransaction() {
  const [text, settext] = useState("")
  const [amount, setamount] = useState("")

  const {
    state: { expenses },
    addExpense,
  } = useContext(expeneseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addExpense({ text, amount: +amount })
    console.log(expenses)
    settext("")
    setamount("")
  }
  return (
    <div className="transaction">
      <h2>Add New Transaction</h2>
      <hr />
      <form className="transtion-form" onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Enter Text..."
          value={text}
          onChange={(e) => settext(e.target.value)}
        />

        <label htmlFor="amount">
          Amount <br />( negative - expense, positive - income )
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Enter Amount..."
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  )
}
export default AddNewTransaction
