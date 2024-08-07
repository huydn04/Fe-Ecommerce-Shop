import useAxiosPublic from "../axios/AxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: product = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axiosPublic.get("/api/v1/product");
      return response.data;
    },
  });
  const products = product.data ;
  
  return [products, isLoading, refetch];
};

export default useProduct;
