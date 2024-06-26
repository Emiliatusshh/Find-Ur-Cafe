import React, { useEffect, useState } from "react";
import GuestLayout from "../components/GuestLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import rating from "../assets/rating.png";
import Button from "react-bootstrap/Button";

export default function Details() {
  const { id } = useParams();
  const router = useNavigate();
  const [data, setData] = useState({
    cafe: {},
    reviews: [],
  });

  useEffect(() => {
    function fetchData() {
      const cafe = axios
        .get(`http://localhost:7002/api/cafes/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data);

      const reviews = axios
        .get(`http://localhost:7002/api/reviews/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data);

      return Promise.all([cafe, reviews]);
    }

    fetchData().then(([cafe, reviews]) => {
      setData({ cafe: cafe, reviews: reviews });
    });
  }, []);

  return (
    <GuestLayout>
      <section
        className="row"
        style={{ width: "90vw", marginTop: 30, marginBottom: 30 }}
      >
        <div className="col-8">
          <img
            style={{ width: "100%", height: 400 }}
            src={`http://localhost:7002/uploads/${data.cafe.gambar_foto}`}
            alt=""
          />
        </div>

        <div className="col-4 p-4" style={{ backgroundColor: "#F7EEE2" }}>
          <h3>{data.cafe.nama_cafe}</h3>
          <p style={{ color: "#795548", fontWeight: "bold" }}>
            Detail Informasi {data.cafe.nama_cafe}
          </p>
          {data.cafe.detail_informasi?.split("\n").map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>
      <section className="row" style={{ marginTop: 30, maxWidth: "90vw" }}>
        <div className="col-8">
          <h3>Deskripsi {data.cafe.nama_cafe}</h3>
          {data.cafe.deskripsi?.split("\n").map((item, index) => (
            <p style={{ textAlign: "justify" }} key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="col-4">
          <h3>{data.cafe.nearby_attraction?.split("\n")[0]}</h3>
          {data.cafe.nearby_attraction
            ?.split("\n")
            .map((item, index) =>
              index == 0 ? null : <p key={index}>{item}</p>
            )}
        </div>
      </section>
      <section style={{ marginTop: 50, width: "90vw", marginBottom: 30 }}>
        <div
          style={{
            backgroundColor: "#7955480F",
            width: "100%",
            padding: 10,
          }}
        >
          <h3 style={{ color: "black" }}>Ulasan dari Pengunjung</h3>
        </div>
        <div style={{ width: "100%", backgroundColor: "#F7EEE2", padding: 20 }}>
          {data.reviews.map((res, it) => {
            return (
              <div
                key={it}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 30,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: 10,
                    }}
                  >
                    {[...new Array(res.rate).keys()].map((it) => (
                      <img width={20} src={rating} />
                    ))}
                  </div>
                  <p style={{ color: "#7a7a7a", marginBottom: 0 }}>
                    {res.content}
                  </p>
                  <span>{res.author}</span>
                  <small
                    style={{
                      marginBottom: 10,
                      color: "gray",
                    }}
                  >
                    {new Date(res.published).toLocaleDateString()}
                  </small>
                  <img
                    src={`http://localhost:7002/uploads/${res.gambar_foto}`}
                    className="rounded"
                    style={{
                      width: 150,
                      height: 100,
                    }}
                  />
                </div>
              </div>
            );
          })}

          <Button
            onClick={(e) => {
              router(`/article/${id}/review`);
            }}
            style={{ border: "none" }}
            className="b-primary t-light mb-3"
          >
            Tambahkan Ulasan
          </Button>
        </div>
      </section>
    </GuestLayout>
  );
}
