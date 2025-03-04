import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

import Slider from "react-slick";
import { ReviewCard } from "../components";
import { reviews } from "../constants";
import Modal from "../components/Modal";


const CustomerReviews = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideoURL, setCurrentVideoURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="reviews" className="max-w-[1200px] mx-auto w-full py-10">
      <h3 className="font-worksans text-center text-4xl font-bold">
        Что говорят наши
        <span className="text-coral-red underline underline-offset-[0.75rem]"> участники?</span>
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Отзывы тех, кто уже испытал перемены
      </p>
      <Slider {...sliderSettings} className="mt-24">
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