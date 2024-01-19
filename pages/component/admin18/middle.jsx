import React from "react";
import Ellipse from "./ellipse";
import CashierMachine from "./cashiermachine";
import Shope from "./shope";
import RightSide from "./rightside";
function Middle() {
  return (
    <div className="middlepage">
      <div className="mupper">
        <div className="getstarted">Get started with Spms, St Joseph</div>
        <div className="reportoverview">
          Here's your report overview by today.
        </div>

        <div className="mlower">
          <div className="AllActivitypage">
            <div className="contentbox1">
            <div className="left1">
            <div className="AllActivity">All Activity</div>
            <div className="Yesterday">Yesterday</div>
            </div>
            <div className="right1">
          <Ellipse/>
           
            </div>
            </div>
            <div className="contentbox2">
           <CashierMachine/>
            <div className="left2">
            <div className="Bursar1">Bursar 1</div>
            <div className="Addedbalance">Added balance</div>
            </div>
            
            <div className="right2">
            <div className="Tshs1">20,000,000 Tshs</div> 
           <div className="Tshs2">39,000 Tshs</div> 
            </div> 
            </div>

            <div className="contentbox3">
            <Shope/>
            <div className="left3">
            <div className=" Shopper"> Shopper 3</div>
            <div className="Addedbalance">Added balance</div> 
            </div>

            <div className=" right3">
            <div className="Tshs1">32,000,000 Tshs</div> 
           <div className="Tshs2">3,000 Tshs</div> 
            </div>
            </div>
<hr/>
            <div className="March23">23 March 21</div>
            <div className="contentbox4">
           <CashierMachine/>
           <div className="left4">
           <div className="Bursar1">Bursar 3</div>
           <div className="Addedbalance">Withdraw balance</div>
           </div>
           
           <div className="right4">
           <div className="Tshs1">20,000,000 Tshs</div> 
          <div className="Tshs2">39,000 Tshs</div> 
           </div> 
           </div>
           
           <div className="contentbox5">
           <CashierMachine/>
            <div className="left5">
            <div className="Bursar1">Shopper 1</div>
            <div className="Addedbalance">Added balance</div>
            </div>
            
            <div className="right5">
            <div className="Tshs1">20,000,000 Tshs</div> 
           <div className="Tshs2">39,000 Tshs</div> 
            </div> 
            </div>

            <div className="contentbox6">
           <CashierMachine/>
            <div className="left6">
            <div className="Bursar1">Bursar 2</div>
            <div className="Addedbalance">Withdraw balance</div>
            </div>
            
            <div className="right6">
            <div className="Tshs1">20,000,000 Tshs</div> 
           <div className="Tshs2">39,000 Tshs</div> 
            </div> 
            </div>

            <div className="contentbox7">
           <CashierMachine/>
            <div className="left7">
            <div className="Bursar1">Bursar 4</div>
            <div className="Addedbalance">Withdraw balance</div>
            </div>
            
            <div className="right7">
            <div className="Tshs1">20,000,000 Tshs</div> 
           <div className="Tshs2">39,000 Tshs</div> 
            </div> 
            </div>

            <div className="contentbox8">
           <CashierMachine/>
            <div className="left8">
            <div className="Bursar1">Bursar 1</div>
            <div className="Addedbalance">Added balance</div>
            </div>
            
            <div className="right8">
            <div className="Tshs1">20,000,000 Tshs</div> 
           <div className="Tshs2">39,000 Tshs</div> 
            </div> 
            </div>
            <hr/>
         <div className="March22">22 March 21</div>
            <div className="contentbox9">
           <CashierMachine/>
            <div className="left9">
            <div className="Bursar1">Bursar 2</div>
            <div className="Addedbalance">Withdraw balance</div>
            </div>
            
            <div className="right9">
            <div className="Tshs1">20,000,000 Tshs</div> 
           <div className="Tshs2">39,000 Tshs</div> 
            </div> 
            </div>

          </div>
        </div>
      </div>
      <RightSide></RightSide>
    </div>
  );
}

export default Middle;
