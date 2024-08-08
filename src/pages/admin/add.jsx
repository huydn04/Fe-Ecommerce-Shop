import { useState } from "react";
import useAddProduct from "../../hooks/HookRouter/add";

const AddProductForm = () => {
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        price_sale: '',
        description: '',
        rating: '',
        favourite: ''
    });
    const { mutate: addProduct, isLoading } = useAddProduct();

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(productData);
    };

    return (
        <div className="fixed  inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-white  p-6 rounded-lg border-solid border w-full h-fit max-w-sm">
                <h2 className="text-2xl font-bold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1 "
                        >
                            Product Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Product Name"
                            onChange={(e) =>
                                setProductData({ ...productData, name: e.target.value })
                            }
                            className="w-full border-solid p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            placeholder="Price"
                            onChange={(e) =>
                                setProductData({ ...productData, price: e.target.value })
                            }
                            className="w-full border-solid  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                         </div>
                         <label htmlFor="price_sale" className="block text-sm font-medium text-gray-700 mb-1">
                         price_sale
                        </label>
                        <input
                            id="price"
                            type="number"
                            placeholder="price_sale"
                            onChange={(e) =>
                                setProductData({ ...productData, price_sale: e.target.value })
                            }
                            className="w-full border-solid  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                          description
                        </label>
                        <input
                            id="price"
                            type="text"
                            placeholder="description"
                            onChange={(e) =>
                                setProductData({ ...productData, description: e.target.value })
                            }
                            className="w-full border-solid  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                          rating
                        </label>
                        <input
                            id="price"
                            type="text"
                            placeholder="rating"
                            onChange={(e) =>
                                setProductData({ ...productData, rating: e.target.value })
                            }
                            className="w-full border-solid  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                          <label htmlFor="favourite" className="block text-sm font-medium text-gray-700 mb-1">
                          favourite
                        </label>
                        <input
                            id="price"
                            type="text"
                            placeholder="favourite"
                            onChange={(e) =>
                                setProductData({ ...productData, favourite: e.target.value })
                            }
                            className="w-full border-solid  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                   
                    <div className="flex justify-between mt-5">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {isLoading ? "Adding..." : "Add Product"}
                        </button>
                        <button
                            type="button"
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                        >
                            <a href="/testget">Cancel</a>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProductForm;
