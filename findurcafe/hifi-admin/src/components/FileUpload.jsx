import { Fragment } from "react";
import fileupilus from "../assets/Illustration.png";

export default function FileUpload({ refInput, label, title }) {
  return (
    <Fragment>
      <div className="mb-3">
        <label htmlFor="detail" className="form-label">
          {title}
        </label>
        <div
          className="d-flex flex-row justify-content-between align-items-center p-2 rounded"
          style={{ background: "white" }}
        >
          <span>{label}</span>
          <button
            type="button"
            onClick={(e) => refInput.current.click()}
            className="c-btn-primary"
          >
            upload
          </button>
        </div>
        <input
          hidden
          ref={refInput}
          type="file"
          className="form-control"
          id="file"
        />
      </div>
      <div className="mb-4">
        <div
          className="d-flex justify-content-center align-items-center rounded"
          style={{
            width: "100%",
            background: "white",
            flexDirection: "column",
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          <img src={fileupilus} className="mb-2" alt="" />
          <h3 style={{ fontSize: 11 }}>Start by uploading a file</h3>
          <p style={{ fontSize: 11 }}>
            Any assets used in projects will live here.Start creating by
            uploading your files.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
