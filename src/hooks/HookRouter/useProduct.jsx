import useAxiosPublic from "../axios/AxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const  axiosPublic  = useAxiosPublic();
  const {
    data: product = [],
    isPending: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const respone = await axiosPublic.get("/api/v1/product");
      return respone;
    },
  });

  return [product, isLoading, refetch];
};

export default useProduct;
