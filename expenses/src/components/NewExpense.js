import React from "react";
const NewExpanse = () => {
  const AddNewExpenses = (e) => {
    e.preventDefault();
    const price = document.getElementById("amount").value;
    const item = document.getElementById("item").value;
    console.log(price, item);
  };
  return (
    <>
      <div className="w-2/4 m-auto">
        <h3 className="text-xl">Add New Expanses</h3>
        <div className="bg-yellow-400 h-2 w-20 mt-2 mb-5"></div>
        <form>
          <label>Enter Amount</label>
          <input
            id="item"
            type="text"
            className="my-5 h-10 rounded shadow-inner"
            placeholder="Add amount"
          ></input>
          <br />
          <label>Enter Amount</label>
          <input
            id="amount"
            type="text"
            className="my-5 h-10 rounded shadow-inner"
            placeholder="Add amount"
          ></input>
          <br />
          <button
            className="curor-pointer bg-blue-500 rounded p-1 hover:text-white "
            type="submit"
            onClick={AddNewExpenses}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default NewExpanse;
