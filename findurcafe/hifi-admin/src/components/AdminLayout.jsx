import { BiHomeAlt } from "react-icons/bi";
import { IoCafeOutline } from "react-icons/io5";
import { LiaAdSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function AdminLayout({ children }) {
  return (
    <div className="">
      <div className="row flex-nowrap g-0">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 shadow-sm b-tight">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none mb-6"
            >
              <span className="fs-5 d-none d-sm-inline t-primary">
                Find Ur Cafe
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item mb-4">
                <Link to="/dashboard" className="nav-link align-middle px-0">
                  <BiHomeAlt
                    size={25}
                    className="t-primary"
                    style={{ marginRight: 4 }}
                  />
                  <span className="ms-1 d-none d-sm-inline t-primary">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item mb-4">
                <Link to="/cafe" className="nav-link align-middle px-0">
                  <IoCafeOutline
                    size={25}
                    className="t-primary"
                    style={{ marginRight: 4 }}
                  />
                  <span className="ms-1 d-none d-sm-inline t-primary">
                    Cafe
                  </span>
                </Link>
              </li>
              <li className="nav-item mb-4">
                <Link to="/ads" className="nav-link align-middle px-0">
                  <LiaAdSolid
                    size={25}
                    className="t-primary"
                    style={{ marginRight: 4 }}
                  />
                  <span className="ms-1 d-none d-sm-inline t-primary">
                    Iklan
                  </span>
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col" style={{ maxHeight: "100vh", overflow: "scroll" }}>
          <nav
            className="d-flex flex-row-reverse b-secondary p-2"
            style={{ position: "sticky", top: 0 }}
          >
            <Dropdown>
              <Dropdown.Toggle
                style={{ border: "none" }}
                className="b-light t-primary"
                id="dropdown-basic"
              >
                Admin
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                  href="#/action-2"
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </nav>

          {children}
        </div>
      </div>
    </div>
  );
}
