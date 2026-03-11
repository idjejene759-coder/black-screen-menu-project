import Icon from "@/components/ui/icon";

const HDGallerySection = () => {
  return (
    <section id="gallery" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Фотогалерея
          </h2>
          <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Icon name="Camera" size={32} className="text-accent" />
            </div>
            <p className="text-primary text-lg font-medium text-center">
              Фотографии будут добавлены в ближайшее время
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HDGallerySection;
