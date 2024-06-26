import { useRef } from "react";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import GuestLayout from "../components/GuestLayout";

export default function ChangePassword() {
  const { data } = useLoaderData();
  const oldRef = useRef();
  const newRef = useRef();
  const confirmRef = useRef();

  function Layout({ children }) {
    if (data.role < 1) return <AdminLayout>{children}</AdminLayout>;
    return <GuestLayout>{children}</GuestLayout>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRef.current.value !== confirmRef.current.value) {
      alert("Kata sandi baru tidak sama dengan konfirmasi kata sandi");
      return;
    }

    const data = {};
    data.old_password = oldRef.current.value;
    data.new_password = newRef.current.value;
    data.confirm_password = confirmRef.current.value;

    axios
      .patch("http://localhost:7002/api/users/change-password", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        alert("Kata sandi berhasil diubah");
        window.location.href = "/profile";
      })
      .catch((err) => {
        alert("Gagal mengubah kata sandi");
      });
  };

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center pt-4 pb-4">
        <div
          className="b-light rounded p-3"
          style={{ width: data.role > 0 ? "35vw" : "45%" }}
        >
          <div style={{ borderBottom: "solid 1px white", marginBottom: 20 }}>
            <h3 className="t-primary mb-5 text-center">Ubah kata sandi</h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column justify-content-center"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Kata Sandi Lama
              </label>
              <input
                ref={oldRef}
                type="password"
                className="form-control"
                id="name"
                placeholder="Kata Sandi Lama"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Kata Sandi Baru
              </label>
              <input
                ref={newRef}
                type="password"
                className="form-control"
                id="name"
                placeholder="Kata Sandi Baru"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="form-label">
                Konfirmasi Kata Sandi Baru
              </label>
              <input
                ref={confirmRef}
                type="password"
                className="form-control"
                id="name"
                placeholder="Konfirmasi Kata Sandi Baru"
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
