import React, { useEffect, useState } from "react";
import Table from "./Table";
import "./Customers.css";

const Customers = () => {
  const users = [
    {
      userId: "1",
      name: "Sam",
      transactions: [100, 20, 30],
    },
    {
      userId: "2",
      name: "Jude",
      transactions: [200, 30],
    },
    {
      userId: "3",
      name: "Rooney",
      transactions: [10, 20, 20, 10],
    },
  ];

  const [currUser, setCurrUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const handleCustomer = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    let id = e.currentTarget.id;
    const user = users.find((user) => user.userId === id);
    setCurrUser(user);
    setUserId(e.currentTarget.id);
  };

  const handleAddTransaction = (newTransaction) => {
    if (newTransaction != null || newTransaction != null) {
      const user = { ...currUser };
      const tempTransactions = [...user.transactions];
      tempTransactions.push(parseInt(newTransaction));
      user.transactions = tempTransactions;
      setCurrUser(user);
    }
  };

  const showDropdown = () => {
    return (
      <div class="dropdown customers">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Customer
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" id="1" onClick={handleCustomer} href="">
              Sam
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="2" onClick={handleCustomer} href="">
              Jude
            </a>
          </li>
          <li>
            <a class="dropdown-item" id="3" onClick={handleCustomer} href="">
              Rooney
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {showDropdown()}
      <Table
        key={userId}
        currUser={currUser}
        onAddTransaction={handleAddTransaction}
      />
    </>
  );
};

export default Customers;
