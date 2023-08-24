import React from "react";
import "../styles/testimonial.css";
import Slider from "react-slick";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

const testData = [
  {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, eveniet ipsam reprehenderit unde obcaecati et molestiae reiciendis voluptatum illum, repellat, beatae praesentium voluptatibus amet suscipit consectetur deserunt odio libero nisi consequatur sed! Consequatur quo quas dolores eum repellendus totam.",
    imgUrl: ava01,
    name: "John Doe",
    position: "CEO, Workcreation",
  },
  {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, eveniet ipsam reprehenderit unde obcaecati et molestiae reiciendis voluptatum illum, repellat, beatae praesentium voluptatibus amet suscipit consectetur deserunt odio libero nisi consequatur sed! Consequatur quo quas dolores eum repellendus totam.",
    imgUrl: ava02,
    name: "Jack Daniels",
    position: "Sr. Product developer",
  },
  {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, eveniet ipsam reprehenderit unde obcaecati et molestiae reiciendis voluptatum illum, repellat, beatae praesentium voluptatibus amet suscipit consectetur deserunt odio libero nisi consequatur sed! Consequatur quo quas dolores eum repellendus totam.",
    imgUrl: ava03,
    name: "John wick",
    position: "Fullstack developer",
  },
];
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 Customers</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            {testData.map((item, index) => (
              <div className="slider__item" key={index}>
                <p className="description">{item.desc}</p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={item.imgUrl} alt={item.imgUrl} />
                  </div>
                  <div>
                    <h5 className="customer__name">{item.name}</h5>
                    <p className="description">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
