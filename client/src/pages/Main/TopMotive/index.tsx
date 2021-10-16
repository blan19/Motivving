/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useRef } from 'react';
import {
  SliderContainer,
  StyledResponsive,
  TopMotiveContainer,
  TopMotiveContainerStyles,
} from './styles';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import useSwiperRef from '../../../hook/useSwiperRef';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const TopMotive = () => {
  const theme = useTheme();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <TopMotiveContainer css={TopMotiveContainerStyles(theme)}>
      <div className="title">
        <h1>Motivving Top 10</h1>
      </div>
      <StyledResponsive>
        <SliderContainer>
          <Swiper></Swiper>
        </SliderContainer>
      </StyledResponsive>
    </TopMotiveContainer>
  );
};

export default TopMotive;
