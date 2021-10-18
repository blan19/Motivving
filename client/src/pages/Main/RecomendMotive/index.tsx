/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useCallback, useEffect, useRef, VFC } from 'react';
import {
  RecomendMotiveContainer,
  RecomendMotiveContainerStyles,
  RecomendResponsive,
  titleStyles,
} from './styles';
import RecomendMotiveContent from './RecomendContent';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

interface PropsTypes {
  type: string;
}

const RecomendMotive: VFC<PropsTypes> = ({ type }) => {
  const theme = useTheme();
  const domRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper>();
  const ARRAY_LIST: number[] = [1, 2, 3, 4, 5, 6];

  const createTitle = useCallback(() => {
    if (type === 'challenge') {
      return (
        <>
          <h1>
            새로운 <span>도전</span>을 위한 준비
          </h1>
        </>
      );
    }
  }, [type]);

  useEffect(() => {
    const mySwiper = new Swiper(domRef.current!, {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 15,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        480: {
          slidesPerView: 3,
        },
      },
    });
    swiperRef.current = mySwiper;
    return () => swiperRef.current!.destroy(true, true);
  }, []);
  return (
    <RecomendMotiveContainer css={RecomendMotiveContainerStyles(theme)}>
      <RecomendResponsive>
        <div className="title" css={titleStyles(theme)}>
          {createTitle()}
        </div>
      </RecomendResponsive>
      <RecomendResponsive>
        <div className="prev" onClick={() => swiperRef.current!.slidePrev()}>
          <IoIosArrowBack />
        </div>
        <div className="next" onClick={() => swiperRef.current!.slideNext()}>
          <IoIosArrowForward />
        </div>
        <div className="swiper-container" ref={domRef}>
          <div className="swiper-wrapper">
            {ARRAY_LIST.map((item) => (
              <div className="swiper-slide" key={item}>
                <RecomendMotiveContent />
              </div>
            ))}
          </div>
        </div>
      </RecomendResponsive>
    </RecomendMotiveContainer>
  );
};

export default RecomendMotive;
