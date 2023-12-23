import { createContext, useReducer } from "react"

export const expeneseContext = createContext(null)

const initialState = {
  expenses: [],
  gain: 0,
  loss: 0,
}

const expenseReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    const {
      payload: { amount },
    } = action
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      gain: amount > 0 ? state.gain + amount : state.gain,
      loss: amount < 0 ? state.loss + Math.abs(amount) : state.loss,
    }
  }
  return state
}

function ExenseContext({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState)
  const addExpense = (expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    })
  }

  const inconme = () => {}
  return (
    <expeneseContext.Provider
      value={{
        addExpense,
        state,
      }}
    >
      {children}
    </expeneseContext.Provider>
  )
}
export default ExenseContext
