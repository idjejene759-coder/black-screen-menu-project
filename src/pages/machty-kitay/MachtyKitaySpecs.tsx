import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useState } from "react";
import { technicalSpecs, galleryImages, schemaImage } from "./MachtyKitayData";

const MachtyKitaySpecs = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Общая информация */}
      <section id="info" className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Области применения</h3>
                  </div>
                  <p className="text-primary mb-3 text-base md:text-lg">Копровое оборудование применяется при строительстве:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Жилые и промышленные здания</li>
                    <li>Мосты и эстакады</li>
                    <li>Нефтегазовые объекты</li>
                    <li>Инфраструктурные сооружения</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="RefreshCw" size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Переоборудование</h3>
                  </div>
                  <p className="text-primary mb-3 text-base md:text-lg">Экскаваторная база сохраняет свои функции. Машина может использоваться как:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary mb-4 text-base md:text-lg">
                    <li><strong>Экскаватор</strong> — основная функция базовой машины</li>
                    <li><strong>Сваебойная установка</strong> — полноповоротная забивка свай</li>
                  </ul>
                  <p className="text-primary text-base md:text-lg">После демонтажа мачты экскаватор полностью сохраняет штатные функции.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Фотогалерея */}
      {galleryImages.length === 0 ? (
        <section id="gallery" className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
                Фотогалерея
              </h2>
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <Icon name="ImageIcon" size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-primary text-base md:text-lg">Фотографии будут добавлены в ближайшее время</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="gallery" className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
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
      )}

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

export default MachtyKitaySpecs;