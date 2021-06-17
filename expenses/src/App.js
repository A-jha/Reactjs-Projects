import React from "react";
import Header from "./components/Header";
import Expense from "./components/Expense";
import History from "./components/History";
import NewExpanse from "./components/NewExpense";
export default function MyApp() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Expense />
        <History />
        <NewExpanse />
      </div>
    </>
  );
}
