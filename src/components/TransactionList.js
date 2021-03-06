import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 id="txnHistoryLabel">History</h3>
      <ul id="txnHistoryList" className="list">
        {transactions.map((trx) => (
          <Transaction transaction={trx} key={trx.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
