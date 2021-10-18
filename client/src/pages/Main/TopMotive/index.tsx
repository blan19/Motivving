/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import {
  SliderContainer,
  SliderContents,
  SliderWrapper,
  StyledResponsive,
  StyledResponsiveStyles,
  TopMotiveContainer,
  TopMotiveContainerStyles,
} from './styles';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const TopMotive = () => {
  const theme = useTheme();
  const domRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper>();
  const ARRAY_LIST: number[] = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const mySwiper = new Swiper(domRef.current!, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 15,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
      },
    });
    swiperRef.current = mySwiper;
    return () => swiperRef.current!.destroy(true, true);
  }, []);
  return (
    <TopMotiveContainer css={TopMotiveContainerStyles(theme)}>
      <div className="title">
        <h1>Motivving Top 10</h1>
      </div>
      <StyledResponsive>
        <div
          className="prev"
          css={StyledResponsiveStyles(theme)}
          onClick={() => swiperRef.current!.slidePrev()}
        >
          <IoIosArrowDropleftCircle />
        </div>
        <div
          className="next"
          css={StyledResponsiveStyles(theme)}
          onClick={() => swiperRef.current!.slideNext()}
        >
          <IoIosArrowDroprightCircle />
        </div>
        <SliderContainer className="swiper-container" ref={domRef}>
          <SliderWrapper className="swiper-wrapper">
            {ARRAY_LIST.map((item) => (
              <SliderContents className="swiper-slide" key={item}>
                <div className="thumb"></div>
              </SliderContents>
            ))}
          </SliderWrapper>
        </SliderContainer>
      </StyledResponsive>
    </TopMotiveContainer>
  );
};

export default TopMotive;
