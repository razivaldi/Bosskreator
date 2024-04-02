import UserReview from "./UserReview";

export default function Reviews () {
  return (
    <div className="divide-y">
      {Array.from({ length: 2 }, (_, i) => (
        <div key={i} className="last:pb-0 first:pt-0 py-6">
          <UserReview key={i} />
        </div>
      ))}
    </div>
  );
};
