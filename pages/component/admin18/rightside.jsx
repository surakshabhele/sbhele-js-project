import React from "react";
import Search from "./search";
import Graph from "./graph";

function RightSide() {
  return (
    <div className="rightsideofpage">
      <div className=" Searchbox">
        <div className="Searchiconclass">
          <Search />
        </div>
        <form>
          <input type="text" placeholder="Search"></input>
        </form>
      </div>
      <div className="AnalyticReportspage">
        <div className="graph">
          <div className="graph1">Analytic Reports</div>
          <Graph />
          <div className="graph2">
            <div className="Total">
              <div className="TotalIncome"> Total Income </div>
              <div className="TotalOutcome"> Total Outcome </div>
              <div className="TotalSave"> Total Save </div>
            </div>
            <div className="No">
              <div className="No1">34,000,000 Tshs</div>
              <div className="No2">30,000,000 Tshs</div>
              <div className="No3">4,000,000 Tshs</div>
            </div>
          </div>
        </div>
        <div className="leftend">
          <div className="Balance">Balance</div>
          <div className="Debitbox">
            <div className="Debit">Debit</div>
            <div className="DebitNo">23,983,900 TZS</div>
          </div>
          <div className="Creditbox">
            <div className="Credit">Credit</div>
            <div className="CreditNo">43,900 TZS</div>
          </div>
          <hr />
          <div className="ViewAllAccount">View All Account</div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
