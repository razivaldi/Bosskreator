import Description from "@/components/productpage/Description";
import ImageGallery from "@/components/productpage/ImageGallery";
import Reviews from "@/components/productpage/Reviews";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const product = {
  "SKU": "2",
  "title": "UX Brainstorming dengan Invision App",
  "name": "Wireless Bluetooth Headphones",
  "description": "Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leo. Sed diam lacus ultrices egestas elit ultrices nisl vitae. Lorem ipsum dolor sit amet consectetur. Lacus orci cursus ut magnis quam ullamcorper eget leoed diam lacus ultrices egestas elit ultrices nisl vitae.",
  "price": 'Free',
  "publisher": "Erlannga",
  "category": "Ebook",
  "stock": 50,
  "rating": 5,
  "images": [
    '/product/product.png',
    '/product/product1.png',
    '/product/product2.png',
  ]
}
const Product = () => {
  const [selected, setSelected] = useState('description');
  return (
    <main className="w-full pt-[119px]" style={{ backgroundImage: 'linear-gradient(180deg, #1E1E1E 12.88%, rgba(0, 0, 0, 0) 100%)', backgroundSize: '100% 860px', backgroundRepeat: 'no-repeat' }}>
      <section className="w-[1030px] mx-auto gap-8 flex justify-between items-center">
        <ImageGallery images={product.images} />
        <div>
          <p className={`text-xs font-semibold w-fit rounded px-3 py-1 mb-8 ${product.category === 'Ebook' ? 'bg-[#EF5DA8]' : 'bg-accent'}`}>Ebook</p>
          <h1 className="font-monument leading-[1.1] text-[42px]">{product.title}</h1>
          <p className="my-7 font-medium text-lg line-clamp-3">{product.description}</p>
          <div className="flex gap-4 items-center pb-8">
            <p className="font-bold text-2xl">{product.price}</p>
            <p className="flex items-center"><FaStar className="text-[#FFD600]" />{product.rating}<span>({product.rating})</span></p>
          </div>
          <div>
            <button className="py-4 px-8 bg-accent font-medium rounded-full mr-6 text-sm">Download</button>
            <button className="py-4 px-8 bg-white-20 font-medium rounded-full text-sm">Preview</button>
          </div>
        </div>
      </section>
      {/* DESCRIPION & REVIEW SECTION */}
      <section className="w-[1030px] mx-auto mt-[72px]">
        <div className="font-monument text-2xl">
          <button className={`${selected === 'description' && 'text-accent underline underline-offset-4'} mr-9`} onClick={() => setSelected('description')}>Description</button>
          <button className={`${selected === 'reviews' && 'text-accent underline underline-offset-4'}`} onClick={() => setSelected('reviews')}>Reviews</button>
        </div>
        <div className="mt-[42px] mb-[198px] h-52">
          {selected === 'description' && <Description product={product} />}
          {selected === 'reviews' && <Reviews product={product} />}
        </div>
      </section>
    </main>
  )
};

export default Product;
