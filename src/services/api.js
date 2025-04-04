import axios from "axios";

// Базовий URL для всіх запитів
const instance = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

// GET всі авто (з параметрами фільтрації)
export const getCars = async (params) => {
  const response = await instance.get("/cars", { params });
  return response.data;
};

// GET одне авто за ID
export const getCarById = async (id) => {
  const response = await instance.get(`/cars/${id}`);
  return response.data;
};
