import { BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import ProductDeleteButton from "../../components/productDeleteButton";


export default function AdminProductsPage() {

const [products, setProducts] = useState([]);
const [loaded, setLoaded] = useState(false); // To track loading state
const [error, setError] = useState(null); // To track error state
const navigate = useNavigate();

useEffect( ()=> {  // Methanadi wenne useEfffect hook ekak use karala page eka load unaama eka call karanna.
  if(!loaded){
  axios.get(import.meta.env.VITE_BACKEND_URL + "/products/").then(
    (response)=>{
      console.log(response.data);
      setProducts(response.data);
      setLoaded(true);  //meek danne ethkot product ekak delete kalama ee welawema eek load wela product list ek update wenawa. aye apit load krnn one ne.
    }
  );
}
},[loaded]);

// axios.get(import.meta.env.VITE_BACKEND_URL + "/products/").then(
//   (response)=>{
//     console.log(response.data);
//     setProducts(response.data);
//   }
// )

   return (
    <div className="w-full min-h-screen flex justify-center px-4 py-6 sm:px-6 md:px-10 bg-primary text-secondary custom-scrollbar">
      
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-4 sm:p-6 overflow-hidden custom-scrollbar">
        <h1 className="text-3xl font-semibold mb-6 tracking-wide text-secondary">
          All Products
        </h1>

        {loaded?
        <div className="w-full overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse">
          <thead>
            <tr className="bg-secondary text-primary text-left text-sm uppercase tracking-wider">
              <th className="py-3 px-4 rounded-l-xl">Image</th>
              <th className="py-3 px-4">Product ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Labelled Price</th>
              <th className="py-3 px-4">Brand</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4">Availability</th>
              <th className="py-3 px-4 rounded-r-xl">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-accent/30">
            {products.map((item) => (
              <tr
                key={item.productID}
                className="hover:bg-primary/70 transition-all ease-in-out"
              >
                <td className="py-3 px-4">
                  <img
                    src={item.images[0]}
                    className="w-[40px] h-[40px] rounded-md shadow-md object-cover"
                  />
                </td>
                <td className="py-3 px-4 font-medium">{item.productID}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.category}</td>
                <td className="py-3 px-4 font-semibold text-gold">
                  Rs. {item.price}
                </td>
                <td className="py-3 px-4 text-accent">
                  Rs. {item.labelledPrice}
                </td>
                <td className="py-3 px-4">{item.brand}</td>
                <td className="py-3 px-4">{item.stock}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    item.isAvailable ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.isAvailable ? "Available" : "Unavailable"}
                </td>
                <td className="py-3 px-4 flex gap-2">
                  {/* <Link 
                    to="/admin/update-product"
                    className="px-3 py-1 bg-accent/20 text-grey rounded-md w-[60px] flex justify-center items-center hover:bg-accent/40 transition-all "
                    state={item}>
                      Edit
                    </Link> */}
                    <button 
                    onClick={() => {
                      navigate("/admin/update-product", {state: item});
                    }}
                    className="px-3 py-1 bg-accent/20 text-grey rounded-md w-[60px] flex justify-center items-center hover:bg-accent/40 transition-all ">
                      Edit
                    </button>
                  <ProductDeleteButton productID = {item.productID} reload={() => setLoaded(false)}  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        :<Loader />}
      </div>

      {/* Floating Add Button */}
      <Link
        to="/admin/add-product"
        className="fixed right-8 bottom-8 w-[60px] h-[60px] flex justify-center items-center rounded-full bg-secondary hover:bg-gold text-primary shadow-2xl text-4xl transition-all"
      >
        <BiPlus />
      </Link>
    </div>
  );
}