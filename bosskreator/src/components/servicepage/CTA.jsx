import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Fleur Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Web Programmer, Sisyphus",
    testimonial:
      "Outstanding service! BOSS KREATOR exceeded all expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Fleur Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Web Developer, Sisyphus",
    testimonial:
      "Game-changer! BOSS KREATOR helped us achieve remarkable growth. Thank you!",
  },
  {
    id: 3,
    name: "Fleur Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "UI/UX Developer, Sisyphus",
    testimonial:
      "Incredible results! BOSS KREATOR sets the standard for excellence. Delighted with their service!",
  },
];

export default function CTA () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="w-[90%] mx-auto bg-[#090918] p-8 md:p-16 rounded-2xl my-10 md:my-28">
      <h2 className="inline-flex mb-8 text-center font-medium text-xl md:text-4xl">
        <span>
          <ImQuotesLeft />
        </span>
        {data[currentIndex]?.testimonial}
        <span>
          <ImQuotesRight />
        </span>
      </h2>
      <div className="flex justify-center items-center gap-2 md:gap-12">
        <button
          className="h-10 w-10 md:h-12 md:w-12 bg-white-20 rounded-full flex justify-center items-center hover:bg-white/30"
          onClick={goToPrevSlide}
        >
          <FaArrowLeft />
        </button>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden relative mb-4">
              <Image
                src={item.imageUrl}
                fill
                sizes="33vw"
                style={{ objectFit: "cover" }}
                alt="person"
              />
            </div>
            <p>{item.name}</p>
            <p>{item.position}</p>
          </div>
        ))}
        <button
          className="h-10 w-10 md:h-12 md:w-12 bg-white-20 rounded-full flex justify-center items-center hover:bg-white/30"
          onClick={goToNextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};
