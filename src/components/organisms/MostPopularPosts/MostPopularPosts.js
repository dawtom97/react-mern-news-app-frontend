import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { SwiperCard } from '../../molecules/SwiperCard/SwiperCard'
import * as Styled from './styles'
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

const MostPopularPosts = ({posts}) => {
  return (
    <Styled.Wrapper>
      <SectionTitle title="Most popular news" subtitle="See the most rated news."/>
      <Styled.SwiperWrapper
          spaceBetween={30}
          modules={[Autoplay]}
          slidesPerView={1.4}
          loop={true}
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
    </Styled.Wrapper>
  )
}

export default MostPopularPosts