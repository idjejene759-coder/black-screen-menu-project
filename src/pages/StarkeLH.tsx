import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OptimizedImage } from "@/components/OptimizedImage";
import { EquipmentForm } from "@/components/EquipmentForm";
import { useState } from "react";

const StarkeLH = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Сваебойные установки STARKE (серия LH)",
    "description": "Копровые машины STARKE серии LH на базе экскаватора. Высокая мощность, гидравлическая система управления, большое энергосбережение.",
    "brand": { "@type": "Brand", "name": "STARKE" },
    "category": "Сваебойные машины"
  };

  const variants = [
    {
      name: "LH-220",
      specs: [
        { label: "Базовый экскаватор", value: "22 тонн" },
        { label: "Высота мачты", value: "до 22 м" },
        { label: "Макс. молот", value: "до 6 т" }
      ],
      detailedSpecs: [
        { label: "Вес базовой машины, т", value: "22" },
        { label: "Высота мачты, м", value: "до 22" },
        { label: "Макс. вес молота, т", value: "6" },
        { label: "Сечение свай, мм", value: "до 450×450" },
        { label: "Длина свай, м", value: "до 20" }
      ]
    },
    {
      name: "LH-300",
      specs: [
        { label: "Базовый экскаватор", value: "30 тонн" },
        { label: "Высота мачты", value: "до 26 м" },
        { label: "Макс. молот", value: "до 8 т" }
      ],
      detailedSpecs: [
        { label: "Вес базовой машины, т", value: "30" },
        { label: "Высота мачты, м", value: "до 26" },
        { label: "Макс. вес молота, т", value: "8" },
        { label: "Сечение свай, мм", value: "до 500×500" },
        { label: "Длина свай, м", value: "до 24" }
      ]
    },
    {
      name: "LH-400",
      specs: [
        { label: "Базовый экскаватор", value: "40 тонн" },
        { label: "Высота мачты", value: "до 30 м" },
        { label: "Макс. молот", value: "до 12 т" }
      ],
      detailedSpecs: [
        { label: "Вес базовой машины, т", value: "40" },
        { label: "Высота мачты, м", value: "до 30" },
        { label: "Макс. вес молота, т", value: "12" },
        { label: "Сечение свай, мм", value: "до 600×600" },
        { label: "Длина свай, м", value: "до 28" }
      ]
    }
  ];

  const galleryImages = [
    "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png",
    "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png",
    "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png",
    "https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png"
  ];

  const questions = [
    { question: "Нужна сваебойная или буровая установка?", options: ["Сваебойная", "Буровая", "Гусеничный кран с мачтой", "Шагающая установка"] },
    { question: "Какие сваи будут использоваться?", subfields: [{ label: "Сечение", placeholder: "Укажите сечение" }, { label: "Длина", placeholder: "Укажите длину" }] },
    { question: "Какое оборудование планируется использовать?", subfields: [{ label: "Молот", placeholder: "Укажите модель молота" }, { label: "Вращатель", placeholder: "Укажите модель вращателя" }] },
    { question: "Требуется ли шефмонтаж?", options: ["Да", "Нет"] },
    { question: "Когда планируется объект?" },
    { question: "В какой город осуществлять доставку?" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Сваебойные установки STARKE (серия LH) | KGS"
        description="Копровые машины STARKE серии LH на базе экскаватора. Высокая мощность, гидравлическая система, энергосбережение."
        keywords="сваебойные установки, STARKE LH, копровые машины, сваебойная техника"
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/files/4a8cdfcd-d84b-4bda-b7ca-c8ca1ab6a835.svg" alt="KGS" className="h-8" />
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white/80 hover:text-accent transition-colors">Главная</Link>
              <Link to="/catalog" className="text-white hover:text-accent transition-colors">Оборудование</Link>
              <Link to="/services" className="text-white/80 hover:text-accent transition-colors">Услуги</Link>
              <Link to="/production" className="text-white/80 hover:text-accent transition-colors">Производство</Link>
              <Link to="/about" className="text-white/80 hover:text-accent transition-colors">О компании</Link>
              <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Send" size={18} /></a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Share2" size={18} /></a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Video" size={18} /></a>
              </div>
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">8 (800) 600-74-65</a>
              <Button size="sm" className="btn-gradient text-white hidden md:block">Заказать звонок</Button>
              <MobileMenu currentPath="/catalog/starke-lh" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Оборудование', path: '/catalog' }, { label: 'Сваебойные установки STARKE серия LH', path: '/catalog/starke-lh' }]} />

      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">Серия LH</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">Сваебойные установки STARKE (серия LH)</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Варианты установок серии LH</a>
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Общая информация</a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Фотогалерея</a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Оставить заявку</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-white">
              <OptimizedImage src="https://cdn.poehali.dev/files/fa6a1c32-f5ac-47df-9c14-016eeb4d7260.png" alt="Сваебойные установки STARKE серия LH" className="w-full h-full object-contain p-8" />
            </div>
          </div>
        </div>
      </section>

      <section id="variants" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Варианты сваебойных установок серии LH</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {variants.map((variant, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-heading font-bold text-primary">{variant.name}</h3>
                      </div>
                      <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                        {variant.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                            <span className="text-sm text-primary">{spec.label}</span>
                            <span className="text-sm font-semibold text-primary">{spec.value}</span>
                          </div>
                        ))}
                        {expandedVariant === variant.name && variant.detailedSpecs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                            <span className="text-sm text-primary">{spec.label}</span>
                            <span className="text-sm font-semibold text-primary">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)} className="w-full">
                          {expandedVariant === variant.name ? <><Icon name="ChevronUp" size={16} className="mr-2" />Скрыть характеристики</> : <><Icon name="ChevronDown" size={16} className="mr-2" />Подробнее</>}
                        </Button>
                        <a href="#consultation" className="block"><Button className="btn-gradient text-white w-full" size="sm"><Icon name="MessageSquare" size={16} className="mr-2" />Получить консультацию</Button></a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="description" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-xl mb-12 animate-fade-in">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">Сваебойные установки STARKE серии LH</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">О производителе</h3>
                    <p className="text-lg leading-relaxed text-primary">Сваебойные установки производства компании Guangdong Liyuan Hydraulic Machinery Co. Ltd (Китай) характеризуются высокими показателями мощности и эффективности. Компания основана в 1993 году и успешно зарекомендовала себя на рынке.</p>
                    <p className="text-lg leading-relaxed text-primary mt-4">Копровые машины на базе экскаватора изготавливаются с применением современных технологий, обеспечивающих долговечность работы.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">Ключевые характеристики серии LH</h4>
                    <ul className="list-disc pl-6 space-y-2 text-primary">
                      <li className="leading-relaxed">Высокая мощность</li>
                      <li className="leading-relaxed">Гидравлическая система управления</li>
                      <li className="leading-relaxed">Большое энергосбережение</li>
                      <li className="leading-relaxed">Хорошая производительность</li>
                      <li className="leading-relaxed">Простота эксплуатации и обслуживания</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">Области применения</h4>
                    <ul className="list-disc pl-6 space-y-2 text-primary">
                      <li className="leading-relaxed">Забивка свай</li>
                      <li className="leading-relaxed">Установка опор</li>
                      <li className="leading-relaxed">Выполнение свайных работ различной сложности</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">Фотогалерея</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]" onClick={() => setSelectedImage(image)}>
                  <OptimizedImage src={image} alt={`Сваебойные установки STARKE LH - фото ${index + 1}`} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-7xl max-h-[90vh]">
            <Button variant="ghost" size="icon" className="absolute -top-12 right-0 text-white hover:text-accent" onClick={() => setSelectedImage(null)}><Icon name="X" size={32} /></Button>
            <img src={selectedImage} alt="Увеличенное изображение" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
          </div>
        </div>
      )}

      <section id="consultation" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">Консультация специалиста</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Подбор сваебойной установки STARKE</h2>
              <p className="text-lg text-primary">Заполните форму, и наш специалист поможет подобрать оптимальную модель для ваших задач</p>
            </div>
            {!showConsultationForm ? (
              <div className="text-center">
                <Button size="lg" className="btn-gradient text-white text-lg px-8 py-6" onClick={() => setShowConsultationForm(true)}>
                  <Icon name="MessageSquare" size={24} className="mr-3" />Получить консультацию
                </Button>
              </div>
            ) : (
              <Card className="border-none shadow-2xl animate-fade-in">
                <CardContent className="p-8">
                  <EquipmentForm equipmentType="Сваебойные установки STARKE (серия LH)" questions={questions} onClose={() => setShowConsultationForm(false)} />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div><h3 className="text-xl font-bold mb-4">КоперГруппСервис</h3><p className="text-white/80">Производство и поставка сваебойного оборудования</p></div>
            <div><h4 className="text-lg font-semibold mb-4">Контакты</h4><div className="space-y-2 text-white/80"><p>Телефон: 8 (800) 600-74-65</p><p>Email: info@kgs-ural.ru</p></div></div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Send" size={24} /></a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Share2" size={24} /></a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors"><Icon name="Video" size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60"><p>&copy; {new Date().getFullYear()} КоперГруппСервис. Все права защищены.</p></div>
        </div>
      </footer>
    </div>
  );
};

export default StarkeLH;