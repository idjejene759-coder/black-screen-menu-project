import { useState } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PartImageGalleryProps {
  images: string[];
  alt: string;
}

export const PartImageGallery = ({ images, alt }: PartImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 aspect-square flex items-center justify-center">
        <Icon name="Package" size={64} className="text-gray-400" />
      </div>
    );
  }

  return (
    <div className="relative aspect-square bg-white group">
      <OptimizedImage
        src={images[currentIndex]}
        alt={`${alt} - фото ${currentIndex + 1}`}
        variant="content"
        className="w-full h-full object-cover"
      />

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            onClick={goToPrevious}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            onClick={goToNext}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-white/70 hover:bg-white"
                }`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};