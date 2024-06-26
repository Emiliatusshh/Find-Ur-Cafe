import React, { useRef, useState } from "react";
import GuestLayout from "../components/GuestLayout";
import "../rating.css";
import FileUpload from "../components/FileUpload";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AddReview() {
  const { id } = useParams();

  const name = useRef();
  const detail = useRef();
  const file = useRef();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cafe_id", id);
    formData.append("rate", rating);
    formData.append("content", detail.current.value);
    formData.append("image", file.current.files[0]);

    axios
      .post("http://localhost:7002/api/reviews", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        alert("Ulasan berhasil ditambahkan");
        window.location.href = "/article/" + id;
      })
      .catch((err) => {
        alert("Gagal menambahkan ulasan");
      });
  }

  return (
    <GuestLayout>
      <section
        className="row justify-content-center b-light p-4 rounded"
        style={{ width: "40vw", marginTop: 30 }}
      >
        <h3 className="t-primary mb-2 text-center">Ulas Tempat</h3>
        <form onSubmit={handleSubmit} className="rounded b-light p-4">
          <div className="d-flex flex-row align-items-center mb-2">
            <p style={{ marginBottom: 0 }}>Rating : </p>
            <div className="rating" style={{ marginTop: 0 }}>
              <input
                type="radio"
                onChange={handleRatingChange}
                id="star5"
                name="rating"
                value="5"
              />
              <label
                className="star"
                for="star5"
                title="Awesome"
                aria-hidden="true"
              ></label>
              <input
                type="radio"
                onChange={handleRatingChange}
                id="star4"
                name="rating"
                value="4"
              />
              <label
                className="star"
                for="star4"
                title="Great"
                aria-hidden="true"
              ></label>
              <input
                type="radio"
                onChange={handleRatingChange}
                id="star3"
                name="rating"
                value="3"
              />
              <label
                className="star"
                for="star3"
                title="Very good"
                aria-hidden="true"
              ></label>
              <input
                type="radio"
                onChange={handleRatingChange}
                id="star2"
                name="rating"
                value="2"
              />
              <label
                className="star"
                for="star2"
                title="Good"
                aria-hidden="true"
              ></label>
              <input
                type="radio"
                onChange={handleRatingChange}
                id="star1"
                name="rating"
                value="1"
              />
              <label
                className="star"
                for="star1"
                title="Bad"
                aria-hidden="true"
              ></label>
            </div>
          </div>
          <div className="mb-3">
            <textarea
              ref={detail}
              type="text"
              className="form-control"
              id="deskripsi"
              placeholder="tulis review disini..."
            ></textarea>
          </div>
          <FileUpload refInput={file} title="Gambar/Foto" label="Ulasan" />
          <button
            type="submit"
            className="btn btn-primary b-primary t-light"
            style={{ border: "none", width: "100%" }}
          >
            Submit
          </button>
        </form>
      </section>
    </GuestLayout>
  );
}
