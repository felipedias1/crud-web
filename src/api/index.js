import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getCustomers = async () => {
  const URL = `${BASE_URL}/customers`;
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomersById = async (id) => {
  const URL = `${BASE_URL}/customers/${id}`;
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createCustomer = async (customerPayload) => {
  const URL = `${BASE_URL}/customers`;
  console.log(customerPayload);
  try {
    const response = await axios.post(URL, customerPayload);
    return response;
  } catch (error) {
    return false;
  }
};

export const updateCustomer = async (id, customerPayload) => {
  const URL = `${BASE_URL}/customers/${id}`;
  try {
    await axios.put(URL, customerPayload);
  } catch (error) {
    return false;
  }
};

export const deleteCustomer = async (id) => {
  const URL = `${BASE_URL}/customers/${id}`;
  try {
    await axios.delete(await axios.delete(URL));
  } catch (error) {
    return false;
  }
};
