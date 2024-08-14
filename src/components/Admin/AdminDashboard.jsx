// src/components/Dashboard.js
// import React from 'react';
// import './AdminDashboard.css';
// import { FaUsers, FaTshirt, FaShoppingCart, FaSearch, FaSignOutAlt } from 'react-icons/fa';

// const AdminDashboard = () => {
//     return (
//         <div className="dashboard">
//             <aside className="sidebar">
//                 <nav>
//                     <ul>
//                         <li className="tooltip"><FaUsers className="icon"/><span className="tooltiptext">Customers</span></li>
//                         <li className="tooltip"><FaTshirt className="icon"/><span className="tooltiptext">Inventory</span></li>
//                         <li className="tooltip"><FaShoppingCart className="icon"/><span className="tooltiptext">Orders</span></li>
//                     </ul>
//                 </nav>
//                 <button className="logout"><FaSignOutAlt className="icon"/></button>
//             </aside>
//             <main className="main-content">
//                 <header className="header">
//                     <h1>Admin Dashboard</h1>
//                     <div className="header-right">
//                         {/* <div className="search-bar">
//                             <FaSearch className="search-icon" />
//                             <input type="text" placeholder="Search..." />
//                         </div> */}
//                         <div className="user-profile">
//                             <img src="https://via.placeholder.com/40" alt="User"/>
//                             <div className="user-dropdown">
//                                 <p>Profile</p>
//                                 <p>Settings</p>
//                                 <p>Logout</p>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//                 <section className="statistics">
//                     <div className="stat-card gradient-card">
//                         <h2>500+</h2>
//                         <p>Customers</p>
//                     </div>
//                     <div className="stat-card gradient-card">
//                         <h2>200+</h2>
//                         <p>Items Available</p>
//                     </div>
//                     <div className="stat-card gradient-card">
//                         <h2>150+</h2>
//                         <p>Orders Processed</p>
//                     </div>
//                 </section>
//                 {/* <section className="recent-activities">
//                     <h2>Recent Activities</h2>
//                     <ul>
//                         <li><FaUsers className="icon"/> New Customer added: Jane Doe</li>
//                         <li><FaShoppingCart className="icon"/> Order #12345 placed: 3 items</li>
//                         <li><FaTshirt className="icon"/> Inventory updated: 10 new dresses added</li>
//                     </ul>
//                 </section> */}
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import { FaBars, FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = ({ children }) => {
  return (
    <div className="adminDashboard">
      <aside className="adminSidebar">
        <div className="adminSidebarHeader">
          <div className="adminLogo">Admin Dashboard</div>
          <p className="adminWelcomeText">Welcome</p>
        </div>
        <ul className="adminSidebarMenu">
          <li className="adminMenuItem">
            <Link to='/admin/men'>
              <button className="adminButton">Men</button>
            </Link>
          </li>
          <li className="adminMenuItem">
            <Link to='/admin/women'>
              <button className="adminButton">Women</button>
            </Link>
          </li>
          <li className="adminMenuItem">
            <Link to='/admin/bridesmaid'>
              <button className="adminButton">Bridesmaid</button>
            </Link>
          </li>
          <li className="adminMenuItem">
            <Link to='/admin/groomsmen'>
              <button className="adminButton">Groomsmen</button>
            </Link>
          </li>
          <li className="adminMenuItem">
            <Link to='/admin/exclusives'>
              <button className="adminButton">Exclusives</button>
            </Link>
          </li>
        </ul>

        <div className="adminLogout">
          <Link to="/login">
            <button className="logoutButton">
              <FaSignOutAlt className="logoutIcon" />
            </button>
          </Link>
        </div>
      </aside>

      <div className="adminMainContent">
        <header className="adminHeader">
          <div className="adminHamburgerMenu">
            <FaBars />
          </div>
          <div className="adminHeaderRight">
            <FaBell className="adminIcon" />
            <FaUserCircle className="adminIcon" />
            <span className="adminUserName"></span>
          </div>
        </header>
        <div className="adminContent">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './AdminDashboard.css';
// import { FaBars, FaBell, FaUserCircle, FaChevronDown, FaSignOutAlt} from 'react-icons/fa';

// const AdminDashboard = ({ children }) => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//   return (
//     <div className="adminDashboard">
//       <aside className="adminSidebar">
//         <div className="adminSidebarHeader">
//           <div className="adminLogo">Admin Dashboard</div>
//           <p className="adminWelcomeText">Welcome</p>
//         </div>
//         <ul className="adminSidebarMenu">
//           {/* <li className="adminMenuItem">Home</li>
//           <li className="adminMenuItem">Forms</li> */}
//           <li className="adminMenuItem" onClick={toggleDropdown}>
//             Categories
//             <FaChevronDown className={`adminDropdownArrow ${isDropdownOpen ? 'open' : ''}`} />
//             <ul className={`adminSubMenu ${isDropdownOpen ? 'show' : ''}`}>
//               <li className="adminSubMenuItem"><Link to='/admin/men'>Men</Link></li>
//               <li className="adminSubMenuItem"><Link to='/admin/women'>Women</Link></li>
//               <li className="adminSubMenuItem"><Link to='/admin/bridesmaid'>Bridesmaid</Link></li>
//               <li className="adminSubMenuItem"><Link to='/admin/groomsmen'>Groomsmen</Link></li>
//               <li className="adminSubMenuItem"><Link to='/admin/exclusives'>Exclusives</Link></li>
//             </ul>
//           </li>
//         </ul>

//         <div className="adminLogout">
//           <Link to="/login">
//           <button><FaSignOutAlt className="logoutIcon"/></button>
//           </Link>
//         </div>
//       </aside>

//       <div className="adminMainContent">
//         <header className="adminHeader">
//           <div className="adminHamburgerMenu">
//             <FaBars />
//           </div>
//           <div className="adminHeaderRight">
//             <FaBell className="adminIcon" />
//             <FaUserCircle className="adminIcon" />
//             <span className="adminUserName"></span>
//           </div>
//         </header>
//         <div className="adminContent">

//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React from 'react';
//  import './AdminDashboard.css';
//  import { FaUsers, FaTags, FaSignOutAlt } from 'react-icons/fa';

//  const AdminDashboard = () => {
//      return (
//          <div className="dashboard">
//              <aside className="sidebar">
//                  <nav>
//                      <ul>
//                          <li className="tooltip"><FaUsers className="icon"/><span className="tooltiptext">Customers</span></li>
//                          <li className="tooltip"><FaTags className="icon"/><span className="tooltiptext">Categories</span></li>
//                      </ul>
//                  </nav>
//                  <button className="logout"><FaSignOutAlt className="icon"/></button>
//              </aside>
//              <main className="main-content">
//                 <header className="header">
//                      <h1>Admin Dashboard</h1>
//                      <div className="header-right">
//                          {/* <div className="search-bar">
//                              <FaSearch className="search-icon" />
//                              <input type="text" placeholder="Search..." />
//                          </div> */}
//                          <div className="user-profile">
//                   <img src="https://via.placeholder.com/40" alt="User"/>
//                             <div className="user-dropdown">
//                                 <p>Profile</p>
//                                 <p>Settings</p>
//                                 <p>Logout</p>
//                              </div>
//                          </div>
//                      </div>
//                  </header>
//                  <section className="statistics">
//                      <div className="stat-card gradient-card">
//                          <h2>500+</h2>
//                          <p>Customers</p>
//                      </div>
//                      <div className="stat-card gradient-card">
//                          <h2>150+</h2>
//                          <p>Categories</p>
//                      </div>
//                  </section>
//                  {/* <section className="recent-activities">
//                      <h2>Recent Activities</h2>
//                      <ul>
//                          <li><FaUsers className="icon"/> New Customer added: Jane Doe</li>
//                          <li><FaShoppingCart className="icon"/> Order #12345 placed: 3 items</li>
//                          <li><FaTshirt className="icon"/> Inventory updated: 10 new dresses added</li>
//                      </ul>
//                 </section> */}
//              </main>
//          </div>
//      );
//  };

//  export default AdminDashboard;

// import React, { useState } from 'react';
// import { FaUsers, FaTags, FaSignOutAlt } from 'react-icons/fa';

// const Dropdown = ({ title, items }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     return (
//         <div className="dropdown">
//             <button className="dropdown-toggle" onClick={toggleDropdown}>
//                 {title}
//             </button>
//             {isOpen && (
//                 <ul className="dropdown-menu">
//                     {items.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// const AdminDashboard = () => {
//     const categoryLists = [
//         ["Category 1", "Subcategory 1.1", "Subcategory 1.2"],
//         ["Category 2", "Subcategory 2.1", "Subcategory 2.2"],
//         ["Category 3", "Subcategory 3.1", "Subcategory 3.2"],
//         ["Category 4", "Subcategory 4.1", "Subcategory 4.2"],
//         ["Category 5", "Subcategory 5.1", "Subcategory 5.2"],
//     ];

//     return (
//         <div className="dashboard">
//             <aside className="sidebar">
//                 <nav>
//                     <ul>
//                         <li className="tooltip"><FaUsers className="icon"/><span className="tooltiptext">Customers</span></li>
//                         {categoryLists.map((categories, index) => (
//                             <li key={index}>
//                                 <Dropdown title={`Category ${index + 1}`} items={categories} />
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//                 <button className="logout"><FaSignOutAlt className="icon"/></button>
//             </aside>
//             <main className="main-content">
//                 <header className="header">
//                     <h1>Admin Dashboard</h1>
//                     <div className="header-right">
//                         <div className="user-profile">
//                             <img src="https://via.placeholder.com/40" alt="User"/>
//                             <div className="user-dropdown">
//                                 <p>Profile</p>
//                                 <p>Settings</p>
//                                 <p>Logout</p>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//                 <section className="statistics">
//                     <div className="stat-card gradient-card">
//                         <h2>500+</h2>
//                         <p>Customers</p>
//                     </div>
//                     <div className="stat-card gradient-card">
//                         <h2>150+</h2>
//                         <p>Categories</p>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;

// import React, { useState } from 'react';
// import { FaTags, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
// import './AdminDashboard.css';

// const Dropdown = ({ title, items }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     return (
//         <div className="adminMenuItem" onClick={toggleDropdown}>
//             <span>{title}</span>
//             <FaChevronDown className={`adminDropdownArrow ${isOpen ? 'open' : ''}`} />
//             <ul className={`adminSubMenu ${isOpen ? 'show' : ''}`}>
//                 {items.map((item, index) => (
//                     <li key={index} className="adminSubMenuItem">{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const AdminDashboard = () => {
//     const categoryLists = [
//         ["Category 1", "Subcategory 1.1", "Subcategory 1.2"],
//         ["Category 2", "Subcategory 2.1", "Subcategory 2.2"],
//         ["Category 3", "Subcategory 3.1", "Subcategory 3.2"],
//         ["Category 4", "Subcategory 4.1", "Subcategory 4.2"],
//         ["Category 5", "Subcategory 5.1", "Subcategory 5.2"],
//     ];

//     return (
//         <div className="adminDashboard">
//             <aside className="adminSidebar">
//                 <div className="adminSidebarHeader">
//                     <div className="adminLogo">Admin</div>
//                     <div className="adminWelcomeText">Welcome, Admin!</div>
//                 </div>
//                 <ul className="adminSidebarMenu">
//                     <li className="adminMenuItem">
//                         <FaTags className="adminIcon" />
//                         <span>Categories</span>
//                     </li>
//                     {categoryLists.map((categories, index) => (
//                         <Dropdown key={index} title={`Category ${index + 1}`} items={categories} />
//                     ))}
//                 </ul>
//                 <button className="adminIcon">
//                     <FaSignOutAlt />
//                 </button>
//             </aside>
//             <main className="adminMainContent">
//                 <header className="adminHeader">
//                     <div className="adminHamburgerMenu">&#9776;</div>
//                     <div className="adminHeaderRight">
//                         <span className="adminUserName">Admin</span>
//                         <FaSignOutAlt className="adminIcon" />
//                     </div>
//                 </header>
//                 <div className="adminContent">
//                     <h1>Admin Dashboard</h1>
//                     {/* Content goes here */}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;

// import React, { useState } from 'react';
// import { FaTags, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
// import './AdminDashboard.css';

// const Dropdown = ({ title, items }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     return (
//         <div className="adminMenuItem" onClick={toggleDropdown}>
//             <span>{title}</span>
//             <FaChevronDown className={`adminDropdownArrow ${isOpen ? 'open' : ''}`} />
//             <ul className={`adminSubMenu ${isOpen ? 'show' : ''}`}>
//                 {items.map((item, index) => (
//                     <li key={index} className="adminSubMenuItem">{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const AdminDashboard = () => {
//     const categories = ["Men", "Women", "Bridesmaid", "Groomsmen", "Exclusives"];

//     return (
//         <div className="adminDashboard">
//             <aside className="adminSidebar">
//                 <div className="adminSidebarHeader">
//                     <div className="adminLogo">Admin</div>
//                     <div className="adminWelcomeText">Welcome, Admin!</div>
//                 </div>
//                 <ul className="adminSidebarMenu">
//                     <Dropdown title="Categories" items={categories} />
//                 </ul>
//                 <button className="adminIcon">
//                     <FaSignOutAlt />
//                 </button>
//             </aside>
//             <main className="adminMainContent">
//                 <header className="adminHeader">
//                     <div className="adminHamburgerMenu">&#9776;</div>
//                     <div className="adminHeaderRight">
//                         <span className="adminUserName">Admin</span>
//                         <FaSignOutAlt className="adminIcon" />
//                     </div>
//                 </header>
//                 <div className="adminContent">
//                     <h1>Admin Dashboard</h1>
//                     {/* Content goes here */}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;

