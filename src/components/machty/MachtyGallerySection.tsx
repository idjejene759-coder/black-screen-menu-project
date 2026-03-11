import { useState } from "react";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const galleryImages = [
  {
    src: "https://cdn.poehali.dev/files/68df293b-53a7-4932-bd60-36437d60be60.png",
    alt: "Монтаж крановой мачты г. Кемерово",
  },
  {
    src: "https://cdn.poehali.dev/files/ed120cc2-2508-4f24-9a50-d1aa58fabca3.png",
    alt: "Монтаж крановой мачты г. Кемерово",
  },
  {
    src: "https://cdn.poehali.dev/files/2bcdb5cc-5dd3-430d-95f7-e6fc89359026.png",
    alt: "Монтаж крановой мачты МК 16С г. Пенза",
  },

  {
    src: "https://cdn.poehali.dev/files/252c1093-e282-4bc0-a25b-886be649b1c0.png",
    alt: "Монтаж крановой мачты МК 16С г. Пенза",
  },
  {
    src: "https://cdn.poehali.dev/files/010ab23d-2126-43eb-9f51-c0598343a7c6.png",
    alt: "Монтаж крановой мачты МК 16С г. Пенза",
  },
  {
    src: "https://cdn.poehali.dev/files/f5e26a31-154a-4b26-8cda-ddaf61511994.png",
    alt: "Монтаж крановой мачты г. Симферополь",
  },
  {
    src: "https://cdn.poehali.dev/files/3f496d09-1eeb-4735-ad82-bb050eeefed5.png",
    alt: "Монтаж крановой мачты г. Симферополь",
  },
  {
    src: "https://cdn.poehali.dev/files/e95bb137-1af6-454e-bc51-2357d32a3a3c.png",
    alt: "Монтаж крановой мачты г. Симферополь",
  },
];

const MachtyGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Фотогалерея
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-base md:text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Фото в полном размере"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default MachtyGallerySection;