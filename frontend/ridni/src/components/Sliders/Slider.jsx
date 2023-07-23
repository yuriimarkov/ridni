import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Імпортуйте стилі для вашого компонента styles
import styles from "./Slider.module.css";
import promoStyles from "./../../pages/Promo/Promo.module.css"
// Імпортуйте зображення для слайдів
import promoJewelery from "./../../assets/images/promoJewelery.png";
import promoDecor from "./../../assets/images//promoDecor.png";
import promoForHome from "./../../assets/images/promoForHome.png";

// Імпортуйте Button компонент, який ви використовуєте
import Button from "../Button/Button";

const Slider = () => {
  return (
      <Swiper
        breakpoints={{
            1200: {
              spaceBetween: 50,
              slidesPerGroup: 3,
              slidesPerView: 3,

            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
              slidesPerGroup: 1,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        pagination={{
          clickable: true,
          bulletClass: styles.swiperPaginationBullet,
          bulletActiveClass: styles.swiperPaginationBulletActive,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={promoStyles.cardItem}>
            <div className={promoStyles.imageHolder}>
              <img src={promoJewelery} alt="pictures" />
            </div>
            <h3 className={promoStyles.itemHeading}>Jewelery and accessories</h3>
            <div className={promoStyles.textHolder}>
              <p className={promoStyles.paragraph}>
                Adorn yourself with exquisite handmade jewelry and accessories,
                crafted by talented artisans with love and soul
              </p>
            </div>
            <div className={promoStyles.buttonHolder}>
              <Button className='btn yellowBtn' text={"Want it!"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={promoStyles.cardItem}>
            <div className={promoStyles.imageHolder}>
              <img src={promoDecor} alt="pictures" />
            </div>
            <h3 className={promoStyles.itemHeading}>Decor</h3>
            <div className={promoStyles.textHolder}>
              <p className={promoStyles.paragraph}>
                Find one-of-a-kind handmade decor pieces that bring charm and
                personality to any room at your home
              </p>
            </div>
            <div className={promoStyles.buttonHolder}>
              <Button
                className='btn yellowBtn'
                text={"Want it!"}
                onClick={() => {}}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={promoStyles.cardItem}>
            <div className={promoStyles.imageHolder}>
              <img src={promoForHome} alt="pictures" />
            </div>
            <h3 className={promoStyles.itemHeading}>For home</h3>
            <div className={promoStyles.textHolder}>
              <p className={promoStyles.paragraph}>
                Discover handmade treasures to elevate your living space with
                unique decor, textiles, ceramics, and furniture
              </p>
            </div>
            <div className={promoStyles.buttonHolder}>
              <Button className='btn yellowBtn' text={"Want it!"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={promoStyles.cardItem}>
            <div className={promoStyles.imageHolder}>
              <img src={promoJewelery} alt="pictures" />
            </div>
            <h3 className={promoStyles.itemHeading}>Jewelery and accessories</h3>
            <div className={promoStyles.textHolder}>
              <p className={promoStyles.paragraph}>
                Adorn yourself with exquisite handmade jewelry and accessories,
                crafted by talented artisans with love and soul
              </p>
            </div>
            <div className={promoStyles.buttonHolder}>
              <Button className='btn yellowBtn' text={"Want it!"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={promoStyles.cardItem}>
            <div className={promoStyles.imageHolder}>
              <img src={promoDecor} alt="pictures" />
            </div>
            <h3 className={promoStyles.itemHeading}>Decor</h3>
            <div className={promoStyles.textHolder}>
              <p className={promoStyles.paragraph}>
                Find one-of-a-kind handmade decor pieces that bring charm and
                personality to any room at your home
              </p>
            </div>
            <div className={promoStyles.buttonHolder}>
              <Button
                className='btn yellowBtn'
                text={"Want it!"}
                onClick={() => {}}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={promoStyles.cardItem}>
            <div className={promoStyles.imageHolder}>
              <img src={promoForHome} alt="pictures" />
            </div>
            <h3 className={promoStyles.itemHeading}>For home</h3>
            <div className={promoStyles.textHolder}>
              <p className={promoStyles.paragraph}>
                Discover handmade treasures to elevate your living space with
                unique decor, textiles, ceramics, and furniture
              </p>
            </div>
            <div className={promoStyles.buttonHolder}>
              <Button className='btn yellowBtn' text={"Want it!"} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Slider;
