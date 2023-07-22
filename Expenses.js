import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState(2019);
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() == year); // added this line that filters our expenses
  const chooseYearHandler = (chosenYear) => {
    setYear(chosenYear);
  }
  console.log(year);
  return (
    <div>
      <Card className={'expenses'}>
        <ExpensesFilter selectedYear={year} onChooseYear={chooseYearHandler}/>

        {
          filteredExpenses.map(expense => // here we use map on the already filtered expenses
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}/>
          )
        }
      </Card>
    </div>
  );
}
export default Expenses;
