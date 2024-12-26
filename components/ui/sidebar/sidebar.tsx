// components/Sidebar.tsx
const Sidebar = () => {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#"><i className="fas fa-user"></i> Profile</a></li>
            <li><a href="#"><i className="fas fa-address-card"></i> About</a></li>
            <li><a href="#"><i className="fas fa-project-diagram"></i> Projects</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  