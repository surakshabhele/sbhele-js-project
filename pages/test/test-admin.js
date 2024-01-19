import React, { useState } from "react";
import Forword from "../component/admin18/forword";
import Search from "../component/admin18/search";
import Wallet from "../component/admin18/wallet";

function TestAdminPage() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="test-admin-page-wrapper">
      <div className="test-admin-page">
        <header>
          <div className="sidebar-btn-section">
            <button
              className="SchoolAccountinnerbox"
              onClick={() => setShowSidebar(!showSidebar)}
            >
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
              <p>Here’s your report overview by today.</p>
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
        <div className="section-start">
          {showSidebar && (
            <div className="sidebar">
              <div className="sidebar-inner">dsfsdfdfsf</div>
            </div>
          )}

          <div className="main-content">
            {/* <div class="row">Get started with Spms, St Joseph</div>
          <div class="content">
            content
            <div class="column1">column1</div>
            <div class="column2">column1</div>
          </div> */}
            <h1>main content</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestAdminPage;
