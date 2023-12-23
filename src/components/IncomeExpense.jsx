function IncomeExpense({ income }) {
  return (
    <div className="income-container">
      <div className="income-expense">
        <div className="income">
          <h2>INCOME</h2>
          <h2 className="money plus">${income.gain}</h2>
        </div>
        <div className="bar"></div>
        <div className="expense">
          <h2>EXPENSE</h2>
          <h2 className="money minus">${income.loss}</h2>
        </div>
      </div>
    </div>
  )
}
export default IncomeExpense
