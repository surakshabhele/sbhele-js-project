import React from "react";
import Forword from "../admin18/forword";
import Wallet from "../admin18/wallet";
import Search from "../admin18/search";

function Header() {
//   const [showSidebar, setShowSidebar] = useState(true);
  return (
    <header>
      <div className="sidebar-btn-section">
        <button className="SchoolAccountinnerbox">
          {/* onClick={() => setShowSidebar(!showSidebar)} */}
          <div className="wallet">
            <Wallet />
          </div>
          <div className="SchoolAccount">School Account</div>
          <div className="forword">
            <Forword />
          </div>
        </button>
      </div>
      <div class="heading-section">
        <div className="heading">
          <h2 className="title">Get started with Spms, St Joseph</h2>
          <p>Here's your report overview by today.</p>
        </div>
        <div className="Searchbox-wrapper">
          <div className="Searchbox">
            <div className="Searchiconclass">
              <Search />
            </div>
            <form>
              <input type="text" placeholder="Search"></input>
            </form>
          </div>
        </div>
      </div>
    </header>
       
  );
}

export default Header;
