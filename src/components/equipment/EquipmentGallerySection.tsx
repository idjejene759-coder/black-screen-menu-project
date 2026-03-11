import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

interface EquipmentGallerySectionProps {
  galleryImages: string[];
  onImageClick: (image: string) => void;
  altPrefix: string;
}

export const EquipmentGallerySection = ({ 
  galleryImages, 
  onImageClick,
  altPrefix 
}: EquipmentGallerySectionProps) => {
  return (
    <section id="gallery" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
            Фотогалерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-square"
                onClick={() => onImageClick(image)}
              >
                <OptimizedImage
                  src={image}
                  alt={`${altPrefix} - фото ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">{altPrefix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};