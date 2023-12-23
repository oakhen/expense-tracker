function Card({ expense }) {
  return (
    <div
      className="card"
      style={{
        borderRight: `4px solid ${expense.amount < 0 ? "red" : "green"}`,
      }}
    >
      <p>{expense.text}</p>
      <p>
        {expense.amount < 0 ? "-" : ""} ${Math.abs(expense.amount)}
      </p>
    </div>
  )
}
export default Card
