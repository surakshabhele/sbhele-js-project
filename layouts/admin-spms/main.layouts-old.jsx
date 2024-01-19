import Sidebar from 'pages/component/admin18/sidebar';
import React from 'react'

function Mainlayoutsold({ children }) {
    // const [showSidebar, setShowSidebar] = useState(true);
  return (
   
    <div className="admin-spms-page-wrapper">
    {/* <div className="admin-spms-page">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="section-start">
        {showSidebar && (
          <div className="sidebar">
            <div className="sidebar-inner"><Sidebar /></div>
          </div>
        )}

        <div className="main-content">{children}</div>
      </div>
    </div> */}
  </div>

  )
}

export default Mainlayoutsold