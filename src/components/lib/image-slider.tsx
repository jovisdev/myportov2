"use client"

import React from "react";
import Image from "next/image";
import { dataCertificate } from "./static";

interface ImageSliderProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const ImageSlider : React.FC<ImageSliderProps> = ({current, setCurrent}) => {

    const images = dataCertificate;

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Wrapper */}
      <div className="relative flex justify-center w-full h-[240px] overflow-hidden">
        {images.map((item, index) => {
          let position = index - current;

          // looping
          if (position < -2) position += images.length;
          if (position > images.length - 3) position -= images.length;

          return (
            <div
              key={item.id}
              className="absolute flex flex-col w-80 font-bold transition-all duration-700"
              style={{
                transform: `translateX(${position * 250}px) scale(${
                  position === 0 ? 1 : 0.8
                })`,
                zIndex: position === 0 ? 10 : 1,
                opacity: Math.abs(position) > 1 ? 0 : 1,
                filter: position === 0 ? "none" : "blur(2px) brightness(40%)",
              }}
            >
              <div className="w-full h-56 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
