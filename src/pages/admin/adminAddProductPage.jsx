import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import uploadFile from "../../utils/mediaUpload.js";

export default function AdminAddProductPage() {

  const [productID, setProductID] = useState("");
  const [name, setName] = useState("");
  const [altNames, setAltNames] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);  
  const [labelledPrice, setLabelledPrice] = useState(0);
  const [files, setFiles] = useState([]);
  // const [images, setImages] = useState(""); // Array to hold multiple images
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [stock, setStock] = useState(0);
  const[isAvailable,setIsAvailable]=useState(false);

  const navigate = useNavigate();
  
  async function addProduct( ){

   
    const token = localStorage.getItem("token");

    if(token==null){
      toast.error("You must be logged in as admin to add a product.");
      navigate("/login");
      return;
    }

    console.log(files);

    const imagePromises = [];
    // files.forEach(   
    //   (file)=>{  // Iterate through each selected file
    //     const promise = uploadFile(file); // Upload each file and get the promise
    //     imagePromises.push(promise); // Store the promise
    //   }
    // )

    for (let i = 0; i < files.length; i++) {
      const promise = uploadFile(files[i]); // Upload each file and get the promise
      imagePromises.push(promise);
    }

    const images = await Promise.all(imagePromises).catch((err) => {
      toast.error(`Error uploading images: ${err.message || "Supabase error"}`);
      console.error("Error uploading images", err);
      return null;
    });

    // If upload failed, stop here so we don't create a product with missing images
    if (images === null) {
      return;
    }

    if(productID==""||name==""||description==""||price<=0||category==""||brand==""||model==""||stock<0){
      toast.error("Please fill all the required fields correctly.");
      return;
    }

    try{
      const altNamesInArray = altNames.split(",")
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/products/",{
        productID: productID,
        name: name,
        altNames: altNamesInArray,
        description: description,
        price: price,
        labelledPrice: labelledPrice,
        images: images,
        category: category,
        brand: brand,
        model: model,
        stock: stock,
        isAvailable: isAvailable
     }, {
      headers :{
        authorization : "Bearer " + token
      }
     })
     toast.success("Product added successfully!");
     navigate("/admin/products");

    }catch(err){
      console.log("Error adding product");
      console.log("Error adding product. Please Try again.");
      console.log(err);
    }

  }


  
  return (
    <div className="w-full min-h-screen flex justify-center items-start px-4 py-6 sm:px-6 md:px-10 overflow-y-auto bg-primary">
      <div className="w-full max-w-3xl p-4 sm:p-6 md:p-8 bg-accent/85 rounded-2xl shadow-2xl overflow-y-visible">
        <h1 className="w-full text-xl mb-[20px] flex justify-center items-center gap-[5px]"><AiOutlineProduct />Add New Product</h1>
        <div className="w-full bg-white p-[20px] rounded-xl  flex flex-wrap justify-between shadow-2xl">
          <div className="my-[10px] w-full md:w-[48%]">
            <label>Product ID:</label>
            <input 
              type="text" 
              value={productID} 
              onChange={(e)=>{
                setProductID(e.target.value)
                }} 
                className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
            <p className="text-sm text-gray-500 text-right">Provide a unique product ID.</p>

          </div>
          <div className="my-[10px] w-full md:w-[48%]">
            <label>Product Name: </label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
          </div>
          <div className="my-[10px] w-full">
            <label>Alternative Name: </label>
            <input type="text" value={altNames} onChange={(e)=>{setAltNames(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
            <p className="text-sm text-gray-500 text-right">Seperate multiple names with comas.</p>
          </div>
          <div className="my-[10px] w-full">
            <label>Description: </label>
            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className="w-full h-[100px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px] py-[10px]"></textarea>
          </div>
          <div className="my-[10px] w-full md:w-[48%]">
            <label>Price (in Rs): </label>
            <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
          </div>
          <div className="my-[10px] w-full md:w-[48%]">
            <label>Labelled Price (in Rs): </label>
            <input type="number" value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
          </div>
          <div className="my-[10px] w-full">
            <label>Images: </label>
            <input type="file"
               multiple = {true}
               onChange={(e)=>{
                  // setImages(e.target.value) // Fix this to handle file uploads properly
                   setFiles(e.target.files);
                  }} 
              className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
            <p className="text-sm text-gray-500">Seperate multiple image URLs with comas.</p>
          </div>
          <div className="my-[10px] flex flex-col w-full md:w-[30%] ">
            <label >Category: </label>
            <select value={category} onChange={(e)=>{setCategory(e.target.value)}} className="w-full h-[40px] rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px] py-[10px]">
              <option value="Electronic Items">Electronic Items</option>
              <option value="Household Items">Household Items</option>
              <option value="Gardening Items">Gardening Items</option>
              <option value="Packing Items">Packing Items</option>
              <option value="Others">Others</option>
            </select>
            </div>
          <div className="my-[10px] w-full md:w-[30%]">
            <label>Brand: </label>
            <input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
          </div>
          <div className="my-[10px] w-full md:w-[30%]">
            <label>Model: </label>
            <input type="text" value={model} onChange={(e)=>{setModel(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
          </div>
          <div className="my-[10px] w-full md:w-[48%]">
            <label>Stock Quantity: </label>
            <input type="number" value={stock} onChange={(e)=>{setStock(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
          </div>
          <div className="my-[10px] flex flex-col w-full md:w-[48%]">
            <label>Available: </label>
            <select value={isAvailable} onChange={(e)=>{setIsAvailable(e.target.value)}} className="w-full h-[40px]  rounded-2xl focus-outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <Link to="/admin/products" className="w-full sm:w-[48%] h-[50px] bg-red-900 text-white font-bold rounded-2xl flex justify-center items-center hover:bg-gray-300 border-[2px] mt-[20px]">Cancel</Link>
          <button onClick={addProduct} className="w-full sm:w-[48%] h-[50px] bg-black text-white rounded-2xl hover:bg-accent/80 mt-[20px]">Add Product</button>
        </div>
      </div>
    </div>
  );
}