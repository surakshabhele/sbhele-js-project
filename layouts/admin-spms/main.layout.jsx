import Header from "components/admin-spms/header.component";
import Sidebar from "components/admin-spms/sidebar";
import React, { useState } from "react";

function AdminSpmsMainLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="admin-spms-page-wrapper">
      <div className="admin-spms-page">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="section-start">
          {showSidebar && (
            <div className="sidebar">
              <div className="sidebar-inner">
                <Sidebar />
              </div>
            </div>
          )}

          <div className="main-content">{children}</div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminSpmsMainLayout;
