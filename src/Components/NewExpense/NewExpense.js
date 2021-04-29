import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpensedata) => {
        const expenseData ={
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        console.log(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;