import GuestLayout from "../components/GuestLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const router = useNavigate();
  const [data, setData] = useState({
    cafes: [],
    ads: [],
  });

  useEffect(() => {
    async function fetchData() {
      const cafes = axios
        .get("http://localhost:7002/api/cafes")
        .then((res) => res.data);
      const ads = axios
        .get("http://localhost:7002/api/ads")
        .then((res) => res.data);

      return Promise.all([cafes, ads]);
    }

    fetchData().then(([cafes, ads]) => {
      console.log(cafes);
      console.log(ads);
      setData({ cafes, ads });
    });
  }, []);

  return (
    <GuestLayout>
      <h2 className="t-primary mt-5 mb-4">
        Temukan Cafe Sesuai dengan Kebutuhanmu
      </h2>
      <div className="p-2 b-light d-flex flex-row rounded mb-4">
        <select
          className="form-select"
          style={{ marginRight: 5 }}
          aria-label="Default select example"
        >
          <option>Konsep Cafe</option>
          <option value="1">Cafe Outdoor</option>
          <option value="2">Cafe Minimalis</option>
          <option value="3">Cafe Alam</option>
          <option value="4">Cafe Industrial</option>
          <option value="5">Cafe Rooftop</option>
        </select>
        <select
          className="form-select"
          style={{ marginRight: 5 }}
          aria-label="Default select example"
        >
          <option>Kecamatan</option>
          <option value="1">Kecamatan Ciputat</option>
          <option value="2">Kecamatan Ciputat Timur</option>
          <option value="3">Kecamatan Pamulang</option>
          <option value="4">Kecamatan Pondok Aren</option>
          <option value="5">Kecamatan Serpong</option>
          <option value="6">Kecamatan Serpong Utara</option>
          <option value="7">Kecamatan Setu</option>
        </select>
        <select
          className="form-select"
          style={{ marginRight: 5 }}
          aria-label="Default select example"
        >
          <option>Range Harga</option>
          <option value="1">Rp 20.000 - Rp 50.000</option>
          <option value="2">Rp 50.000 - Rp 100.000</option>
          <option value="3">Rp 100.000 - Rp 200.000</option>
        </select>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nama Cafe"
          style={{ marginRight: 10, width: 350 }}
        ></input>
        <button className="c-btn-primary">Cari</button>
      </div>
      <div className="row" style={{ width: "79%" }}>
        <div className="col-10">
          <div className="row">
            {data.cafes.map((res, idx) => (
              <div key={idx} className="col-4 mb-3">
                <div
                  className="d-flex flex-column p-2 rounded b-tight shadow-light"
                  style={{ width: "100%" }}
                >
                  <div style={{ width: "100%" }}>
                    <img
                      className="img-fluid"
                      src={`http://localhost:7002/uploads/${res.gambar_foto}`}
                      alt="imge"
                      style={{
                        marginBottom: 10,
                        maxHeight: 200,
                        width: "100%",
                      }}
                    />
                    <h4>{res.nama_cafe}</h4>
                    <p
                      style={{
                        fontSize: 14,
                        textAlign: "justify",
                        color: "gray",
                      }}
                    >
                      {`${res.detail_informasi.substring(0, 100)}${
                        res.detail_informasi.length > 100 ? "..." : ""
                      }`}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      router(`/article/${res.id}`);
                    }}
                    className="c-btn-primary"
                  >
                    Baca selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-2 d-flex flex-column">
          {data.ads.map((it, idx) => (
            <img
              key={idx}
              src={`http://localhost:7002/uploads/${it.gambar_foto}`}
              className="mb-3 rounded"
            />
          ))}
        </div>
      </div>
    </GuestLayout>
  );
}
