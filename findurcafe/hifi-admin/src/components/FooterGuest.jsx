import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <footer style={{ backgroundColor: "#AF8260" }}>
        <div className="container pt-3">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h4 className="text-xl mb-3 text-white">
                <img
                  src={logo}
                  alt="Logo"
                  width="70"
                  height="70"
                  className="d-inline-block align-text-center"
                ></img>
                Find Ur Cafe
              </h4>
            </div>
            <div className="col-lg-6 text-lg-end">
              {/* <p className="mb-0">FIND UR CAFE --- 2024. All rights reserved.</p> */}
              <div className="row">
                <div className="col">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <p
                        className="text-white text"
                        style={{ fontWeight: "bold" }}
                      >
                        KONTAK KAMI
                      </p>
                    </li>
                    <li className="mb-1">
                      <p className="text-white">0812 1234 5678</p>
                    </li>
                    <li className="mb-1">
                      <p className="text-white">0212 1234 5678</p>
                    </li>
                    <li className="mb-1">
                      <p className="text-white">findurcafe@gmail.com</p>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <p
                        className="text-white text"
                        style={{ fontWeight: "bold" }}
                      >
                        MEDIA SOSIAL
                      </p>
                    </li>
                    <li className="mb-1">
                      <p className="text-white">findurcafe</p>
                    </li>
                    <li className="mb-1">
                      <p className="text-white">Find Ur Cafe</p>
                    </li>
                    <li className="mb-1">
                      <p className="text-white">findurcafe</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "4rem", borderTop: "1px solid white" }}>
            <p className="text-center text-white pt-2">
              Copyright FindUrCafe.com. 2024
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
