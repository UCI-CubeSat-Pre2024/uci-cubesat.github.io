import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    '/power/img-1.jpg',
    '/structures/img-1.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 20000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[500px] h-[300px] flex justify-center items-center overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className={`max-w-[500px] max-h-full object-cover transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default ImageCarousel;
