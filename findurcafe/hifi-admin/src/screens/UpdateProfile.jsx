import { useEffect, useRef } from "react";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import GuestLayout from "../components/GuestLayout";

export default function UpdateProfile() {
  const { data } = useLoaderData();
  const idRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const genderRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();

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
        idRef.current = res.data.data.id;
        firstRef.current.value = res.data.data.first_name;
        lastRef.current.value = res.data.data.last_name;
        phoneRef.current.value = res.data.data.phone_number;
        emailRef.current.value = res.data.data.email;
        genderRef.current.value = res.data.data.gender;
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      phone_number: phoneRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      first_name: firstRef.current.value,
      last_name: lastRef.current.value,
    };

    axios
      .patch(`http://localhost:7002/api/users/${idRef.current}/general`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        alert("Profil berhasil diubah");
        window.location.href = "/profile";
      })
      .catch((err) => {
        alert("Gagal mengubah profil");
      });
  };

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center pt-4 pb-4">
        <div
          className="b-light rounded p-3"
          style={{ width: data.role > 0 ? "40vw" : "45%" }}
        >
          <div style={{ borderBottom: "solid 1px white", marginBottom: 20 }}>
            <h3 className="t-primary mb-5 text-center">Edit Profil</h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column justify-content-center"
          >
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="first" className="form-label">
                  Nama Depan
                </label>
                <input
                  ref={firstRef}
                  type="text"
                  className="form-control"
                  id="first"
                  placeholder="Nama Depan"
                />
              </div>
              <div className="col">
                <label htmlFor="last" className="form-label">
                  Nama Belakang
                </label>
                <input
                  ref={lastRef}
                  type="text"
                  className="form-control"
                  id="last"
                  placeholder="Nama Belakang"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="jk" className="form-label">
                Jenis Kelamin
              </label>
              <input
                ref={genderRef}
                type="text"
                className="form-control"
                id="jk"
                placeholder="Jenis Kelamin"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                id="email"
                placeholder="Jenis Kelamin"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="form-label">
                Nomor Telepon
              </label>
              <input
                ref={phoneRef}
                type="number"
                className="form-control"
                id="phone"
                placeholder="Jenis Kelamin"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="c-btn-primary"
                style={{ width: "100%" }}
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
