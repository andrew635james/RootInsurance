import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense Added: ${expense}`);
    setExpense('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Enter expense"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
