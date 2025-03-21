import React, { useState } from "react";
import Header from "../components/add/Header";
import FileUpload from "../components/add/FileUpload";
import ProductDetails from "../components/add/ProductDetails";
import AddButton from "../components/add/AddButton";
import axios from "axios";
import { backendUrl } from "../App";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(100);
  const [category, setCategory] = useState("Dresses");
  const [subCategory, setSubCategory] = useState("Casual");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      console.log(response);
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8"
    >
      <section className="bg-white rounded-xl shadow-sm custom-shadow p-6 sm:p-8">
        <Header />
        <FileUpload
          setImage1={setImage1}
          setImage2={setImage2}
          setImage3={setImage3}
          setImage4={setImage4}
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
        />
      </section>
      <ProductDetails
        name={name}
        description={description}
        category={category}
        subCategory={subCategory}
        price={price}
        bestseller={bestseller}
        sizes={sizes}
        setName={setName}
        setDescription={setDescription}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
        setPrice={setPrice}
        setBestseller={setBestseller}
        setSizes={setSizes}
      />
      <AddButton />
    </form>
  );
};

export default Add;
