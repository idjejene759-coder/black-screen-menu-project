import { OptimizedImage } from "@/components/OptimizedImage";

interface PhotoGallerySectionProps {
  images: string[];
  onImageClick: (image: string) => void;
}

export const PhotoGallerySection = ({ images, onImageClick }: PhotoGallerySectionProps) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Фотогалерея</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => onImageClick(image)}
          >
            <OptimizedImage
              src={image}
              alt={`Сваебойный молот ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
