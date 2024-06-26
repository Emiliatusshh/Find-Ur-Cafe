import axios from "axios";
import { redirect } from "react-router-dom";

export async function authenticating({ request }) {
  try {
    const { data } = await axios.get("http://localhost:7002/api/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return data;
  } catch (e) {
    return redirect("/login");
  }
}

export async function authorizing({ request }) {
  try {
    const { data } = await axios.get("http://localhost:7002/api/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      signal: request.signal,
    });

    return data;
  } catch (e) {
    return {};
  }
}
