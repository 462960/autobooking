import axios from "axios";

const URL = "https://beta.autobooking.com/api/test/v1/search";

export async function services() {
  try {
    const res = await axios.get(`${URL}/terms`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function brands() {
  try {
    const res = await axios.get(`${URL}/brands_terms`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function styles() {
  try {
    const res = await axios.get(`${URL}/styles`);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function path() {
  try {
    const res = await axios.get(`${URL}/parse_link`, {
      service_slug: "Nod",
      brand_slug: "Prod",
      style_slug: "Dod",
    });
    return res.status;
  } catch (error) {
    console.error(error);
  }
}
