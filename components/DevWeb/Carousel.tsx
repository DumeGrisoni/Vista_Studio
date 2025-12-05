import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCardStyle = (index: number) => {
    const totalCards = children.length;
    let position = index - currentIndex;

    // Handle circular positioning
    if (position < -Math.floor(totalCards / 2)) {
      position += totalCards;
    } else if (position > Math.floor(totalCards / 2)) {
      position -= totalCards;
    }

    if (position === 0) {
      // Center card - full size
      return {
        transform: 'translateX(0) translateY(0) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
      };
    } else if (position === -1) {
      // Left card - behind and to the left
      return {
        transform: 'translateX(-40%) translateY(15px) scale(0.85)',
        opacity: 0.3,
        zIndex: 20,
        pointerEvents: 'none' as const,
      };
    } else if (position === 1) {
      // Right card - behind and to the right
      return {
        transform: 'translateX(40%) translateY(15px) scale(0.85)',
        opacity: 0.3,
        zIndex: 20,
        pointerEvents: 'none' as const,
      };
    } else {
      // Hidden cards
      return {
        transform:
          position < 0
            ? 'translateX(-25%) translateY(15px) scale(0.85)'
            : 'translateX(25%) translateY(15px) scale(0.85)',
        opacity: 0,
        zIndex: 10,
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <div className="relative mt-6">
      {/* Main carousel content */}
      <div className="relative h-[400px] flex items-center justify-center">
        {children.map((child, index) => {
          const style = getCardStyle(index);
          return (
            <div
              key={index}
              className="absolute w-full transition-all duration-700 ease-in-out"
              style={style}
            >
              {child}
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-noir/20 hover:border-noir/40 transition-all shadow-md hover:shadow-lg z-40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-noir/20 hover:border-noir/40 transition-all shadow-md hover:shadow-lg z-40"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-12">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-noir w-8'
                : 'bg-noir/30 hover:bg-noir/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
