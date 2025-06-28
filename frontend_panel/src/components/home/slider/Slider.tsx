// SliderComponent.tsx
import SliderCards from "./SliderCards";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sliderData } from "../../../data/data";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute right-3 bottom-[165px] z-10" onClick={onClick}>
    <button className="w-8 h-8 rounded-full bg-white  border-2 border-gray-300  flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors">
      <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-400" />
    </button>
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="absolute left-3 top-[165px] z-10" onClick={onClick}>
    <button className="w-8 h-8 rounded-full bg-white  border-2 border-gray-300  flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors">
      <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-400" />
    </button>
  </div>
);

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <ul className="m-0 p-0 relative bottom-8">{dots}</ul>
    ),
    customPaging: () => (
      <div className="w-2.5 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
    ),
    dotsClass: "slick-dots !flex justify-center gap-1",
  };

  return (
    <div className="relative">
      <div className="news_list">
        <Slider {...settings} className="relative">
          {sliderData?.map((item, index) => (
            <SliderCards item={item} index={index} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponent;
