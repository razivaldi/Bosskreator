import Description from "@/components/productpage/Description";
import ImageGallery from "@/components/productpage/ImageGallery";
import Reviews from "@/components/productpage/Reviews";
import React, { useState } from "react";
import { FaRegClock, FaStar } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";

const product = {
  SKU: "2",
  title: "UX Brainstorming dengan Invision App",
  name: "Wireless Bluetooth Headphones",
  description:
    "Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae. Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leoed diam lacus ultrices egestas elit ultrices nisl vitae.",
  price: "Free",
  publisher: "Erlannga",
  category: "Course",
  stock: 50,
  rating: 5,
  images: [
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  ],
};
const Product = () => {
  const [selected, setSelected] = useState("description");
  return (
    <main
      className="pt-[119px] w-full"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #1E1E1E 12.88%, rgba(0, 0, 0, 0) 100%)",
        backgroundSize: "100% 860px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="max-w-[1030px] mx-auto gap-8 lg:flex items-center">
        <ImageGallery images={product.images} />
        {/* RIGHT SIDE */}
        <div
          className={`flex flex-col mt-10 lg:mt-0 gap-4 lg:gap-8 mx-10 lg:mx-0 lg:w-full`}
        >
          <p
            className={`text-xs font-semibold w-fit rounded px-6 py-2 ${
              product.category === "Ebook" ? "bg-[#EF5DA8]" : "bg-accent"
            }`}
          >
            {product.category}
          </p>
          <h1 className="font-monument leading-[1.1] text-lg md:text-[42px]">
            {product.title}
          </h1>
          {product.category === "Ebook" ? (
            <p className={`font-medium text-lg line-clamp-4`}>
              {product.description}
            </p>
          ) : (
            <>
              <div className="flex gap-7 font-medium text-lg md:text-2xl text-accent">
                <p className="flex justify-center items-center gap-3.5">
                  <FiFileText />
                  <span>16 Lessons</span>
                </p>
                <p className="flex justify-center items-center gap-3.5">
                  <FaRegClock />
                  <span>5 Weeks</span>
                </p>
              </div>
              <p className={`font-medium text-xs md:text-lg line-clamp-3`}>
                {product.description}
              </p>
            </>
          )}
          <div className="flex gap-10 items-center">
            <p className="font-bold text-2xl">{product.price}</p>
            <p className="flex items-center">
              <FaStar className="text-[#FFD600]" />
              {product.rating}
              <span>({product.rating})</span>
            </p>
          </div>
          <div>
            <button className="py-3 px-4 md:py-4 md:px-8 bg-accent font-medium rounded-full mr-6 text-sm">
              {product.category === "Ebook" ? "Download" : "Start Learning"}
            </button>
            {product.category === "Ebook" && (
              <button className=" md:py-4 md:px-8 bg-white-20 font-medium rounded-full text-sm">
                Preview
              </button>
            )}
          </div>
        </div>
      </section>
      {/* DESCRIPION & REVIEW SECTION */}
      <section className="max-w-[1030px] mx-10 lg:mx-auto mt-10 md:mt-[72px]">
        <div className="font-monument text-2xl">
          <button
            className={`${
              selected === "description" &&
              "text-accent underline underline-offset-4"
            } mr-9`}
            onClick={() => setSelected("description")}
          >
            Description
          </button>
          <button
            className={`${
              selected === "reviews" &&
              "text-accent underline underline-offset-4"
            }`}
            onClick={() => setSelected("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className="mt-6 md:mt-[42px] mb-[198px] ">
          {selected === "description" && <Description product={product} />}
          {selected === "reviews" && <Reviews product={product} />}
        </div>
      </section>
    </main>
  );
};

export default Product;
