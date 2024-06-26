import { Fragment } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Footer from "./FooterGuest";

export default function GuestLayout({ children }) {
  const { data } = useLoaderData();
  const router = useNavigate();

  return (
    <Fragment>
      <nav className="d-flex flex-row justify-content-between align-items-center p-3 b-secondary">
        <span
          className="text-white"
          style={{ cursor: "pointer" }}
          onClick={(e) => router("/")}
        >
          Find Ur Cafe
        </span>
        <div>
          {data != undefined ? (
            <Dropdown>
              <Dropdown.Toggle
                style={{ border: "none" }}
                className="b-light t-primary"
                id="dropdown-basic"
              >
                {data.first_name + " " + data.last_name}
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
          ) : (
            <>
              <Link
                to={"/login"}
                className="c-btn-light"
                style={{ marginRight: 10, textDecoration: "none" }}
              >
                Masuk
              </Link>
              <Link className="c-btn-light" style={{ textDecoration: "none" }}>
                Daftar
              </Link>
            </>
          )}
        </div>
      </nav>
      <main
        className="d-flex flex-column align-items-center"
        style={{ marginBottom: 20 }}
      >
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
