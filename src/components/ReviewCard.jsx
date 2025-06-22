import { FaPlay } from "react-icons/fa";

const ReviewCard = ({ feedback, onPlay, posterURL }) => {
  return (
    <div className="w-full max-w-[430px] mx-auto h-auto relative group">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg h-[250px] "
        style={{
          backgroundImage: `url(${posterURL})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 group-hover:opacity-100 sm:opacity-0 transition duration-300">

          <button
            onClick={onPlay}
            className="bg-white p-3 rounded-full shadow-lg text-black hover:bg-gray-100"
          >
            <FaPlay className="text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm info-text mt-6 text-center">{feedback}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
