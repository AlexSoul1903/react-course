import './ExpenseDate.css';
import ExpenseItem from './ExpenseItem';

function ExpenseObjects(props) {

    if (!props.expenses || props.expenses.length === 0) {
        return <p > No hay gastos disponibles. < /p>;
    }

    return (

        <
        div className = 'expenses' >

        <
        ExpenseItem title = { props.expenses[0].title }
        amount = { props.expenses[0].amount }
        date = { props.expenses[0].date } > < /ExpenseItem> <
        ExpenseItem title = { props.expenses[1].title }
        amount = { props.expenses[1].amount }
        date = { props.expenses[1].date } > < /ExpenseItem> <
        ExpenseItem title = { props.expenses[2].title }
        amount = { props.expenses[2].amount }
        date = { props.expenses[2].date } > < /ExpenseItem> <
        ExpenseItem title = { props.expenses[3].title }
        amount = { props.expenses[3].amount }
        date = { props.expenses[3].date } > < /ExpenseItem>

        <
        /div>

    );

}

export default ExpenseObjects;