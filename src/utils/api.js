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

export async function parse(service, brand, style) {
  try {
    const res = await axios.get(`${URL}/parse_link?${service}${brand}${style}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
