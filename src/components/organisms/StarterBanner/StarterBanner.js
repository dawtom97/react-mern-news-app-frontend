import React, { memo } from "react";
import * as Styled from "./styles";
import { banner } from "../../../constants/banner";
import { showGreeting } from "../../../utils/showGreeting";
import { showWarDay } from "../../../utils/showWarDay";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperCard } from "../../molecules/SwiperCard/SwiperCard";
import { Autoplay } from "swiper";

const StarterBanner = ({ posts }) => {
  const greeting = showGreeting();
  const warDay = showWarDay();
  console.log(posts)
  return (
    <Styled.Wrapper>
      <Styled.TextBox>
        <div>
          <h1>{greeting}</h1>
          <p>
            Welcome to the <span>Daily News</span>
          </p>
          <p>
            Today <span>{warDay}</span> days have passed since Russia launched a
            full-scale invasion of Ukraine
          </p>
          <p>
            <strong>See the latest information</strong>
          </p>
        </div>

        <Styled.SwiperWrapper
          spaceBetween={30}
          modules={[Autoplay]}
          slidesPerView={1.4}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          loop={true}
          speed={9000}
          breakpoints={{
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
            768: {
              width: 768,
              slidesPerView: 2.5,
            },
            640: {
              width: 640,
              slidesPerView: 1.8,
            },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post._id}>
              <SwiperCard post={post}/>
            </SwiperSlide>
          ))}
        </Styled.SwiperWrapper>
      </Styled.TextBox>

      <Styled.ImageBox image={banner.image}></Styled.ImageBox>
    </Styled.Wrapper>
  );
};

export default memo(StarterBanner);
