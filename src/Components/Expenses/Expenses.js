import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filtered = props.expenses.filter(exp => exp.date.getFullYear().toString() === filteredYear);

    let expensesContent = <p>No Expenses Found.</p>;
    if(filtered.length > 0){
        expensesContent=filtered.map(expense =>
            <ExpenseItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)}
    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
    </Card>
}

export default Expenses;