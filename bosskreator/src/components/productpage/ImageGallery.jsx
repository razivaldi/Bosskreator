import Image from "next/image";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [main, setMain] = useState(0);

  return (
    <div className="w-[420px]">
      <div className="w-full h-[420px] relative mb-[17px] rounded-[24px] overflow-hidden">
        <Image src={images[main]} fill alt="product" style={{ objectFit: "cover" }} />
      </div>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-[140px] h-[140px] relative hover:cursor-pointer rounded-[18px] overflow-hidden" onClick={() => setMain(index)}>
            <Image src={image} fill alt="product" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default ImageGallery;
