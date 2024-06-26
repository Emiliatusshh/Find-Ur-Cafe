import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cafe() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7002/api/cafes").then((res) => {
      setCafes(res.data);
    });
  }, []);

  const handleDelete = (e) => {
    const yesno = confirm("Yakin ingin menghapus?");
    if (yesno) {
      axios
        .delete(`http://localhost:7002/api/cafes/${e.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => window.location.reload());
    }
  };

  return (
    <AdminLayout>
      <div className="p-3">
        <div className="b-light p-2 mb-3 d-flex flex-row rounded justify-content-between align-items-center">
          <h3 className="t-primary">Cafe</h3>
          <Link to={"/create"} className="c-btn-primary">
            Tambah
          </Link>
        </div>
        <table
          className="table table-bordered data-table2"
          style={{ minWidth: "100%" }}
        >
          <thead>
            <tr>
              <th>Nama</th>
              <th>Detail</th>
              <th>Deskripsi</th>
              <th data-type="date" data-format="YYYY/MM/DD">
                Add Info
              </th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {cafes.map((cafe) => (
              <tr key={cafe.id}>
                <td>{cafe.nama_cafe}</td>
                <td>{cafe.detail_informasi}</td>
                <td>{cafe.deskripsi}</td>
                <td>{cafe.nearby_attraction}</td>
                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/cafe/${cafe.id}/edit`}
                  >
                    Edit
                  </Link>
                  |
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={(e) => {
                      e.preventDefault();

                      handleDelete(cafe);
                    }}
                    to={`/cafe/${cafe._id}`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
