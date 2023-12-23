import { createContext, useReducer } from "react"

const expenseContext = createContext(null)

const initialState = {
  expenses: [],
}

const expenseReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    }
  }
  return state
}

export const addExpense = (expense) => {
  dispatch({
    type: "ADD_EXPENSE",
    payload: expense,
  })
}

function ExpenseContext({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState)

  return (
    <expenseContext.Provider
      value={{
        state,
        addExpense,
      }}
    >
      {children}
    </expenseContext.Provider>
  )
}

// export default ExpenseContext

// react apne aap me bohot bada hai or hum isko pata nai kyun bhul bhul jaa rahe hai. to isko pakad ke rakna hai.
