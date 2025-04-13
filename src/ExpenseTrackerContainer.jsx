	
import { useState } from "react";

function ExpenseTrackerContainer({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [newExpense, setNewExpense] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

if (
  !newExpense.name ||
  !newExpense.description ||
  !newExpense.category ||
  !newExpense.amount ||
  !newExpense.date
)
  return;

setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
setNewExpense({
  name: "",
  description: "",
  category: "",
  amount: "",
  date: "",
});
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return children({
    expenses: filteredExpenses,
    newExpense,
    searchTerm,
    handleInputChange,
    handleSubmit,
    handleSearch,
  });
}

export default ExpenseTrackerContainer;




