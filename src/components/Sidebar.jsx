import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaUsers,
  FaSolarPanel,
  FaChartLine,
  FaMap,
  FaFileAlt,
  FaFolder,
  FaCog
} from "react-icons/fa";

import "./../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ collapsed }) => {

  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FaProjectDiagram />
    },
    {
      name: "Sites",
      path: "/sites",
      icon: <FaMapMarkerAlt />
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <FaUsers />
    },
    {
      name: "Solar Plants",
      path: "/solarplants",
      icon: <FaSolarPanel />
    },
    {
      name: "Monitoring",
      path: "/monitoring",
      icon: <FaChartLine />
    },
    {
      name: "GIS Maps",
      path: "/gismaps",
      icon: <FaMap />
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaFileAlt />
    },
    {
      name: "Documents",
      path: "/documents",
      icon: <FaFolder />
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />
    }
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Logo */}

      <div className="sidebar-logo">

        <div className="logo-icon">
          ☀
        </div>

        {!collapsed && (
          <div className="logo-text">
            <h4>SURYATARA</h4>
            <span>SOLAR ENERGY</span>
          </div>
        )}

      </div>

      {/* Menu */}

      <div className="sidebar-menu">

        {
          menus.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              <span className="menu-icon">
                {menu.icon}
              </span>

              {!collapsed &&
                <span className="menu-title">
                  {menu.name}
                </span>
              }
            </NavLink>
          ))
        }

      </div>

      {/* Footer */}

      <div className="sidebar-footer">

        <div className="user-avatar">
          A
        </div>

        {!collapsed &&
          <div>
            <div className="admin-name">
              Admin User
            </div>

            <div className="admin-email">
              admin@suryatara.com
            </div>
          </div>
        }

      </div>

    </div>
  );
};

export default Sidebar;