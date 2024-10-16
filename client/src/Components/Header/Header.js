import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "@mui/material";

function Header() {
  return (
    <>
      <div className="header-wraper">
        <div className="header-container">
          <div className="left-header">
            <ul>
            <li>
                <a href="">Netflix</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">TVshow</a>
              </li>
              <li>
                <a href="">Movie</a>
              </li>
              <li>
                <a href="">Latest</a>
              </li>
              <li>
                <a href="">Mylist</a>
              </li>
              <li>
                <a href="">Browse by languages</a>
              </li>
            </ul>
          </div>
          <div className="right-header">
            <ul>
              <li>
                <Link to="">
                  <SearchIcon />
                </Link>
              </li>
              <li>
                <Link to="">
                  <NotificationsNoneIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
