import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner from "../assets/background_login.png";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="p-3">
        <div className="b-light p-2 mb-3 d-flex flex-row rounded justify-content-between align-items-center">
          <h3 className="t-primary">Beranda</h3>
        </div>
        <Row className="mt-5 p-5 mr-2">
          <Col className="col-5 d-flex flex-column">
            <div className="mb-3">
              <h3>Make it easy with FindUrCafe</h3>
              <p>
                This website is suitable for tourists who are confused in
                finding information related to natural tourist destinations,
                especially in the Jepara area.
              </p>
            </div>
            <div>
              <h3>Detail Information</h3>
              <p>
                Providing detailed information tailored to the needs of the
                majority of tourists.
              </p>
            </div>
          </Col>
          <Col
            className="col-7 rounded"
            style={{
              backgroundImage: "url(" + banner + ")",
              backgroundPosition: "center",
              height: 400,
              backgroundSize: "cover",
            }}
          ></Col>
        </Row>
      </div>
    </AdminLayout>
  );
}
