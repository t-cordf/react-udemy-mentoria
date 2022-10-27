import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card'

const Expense = (props) => {
    const [filteredYead, setFilteredYead] = useState('2020');

    const filterChangeHandler = selectedYead => {
        console.log('Expenses.js');
        setFilteredYead(selectedYead);
    };

    const filteredExpenses = props.expens.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYead;
    })

    return (
        <div>
            
            <Card className="expenses">
                <ExpenseFilter selected={filteredYead} onChangeFilter={filterChangeHandler} />

                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expense;