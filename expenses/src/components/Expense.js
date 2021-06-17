import React, { useState } from "react";
const Expense = () => {
  const [expense, setExpense] = useState(100);
  return (
    <>
      <div className="text-center my-5 p-3 card shadow-inner w-2/4 mx-auto">
        <h3 className="text-2xl">Total expanses</h3>
        <h3>
          $<span className="text-xl text-blue-800">{expense}</span>
        </h3>
      </div>
    </>
  );
};

export default Expense;
