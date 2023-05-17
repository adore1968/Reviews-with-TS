import { useAppContext } from "../hooks/AppContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Review() {
  const { review, handleLeft, handleRight, handleSurprise } = useAppContext();
  return (
    <div className="bg-white p-5 text-center">
      <img
        src={review.image}
        alt={review.name}
        className="mx-auto mb-2.5 h-[128px] w-32 rounded-full object-cover"
      />
      <div className="mb-5">
        <h3 className="mb-0.5 text-xl font-semibold sm:text-2xl">
          {review.name}
        </h3>
        <span className="mb-2.5 block text-lg text-blue-600 sm:text-xl">
          {review.job}
        </span>
        <p className="text-lg sm:text-xl">{review.text}</p>
      </div>
      <div className="text-lg sm:text-xl">
        <div className="mb-2.5 flex items-center justify-center gap-2.5 text-blue-600">
          <FaArrowLeft
            onClick={() => handleLeft()}
            className="cursor-pointer"
          />
          <FaArrowRight
            onClick={() => handleRight()}
            className="cursor-pointer"
          />
        </div>
        <button
          onClick={() => handleSurprise()}
          className="inline-block rounded bg-blue-100 px-2 py-1 text-blue-600"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Review;
