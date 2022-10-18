import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="container bg-success d-flex align-items-center justify-content-between">
      <h1 className="KwizApp">KwizApp</h1>
      <div className="Navbar-link">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/static">Statistic</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
