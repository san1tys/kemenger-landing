import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewCard } from "../components";
import { reviews } from "../constants";
import Modal from "../components/Modal";

const CustomerReviews = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideoURL, setCurrentVideoURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null); // 👈

  const openModal = (videoURL) => {
    setCurrentVideoURL(videoURL);
    setModalOpen(true);
    setIsLoading(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideoURL("");
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="reviews" className="max-w-[80%] mt-40 w-full py-10 xl:ml-[300px]">
      <div className="ml-12">
        <h3 className="font-worksans text-4xl font-bold">
          Что говорят наши
          <span className="text-coral-red underline underline-offset-[0.75rem]"> участники?</span>
        </h3>
        <p className="mt-4 max-w-lg info-text">
          Отзывы тех, кто уже испытал перемены
        </p>
      </div>

      {/* СЛАЙДЕР */}
      <div className="relative mt-16">
        <Slider ref={sliderRef} {...sliderSettings}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              videoURL={review.videoURL}
              feedback={review.feedback}
              posterURL={review.posterURL}
              onPlay={() => openModal(review.videoURL)}
            />
          ))}
        </Slider>

        {/* СТРЕЛКИ СНИЗУ */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* МОДАЛ */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center text-gray-500">Загрузка...</p>
            </div>
          )}
          <video
            src={currentVideoURL}
            autoPlay
            className="w-full h-full rounded-lg"
            onCanPlay={() => setIsLoading(false)}
          ></video>
        </Modal>
      )}
    </section>
  );
};

export default CustomerReviews;
