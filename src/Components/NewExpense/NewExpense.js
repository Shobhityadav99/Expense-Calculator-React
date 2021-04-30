import React , {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpensedata) => {
        const expenseData ={
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const starteditingHandler = () => {
        setIsEditing(true);
    }
    const stopitingHandler = () => {
        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={starteditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopitingHandler}/>}
    </div>
}

export default NewExpense;