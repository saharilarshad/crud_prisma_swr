import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  //   const [inputs, setInputs] = useState({
  //     name: "",
  //     price: null,
  //   });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    await axios.post("http://localhost:5000/api/product", {
      name,
      price:parseInt(price),
    });
    navigate("/");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  //   console.log(inputs);
  // console.log(name);
  // console.log(price);

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={handleSubmit} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label htmlFor="" className="font-bold text-slate-700">
              Product Name
            </label>
            <input
              //   name="name"
              //   onChange={handleChange}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="" className="font-bold text-slate-700">
              Price
            </label>
            <input
              //   name="price"
              //   onChange={handleChange}
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
            />
          </div>
          <button
            // onClick={handleSubmit}
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
