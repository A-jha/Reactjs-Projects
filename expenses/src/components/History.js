import React from "react";
const History = () => {
  const data = [
    { id: 1, name: "Cold drink", price: 25 },
    { id: 2, name: "Maggie", price: 55 },
    { id: 3, name: "Pasta", price: 10 },
  ];
  const listOfExpense = data.map((item) => (
    <li key={item.id} className="flex space-betweencard p-3 my-5  shadow-inner">
      <span className="flex-1">{item.name}</span>{" "}
      <span className="flex-1"> ${item.price}</span>
    </li>
  ));

  return (
    <>
      <div className="w-2/4 text-center m-auto">
        <h3 className="text-left text-2xl">History</h3>
        <ul>{listOfExpense}</ul>
      </div>
    </>
  );
};

export default History;
