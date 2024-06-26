import AdminLayout from "../components/AdminLayout";
import fileupilus from "../assets/Illustration.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import ItemInfoUser from "../components/ItemInfoUser";
import GuestLayout from "../components/GuestLayout";

export default function Profile() {
  const [user, setUser] = useState({});
  const { data } = useLoaderData();

  function Layout({ children }) {
    if (data.role < 1) return <AdminLayout>{children}</AdminLayout>;
    return <GuestLayout>{children}</GuestLayout>;
  }

  useEffect(() => {
    axios
      .get("http://localhost:7002/api/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUser(res.data.data);
      });
  }, []);

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center pt-4 pb-4 mb-3">
        <div style={{ width: data.role > 0 ? "30vw" : "45%" }}>
          <div className="b-light d-flex justify-content-center align-items-center p-4 mb-3 flex-column">
            <img src={fileupilus} alt="profile" style={{ marginBottom: 20 }} />
            <h3 style={{ fontSize: 20 }}>{user.first_name}</h3>
            <span style={{ color: "#7a7a7a" }}>{user.email}</span>
          </div>
          <div className="b-light d-flex mb-3 flex-column">
            <div className="p-3" style={{ borderBottom: "solid 1px white" }}>
              <Link to={"/update-profile"} style={{ textDecoration: "none" }}>
                ubah profile
              </Link>
            </div>
            <div className="p-3" style={{ borderBottom: "solid 1px white" }}>
              <Link to={"/change-password"} style={{ textDecoration: "none" }}>
                ubah password
              </Link>
            </div>
          </div>
          <div className="b-light d-flex mb-3 flex-column">
            <ItemInfoUser
              lable="Nama Lengkap"
              value={user.first_name + " " + user.last_name}
            />
            <ItemInfoUser lable="Jenis Kelamin" value={user.gender} />
            <ItemInfoUser lable="Email" value={user.email} />
            <ItemInfoUser lable="Nomor Telepon" value={user.phone_number} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
