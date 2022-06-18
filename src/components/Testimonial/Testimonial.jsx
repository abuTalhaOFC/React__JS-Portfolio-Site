import React from "react";
// Import Swiper styles
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from "../asset/avatar1.jpg";
import AVTR2 from "../asset/avatar2.jpg";
import AVTR3 from "../asset/avatar3.jpg";
import AVTR4 from "../asset/avatar4.jpg";
import "./testimonial.css";

const data = [
  {
    id: 1,
    avater: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum quidem perspiciatis ab saepe placeat! Itaque autem officia, corporis harum, atque, et ullam exercitationem vel quasi rerum pariatur quidem?",
  },
  {
    id: 2,
    avater: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum quidem perspiciatis ab saepe placeat! Itaque autem officia, corporis harum, atque, et ullam exercitationem vel quasi rerum pariatur quidem?",
  },
  {
    id: 3,
    avater: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum quidem perspiciatis ab saepe placeat! Itaque autem officia, corporis harum, atque, et ullam exercitationem vel quasi rerum pariatur quidem?",
  },
  {
    id: 4,
    avater: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsum rerum quidem perspiciatis ab saepe placeat! Itaque autem officia, corporis harum, atque, et ullam exercitationem vel quasi rerum pariatur quidem?",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper
        className="container testimonial__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avater, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avater">
                <img src={avater} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
