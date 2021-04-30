import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import './ExpenseFilter.css';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expensedata = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expensedata);
        setenteredAmount('');
        setenteredDate('');
        setenteredTitle('');
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <ExpensesFilter />
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className="new-expense__control">
                <label>Amout</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;