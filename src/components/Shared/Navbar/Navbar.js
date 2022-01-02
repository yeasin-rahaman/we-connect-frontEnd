import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="a">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav text-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="h">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="h">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="h">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="h">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="h">
                DashBoard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
