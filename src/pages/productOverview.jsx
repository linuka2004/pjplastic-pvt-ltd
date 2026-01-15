import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../components/loader";
import ImageSlider from "../components/imageSlider";
import { CgChevronRight } from "react-icons/cg";

export default function ProductOverview(){
    const params = useParams();
    const [product , setProduct] = useState(null);
    const [status, setStatus] = useState("loading"); //loading, error, success
    const navigate = useNavigate();

    useEffect(()=>{
        if(status =="loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/products/" + params.productID).then(
                (response)=>{
                    setProduct(response.data);
                    setStatus("success");
                }
            ).catch(
                ()=>{
                    toast.error("Product Not Found");
                    setStatus("error");
                }
            )
        }
    },[])
    return(
        <>
        {
            status == "loading" && <Loader/>
        }
        {
            status == "error" && <h1 className="text-center mt-10 text-2xl">Error loading product.</h1>
        }
        {
            status == "success" &&
            <div className="w-full h-[calc(100vh-100px)] flex flex-col lg:flex-row">
            <h1 className="text-4xl font-semibold lg:hidden text-center sticky top-0 bg-white">{product.name}</h1>

                <div className="w-full lg:w-1/2  h-full flex justify-center items-center">
                    {/* <img src={product.images[0]} className="max-w-[80%] max-h-[80%] object-contain"/> *//* Updated line to fix image rendering */} 
                    <ImageSlider images={product.images} />
                </div>
                <div className="w-full lg:w-1/2  h-full p-10 flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold hidden lg:block">{product.name}</h1>
                    <h2 className="text-lg text-secondary/80">{product.productID}</h2>
                    <h3 className="text-lg text-secondary/80 flex items-center"><CgChevronRight />{product.category}</h3>
                    {/* Alternative names*/}
                    {product.altNames.length && product.altNames.length >0 &&(
                        <h3 className="text-md text-secondary/80">{product.altNames.join(" | ")}</h3>
                    )}
                    <p className="text-md text-secondary/90  h-32 overflow-y-auto">{product.description}</p>
                    <div className="w-full">
                          {product.labelledPrice > product.price && (
                    <div>
                       <h2 className="text-secondary/80 line-through decoration-gold/70 decoration-2 mr-2 text-xl">
                           LKR. {product.labelledPrice.toFixed(2)}
                      </h2>

                      <h2 className="text-accent font-semibold text-3xl">
                          LKR. {product.price.toFixed(2)}
                     </h2>
                    </div>
                    )}
                    </div>
                    <div className="w-full flex flex-row gap-4 mt-4">
                </div>

            </div>

            </div>
        }
        </>
    )
}