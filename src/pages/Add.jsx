import React, { useState } from "react";
import Header from "../components/add/Header";
import FileUpload from "../components/add/FileUpload";
import ProductDetails from "../components/add/ProductDetails";
import AddButton from "../components/add/AddButton";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Dresses");
  const [subCategory, setSubCategory] = useState("Casual");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Casual");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Accessories");

  return (
    <form className="w-full max-w-md mx-auto">
      <section className="bg-white rounded-xl shadow-sm custom-shadow p-6">
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
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
      />
      <AddButton />
    </form>
  );
};

export default Add;
