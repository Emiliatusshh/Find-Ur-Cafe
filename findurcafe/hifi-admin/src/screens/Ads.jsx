import { useRef } from "react";
import AdminLayout from "../components/AdminLayout";
import FileUpload from "../components/FileUpload";
import axios from "axios";

export default function Ads() {
  const name = useRef();
  const detail = useRef();
  const file = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mitra", name.current.value);
    formData.append("detail", detail.current.value);
    formData.append("image", file.current.files[0]);

    axios
      .post("http://localhost:7002/api/ads", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        alert("Iklan berhasil ditambahkan");
        window.location.href = "/ads";
      })
      .catch((err) => {
        alert("Gagal menambahkan iklan");
      });
  }

  return (
    <AdminLayout>
      <div className="d-flex justify-content-center align-items-center pt-4 pb-4">
        <div style={{ width: "45%" }}>
          <h3 className="t-primary mb-5 text-center">Tambah Iklan</h3>
          <form onSubmit={handleSubmit} className="rounded b-light p-4">
            <div className="mb-3">
              <label htmlFor="mitra" className="form-label">
                Mitra
              </label>
              <input
                ref={name}
                type="text"
                className="form-control"
                id="mitra"
                placeholder="Nama Mitra"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deskripsi" className="form-label">
                Deskripsi
              </label>
              <input
                ref={detail}
                type="text"
                className="form-control"
                id="deskripsi"
                placeholder="Deskripsi"
              />
            </div>
            <FileUpload
              refInput={file}
              title="Gambar/Foto"
              label="Dokumentasi"
            />
            <button
              type="submit"
              className="btn btn-primary b-primary t-light"
              style={{ border: "none", width: "100%" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
