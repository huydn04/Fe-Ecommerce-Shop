import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://be-ecommerce-shop.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
