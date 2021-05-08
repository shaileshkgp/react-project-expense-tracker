import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

    let expensesContent = <p>No Expenses found!</p>;
    if (props.items.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No Expenses Found!</h2>
        )
    }

    return (
        <ul className='expenses-list'>
            {props.items.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
            ))}
        </ul>
    )
}

export default ExpensesList;