import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

const image = {
  backgroundImage: new URL("../assets/background_login.png", import.meta.url)
    .href,
};

const style = {
  backgroundImage: `url(${image.backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  opacity: 0.8,
};

/**
 * @file Login.jsx
 */
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let gender = "Laki-laki";

    axios
      .post("http://localhost:7002/api/users", {
        email,
        password,
        last_name,
        first_name,
        gender,
      })
      .then((res) => {
        console.log("Register berhasil");
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log("Username/password salah");
      });
  };

  return (
    <Row>
      <Col style={style}>
        <div>
          <h4 className="text-white fs-1">“ Hangout is easy “</h4>
          <span className="text-white fst-italic fs-3">findurcafe.com</span>
        </div>
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <div className="mb-5 text-center">
          <h1 className="t-primary">Selamat Datang</h1>
          <span className="t-primary">
            Kembali jelajahi cafe kesukaan anda bersama Find Ur Cafe
          </span>
        </div>

        <form
          className="d-flex flex-column p-4"
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#F7EEE2",
            width: "60%",
            borderRadius: 20,
            padding: "30px 10px",
          }}
        >
          <div className="row">
            <Form.Group className="col-6 mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="col-6 mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Kata sandi"
            />
          </Form.Group>
          <Button
            type="submit"
            className="b-primary t-light mb-3"
            style={{ border: "none", fontSize: "15px" }}
            size="lg"
            active
          >
            Daftar
          </Button>
        </form>
      </Col>
    </Row>
  );
}
