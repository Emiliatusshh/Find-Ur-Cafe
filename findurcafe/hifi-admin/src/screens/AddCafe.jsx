import { useRef } from "react";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";
import FileUpload from "../components/FileUpload";

export default function AddCafe() {
  const name = useRef();
  const detail = useRef();
  const description = useRef();
  const nearby = useRef();
  const file = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama_cafe", name.current.value);
    formData.append("detail_informasi", detail.current.value);
    formData.append("deskripsi", description.current.value);
    formData.append("nearby_attraction", nearby.current.value);
    formData.append("image", file.current.files[0]);

    axios
      .post("http://localhost:7002/api/cafes", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        alert("Cafe berhasil ditambahkan");
        window.location.href = "/cafe";
      })
      .catch((err) => {
        alert("Gagal menambahkan cafe");
      });

    console.log(data);
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-center align-items-center pt-4 pb-4">
        <div style={{ width: "45%" }}>
          <h3 className="t-primary mb-5 text-center">Tambah Cafe</h3>
          <form onSubmit={handleSubmit} className="rounded b-light p-4">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nama Cafe
              </label>
              <input
                ref={name}
                type="text"
                className="form-control"
                id="name"
                placeholder="Nama Cafe"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Detail Informasi
              </label>
              <input
                ref={detail}
                type="text"
                className="form-control"
                id="name"
                placeholder="Detail Informasi"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Deskripsi
              </label>
              <input
                ref={description}
                type="text"
                className="form-control"
                id="name"
                placeholder="Deskripsi"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="detail" className="form-label">
                Nearby Attraction
              </label>
              <input
                ref={nearby}
                type="text"
                className="form-control"
                id="detail"
                placeholder="Nearby Attraction"
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
