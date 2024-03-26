import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const review = {
  image:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Maria Yuanita",
  email: "mariayun45@email.com",
  star: 4,
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis at velit dolores similique nostrum eveniet voluptatum qui quaerat cumque soluta? Aperiam molestiae totam beatae quaerat iusto excepturi, illum eos ab.",
  createdAt: "January 17, 2024",
};

const UserReview = () => {
  return (
    <div className="relative z-10">
      <div className="flex gap-4 items-center ">
        <div className="relative rounded-full w-[50px] h-[50px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="person"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div>
          <p>{review.name}</p>
          <p>{review.email}</p>
        </div>
        <div>
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`${
                i < review.star ? "text-yellow-500" : "text-gray-300"
              } inline-block ml-2 text-2xl`}
            >
              <FaStar />
            </span>
          ))}
        </div>
      </div>
      <p className="my-6 font-medium text-xl">{review.text}</p>
      <p className="text-[#A5A6F6] font-medium text-xl">{review.createdAt}</p>
    </div>
  );
};

export default UserReview;
