import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'
import './Expense.css'
import Card from '../UI/Card'

const Expense = (props) => {
    const [filteredYead, setFilteredYead] = useState('2020');

    const filterChangeHandler = selectedYead => {
        setFilteredYead(selectedYead);
    };

    const filteredExpenses = props.expens.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYead;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYead} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expense;