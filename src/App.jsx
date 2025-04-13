
import ExpenseTrackerContainer from "./ExpenseTrackerContainer";
import "./index.css";

function App() {
  return (
    <ExpenseTrackerContainer>
      {({
        expenses,
        newExpense,
        searchTerm,
        handleInputChange,
        handleSubmit,
        handleSearch,
      }) => (
        <div className="container">
          <h1>Expense Tracker</h1>

      
      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={newExpense.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newExpense.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newExpense.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newExpense.date}
          onChange={handleInputChange}
        />
        <button type="submit">Add Expense</button>
      </form>

      
      <input
        type="text"
        placeholder="Search by name or description..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      
      <table className="expense-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )}
</ExpenseTrackerContainer>
  );
}

export default App;

