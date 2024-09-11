import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);
  const totalExpenses = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);
  const remainingMoney = income - totalExpenses;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total Dépenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} €</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Reste des dépenses</div>
        <div className={`col ${s.amount}`}>{remainingMoney} €</div>
      </div>
    </div>
  );
}
