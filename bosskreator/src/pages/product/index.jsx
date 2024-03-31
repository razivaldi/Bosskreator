import Banner from "@/components/Banner";
import FilterButton from "@/components/productpage/FilterButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";

const products = [
  {
    id: 1,
    tag: "Course",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UX Brainstorming dengan Invision App",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut sint architecto quod tempore autem fuga dicta. Voluptatum dolorem nobis accusantium eius iure numquam ad et beatae fugiat, iste ipsum?",
    price: "Rp. 200.000",
    rating: 4,
  },
  {
    id: 2,
    tag: "Ebook",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UX Brainstorming dengan Invision App",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut sint architecto quod tempore autem fuga dicta. Voluptatum dolorem nobis accusantium eius iure numquam ad et beatae fugiat, iste ipsum?",
    price: "Rp. 200.000",
    rating: 4,
  },
  {
    id: 3,
    tag: "Course",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UX Brainstorming dengan Invision App",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut sint architecto quod tempore autem fuga dicta. Voluptatum dolorem nobis accusantium eius iure numquam ad et beatae fugiat, iste ipsum?",
    price: "Rp. 200.000",
    rating: 4,
  },
  {
    id: 4,
    tag: "Course",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UX Brainstorming dengan Invision App",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut sint architecto quod tempore autem fuga dicta. Voluptatum dolorem nobis accusantium eius iure numquam ad et beatae fugiat, iste ipsum?",
    price: "Rp. 200.000",
    rating: 4,
  },
  {
    id: 5,
    tag: "Ebook",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UX Brainstorming dengan Invision App",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ut sint architecto quod tempore autem fuga dicta. Voluptatum dolorem nobis accusantium eius iure numquam ad et beatae fugiat, iste ipsum?",
    price: "Rp. 200.000",
    rating: 4,
  },
];

const Product = () => {
  const [selected, setSelected] = useState("All");
  const router = useRouter();

  return (
    <main
      className="w-full mb-20 pt-[119px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #1E1E1E 12.88%, rgba(0, 0, 0, 0) 100%)",
        backgroundSize: "100% 860px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* HEADER */}
      <div className="w-full mb-[60px] text-center ">
        <h1 className="text-[32px] md:text-[50px] font-monument mb-3.5">
          Product
        </h1>
        <p className="font-medium text-lg">See the offer products here!</p>
      </div>
      <div className="flex justify-center gap-6 mb-[60px]">
        <FilterButton
          name="All"
          selected={selected}
          setSelected={setSelected}
        />
        <FilterButton
          name="Course"
          selected={selected}
          setSelected={setSelected}
        />
        <FilterButton
          name="Ebook"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      {/* CARD SECTION */}
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 max-w-[85%] mx-auto mb-[72px] justify-items-center">
        {products
          .filter((product) =>
            selected === "All" ? product : product.tag === selected
          )
          .map((product, index) => (
            <div
              key={product.id}
              className={`rounded-[24px] overflow-hidden ${
                product.tag === "Ebook" ? "bg-[#212121]/80" : "bg-[#030832]/80"
              } hover:cursor-pointer hover:scale-[1.02] transition ease-in-out`}
              onClick={() => router.push(`/product/${product.id}`)}
            >
              <div className="relative h-[209px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "bottom" }}
                  priority
                />
              </div>
              <div className="p-4 pb-6 flex flex-col gap-4">
                <div>
                  <p
                    className={`text-xs font-semibold w-fit rounded px-3 py-1 ${
                      product.tag === "Ebook" ? "bg-[#EF5DA8]" : "bg-accent"
                    }`}
                  >
                    {product.tag}
                  </p>
                  <h3 className="font-bold text-3xl">{product.title}</h3>
                </div>
                {product.tag === "Ebook" ? (
                  <p className={`font-medium text-lg line-clamp-4`}>
                    {product.desc}
                  </p>
                ) : (
                  <>
                    <div className="flex gap-7 mt-4 font-medium text-lg text-accent">
                      <p className="flex justify-center items-center gap-3.5">
                        <FiFileText />
                        <span>16 Lessons</span>
                      </p>
                      <p className="flex justify-center items-center gap-3.5">
                        <FaRegClock />
                        <span>5 Weeks</span>
                      </p>
                    </div>
                    <p className="font-medium text-lg line-clamp-2">
                      {product.desc}
                    </p>
                  </>
                )}
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[28px]">{product.price}</p>
                  <p className="flex items-center">
                    <FaStar className="text-[#FFD600]" />
                    {product.rating}
                    <span>({product.rating})</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </section>
      <Banner />
    </main>
  );
};

export default Product;
