// // import React from "react";
// import AdminSpmsMainLayout from "../../layouts/admin-spms/main.layout";
// import CashierMachine from "components/admin-spms/cashiermachine";
// import React, { useState } from "react";
// import { groupBy } from "lodash";
// const TransactionInfo = ({ transaction }) => {
//   return (
//     <div className="transaction-info-wrapper">
//       <div className="outer-box">
//         {transaction.icon}
//         <div className="bursar-wrapper">
//           <div className="left-side">
//             <div className="person">
//               <h1>{transaction.name}</h1>
//               <p>{transaction.balance}</p>
//             </div>
//           </div>

//           <div className="right-side">
//             <span>{transaction.amount1}</span>
//             <p>{transaction.amount2}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function Admin18new() {
//   const [showSidebar, setShowSidebar] = useState(true);

//   const transactionList = [
//     {
//       icon: <CashierMachine />,
//       name: "Bursar1",
//       amount1: "20,000,000 Tshs",
//       balance: "Added balance",
//       type: "credit",
//       amount2: "39,000 Tshs",
//       date: "Yesterday",
//     },
//     {
//       icon: <CashierMachine />,
//       name: "Shopper 3",
//       amount1: "32,000,000 Tshs",
//       balance: "Added balance",
//       type: "credit",
//       amount2: "3,000 Tshs",
//       date: "Yesterday",
//     },
//     {
//       icon: <CashierMachine />,
//       name: "Bursar 3",
//       amount1: "32,000,000 Tshs",
//       balance: "Withdraw balance",
//       type: "debit",
//       amount2: "3,000 Tshs",
//       date: "23 March 21",
//     },
//     {
//       icon: <CashierMachine />,
//       name: "Shopper 1",
//       amount1: "20,000,000 Tshs",
//       balance: "Added balance",
//       amount2: "39,000 Tshs",
//       date: "23 March 21",
//     },
//     {
//       icon: <CashierMachine />,
//       name: "Bursar 2",
//       amount1: "32,000,000 Tshs",
//       balance: "Withdraw balance",
//       amount2: "3,000 Tshs",
//       date: "23 March 21",
//     },
//     {
//       icon: <CashierMachine />,
//       name: "Bursar 4",
//       amount1: "20,000,000 Tshs",
//       balance: "Withdraw balance",
//       amount2: "39,000 Tshs",
//       date: "23 March 21",
//     },
//     {
//       icon: <CashierMachine />,
//       name: "Bursar 1",
//       amount1: "20,000,000 Tshs",
//       balance: "Added balance",
//       amount2: "39,000 Tshs",
//       date: "23 March 21",
//     },
//     {
//       icon: <CashierMachine />,
//       name: "Bursar 2",
//       amount1: "20,000,000 Tshs",
//       balance: "Withdraw balance",
//       amount2: "39,000 Tshs",
//       date: "22 March 21",
//     },
//   ];

//   const txGroup = groupBy(transactionList, "date");
//   // // const txGroupArray =
//   // // debugger;

//   return (
//     <AdminSpmsMainLayout>
//       <div className="innermain-content">
//         <div className="all-activiry">
//           <div className="inner-allactivity">
//             <div className="activity">All Activity</div>

//             {Object.keys(txGroup).map((txKey, index) => {
//               return (
//                 <div className="tx-group-by-date">
//                   <div className="date"> {txKey}</div>
//                   {txGroup[txKey].map((t, index) => {
//                     return (
//                       <TransactionInfo
//                         transaction={t}
//                         key={`ti-${index.toString()}`}
//                       />
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="right-side-of-content">
//           <div className="graph">
//             <div className="graph1">
//               <div className="totalIncome">Total Income</div>
//               <div className="totalOutcome">Total Outcome</div>
//               <div className="totalSave">Total Save</div>
//             </div>
//             <div className="graph2">
//               <div className="totalIncome-amount">34,000,000 Tshs</div>
//               <div className="totalOutcome-amount">30,000,000 Tshs</div>
//               <div className="totalSave-amount">4,000,000 Tshs</div>
//             </div>
//           </div>
//           <div className="balance-box">
//             <div className="balance">Balance</div>
//             <div className="box1">
//               <div className="debit">Debit</div>
//               <div className="debit-amount">23,983,900 TZS</div>
//             </div>
//             <div className="box2">
//               <div className="credit">Credit</div>
//               <div className="credit-amount">43,900 TZS</div>
//             </div>
//             <div className="view-all-account">View All Account</div>
//           </div>
//         </div>
//       </div>
//     </AdminSpmsMainLayout>
//   );
// }

// export default Admin18new;
