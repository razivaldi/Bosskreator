import Image from "next/image";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [main, setMain] = useState(0);

  return (
    <div className="mx-auto px-5 lg:px-0 w-full max-w-xl">
      <div className="w-full h-[420px] relative mb-[17px] rounded-[24px] overflow-hidden">
        <Image
          src={images[main]}
          fill
          sizes="100vw"
          alt="product"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="grid gap-4 grid-cols-3 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              main === index ? "ring-2 ring-accent" : ""
            } h-[130px] relative hover:cursor-pointer rounded-[18px] overflow-hidden`}
            onClick={() => setMain(index)}
          >
            <Image
              src={image}
              fill
              sizes="30vw"
              alt="product"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
