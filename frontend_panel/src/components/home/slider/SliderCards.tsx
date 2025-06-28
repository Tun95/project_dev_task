// SliderCards.tsx
interface SliderCardProps {
  item: {
    img: string;
    title: string;
    description: string;
  };
  index: number;
}

function SliderCards({ item, index }: SliderCardProps) {
  return (
    <div className="relative">
      <div className="relative">
        <div className="w-full">
          <img
            src={item.img}
            alt={`Slide ${index}`}
            className="w-full h-[360px] object-cover rounded-lg"
          />
        </div>
        <div className="absolute bottom-8 left-5 text-white">
          <div className="title">
            <h4 className="text-xl font-bold">{item.title}</h4>
          </div>
          <div className="description">
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCards;
