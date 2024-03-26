import React from "react";
import UserReview from "./UserReview";

const Reviews = () => {
  return (
    <div className="divide-y">
      {Array.from({ length: 2 }, (_, i) => (
        <div className="last:pb-0 first:pt-0 py-6">
          <UserReview key={i} />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
