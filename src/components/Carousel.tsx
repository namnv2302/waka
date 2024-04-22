interface CarouselProps {
  title: string;
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ title, children }) => {
  return (
    <div className="bg-background container-block">
      <h2 className="font-medium text-[26px] leading-[33px] text-white-50">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default Carousel;
