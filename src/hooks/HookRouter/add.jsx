import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../axios/AxiosPublic";

const useAddProduct = () => {
  const axiosPublic = useAxiosPublic();
 
  return useMutation({
    mutationFn: async (newProduct) => {
      const response = await axiosPublic.post("/api/v1/product", newProduct);
      return response.data;
    },
    onSuccess: () => {
      alert("data add sucessfully!")
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export default useAddProduct;
