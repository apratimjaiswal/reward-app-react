import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = ({ currUser, onAddTransaction }) => {
  const [reward, setReward] = useState(null);
  const [newTransaction, setNewTransaction] = useState();
  useEffect(() => {}, []);
  const showTable = () => {
    const { transactions } = currUser;
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Transactions</th>
              <th scope="col">Amount $</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={currUser.userId}>
                <th scope="row">Transaction</th>
                <td>{t} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const calculateReward = () => {
    if (currUser == null || currUser == null) return;
    let trs = currUser.transactions,
      sum = 0,
      reward = 0;
    for (let i = 0; i < trs.length; i++) {
      sum = sum + trs[i];
    }
    if (sum > 100) {
      reward = (sum - 100) * 2 + 50;
    } else if (sum > 50) {
      reward = sum - 50;
    }
    setReward(reward);
  };

  const updateNewTransaction = (e) => {
    setNewTransaction(e.target.value);
  };

  return (
    <div className="table">
      {currUser && <h1>Table - {currUser?.name || "Not loaded yet"}</h1>}
      {currUser && showTable()}
      <input
        value={newTransaction}
        onChange={updateNewTransaction}
        class="form-control form-control-lg table__btn"
        type="number"
        placeholder="Enter Transaction"
        aria-label=".form-control-lg example"
      />
      <button
        className="btn btn-primary table__btn"
        onClick={() => onAddTransaction(newTransaction)}
      >
        Add Transaction
      </button>
      <button className="btn btn-primary table__btn" onClick={calculateReward}>
        Calculate Reward
      </button>
      {reward && <h1>Reward is ${reward}</h1>}
    </div>
  );
};

export default Table;
