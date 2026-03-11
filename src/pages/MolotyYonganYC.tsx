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

const MolotyYonganYC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Молоты гидравлические Yongan (серия YC)",
    "description": "Гидравлические сваебойные молоты Yongan серии YC для забивки стальных трубчатых, железобетонных свай и шпунтов. Более 30 моделей от YC-3 до YC-220.",
    "brand": {
      "@type": "Brand",
      "name": "Yongan Machinery"
    },
    "category": "Сваебойные молоты",
    "manufacturer": {
      "@type": "Organization",
      "name": "Yongan Machinery"
    }
  };

  const galleryImages = [
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png"
  ];

  const variants = [
    {
      name: "YC-35",
      specs: [
        { label: "Вес ударной части", value: "3,5 т" },
        { label: "Энергия удара", value: "32 кДж" },
        { label: "Частота ударов", value: "35–55 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "3,5" },
        { label: "Энергия удара, кДж", value: "32" },
        { label: "Частота ударов, уд/мин", value: "35–55" },
        { label: "Амплитуда, мм", value: "5–12" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "180–260" },
        { label: "Вес молота, кг", value: "5000" }
      ]
    },
    {
      name: "YC-45",
      specs: [
        { label: "Вес ударной части", value: "4,5 т" },
        { label: "Энергия удара", value: "44 кДж" },
        { label: "Частота ударов", value: "35–55 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "4,5" },
        { label: "Энергия удара, кДж", value: "44" },
        { label: "Частота ударов, уд/мин", value: "35–55" },
        { label: "Амплитуда, мм", value: "5–12" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "200–280" },
        { label: "Вес молота, кг", value: "6200" }
      ]
    },
    {
      name: "YC-60",
      specs: [
        { label: "Вес ударной части", value: "6,0 т" },
        { label: "Энергия удара", value: "60 кДж" },
        { label: "Частота ударов", value: "35–50 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "6,0" },
        { label: "Энергия удара, кДж", value: "60" },
        { label: "Частота ударов, уд/мин", value: "35–50" },
        { label: "Амплитуда, мм", value: "6–13" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "220–300" },
        { label: "Вес молота, кг", value: "8000" }
      ]
    },
    {
      name: "YC-80",
      specs: [
        { label: "Вес ударной части", value: "8,0 т" },
        { label: "Энергия удара", value: "85 кДж" },
        { label: "Частота ударов", value: "35–50 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "8,0" },
        { label: "Энергия удара, кДж", value: "85" },
        { label: "Частота ударов, уд/мин", value: "35–50" },
        { label: "Амплитуда, мм", value: "6–13" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "240–320" },
        { label: "Вес молота, кг", value: "10500" }
      ]
    },
    {
      name: "YC-100",
      specs: [
        { label: "Вес ударной части", value: "10 т" },
        { label: "Энергия удара", value: "110 кДж" },
        { label: "Частота ударов", value: "30–45 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "10" },
        { label: "Энергия удара, кДж", value: "110" },
        { label: "Частота ударов, уд/мин", value: "30–45" },
        { label: "Амплитуда, мм", value: "7–14" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "260–350" },
        { label: "Вес молота, кг", value: "13000" }
      ]
    },
    {
      name: "YC-120",
      specs: [
        { label: "Вес ударной части", value: "12 т" },
        { label: "Энергия удара", value: "135 кДж" },
        { label: "Частота ударов", value: "30–45 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "12" },
        { label: "Энергия удара, кДж", value: "135" },
        { label: "Частота ударов, уд/мин", value: "30–45" },
        { label: "Амплитуда, мм", value: "7–14" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "280–380" },
        { label: "Вес молота, кг", value: "15500" }
      ]
    },
    {
      name: "YC-140",
      specs: [
        { label: "Вес ударной части", value: "14 т" },
        { label: "Энергия удара", value: "160 кДж" },
        { label: "Частота ударов", value: "28–42 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "14" },
        { label: "Энергия удара, кДж", value: "160" },
        { label: "Частота ударов, уд/мин", value: "28–42" },
        { label: "Амплитуда, мм", value: "8–15" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "300–400" },
        { label: "Вес молота, кг", value: "18000" }
      ]
    },
    {
      name: "YC-180",
      specs: [
        { label: "Вес ударной части", value: "18 т" },
        { label: "Энергия удара", value: "210 кДж" },
        { label: "Частота ударов", value: "25–40 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "18" },
        { label: "Энергия удара, кДж", value: "210" },
        { label: "Частота ударов, уд/мин", value: "25–40" },
        { label: "Амплитуда, мм", value: "8–16" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "350–450" },
        { label: "Вес молота, кг", value: "23000" }
      ]
    },
    {
      name: "YC-220",
      specs: [
        { label: "Вес ударной части", value: "22 т" },
        { label: "Энергия удара", value: "260 кДж" },
        { label: "Частота ударов", value: "25–38 уд/мин" }
      ],
      detailedSpecs: [
        { label: "Вес ударной части, т", value: "22" },
        { label: "Энергия удара, кДж", value: "260" },
        { label: "Частота ударов, уд/мин", value: "25–38" },
        { label: "Амплитуда, мм", value: "9–17" },
        { label: "Рабочее давление, МПа", value: "20–24" },
        { label: "Расход масла, л/мин", value: "400–500" },
        { label: "Вес молота, кг", value: "28000" }
      ]
    }
  ];

  const questions = [
    {
      question: "Какой молот требуется?",
      options: ["Дизельный штанговый", "Дизельный трубчатый", "Гидравлический"]
    },
    {
      question: "На какую машину планируете навешивать?"
    },
    {
      question: "Какие сваи планируете забивать?",
      subfields: [
        { label: "Сечение", placeholder: "Укажите сечение свай" },
        { label: "Длина", placeholder: "Укажите длину свай" }
      ]
    },
    {
      question: "Какие требуются захваты?",
      options: ["Круглые", "Квадратные", "Плоские", "Под изготовление"]
    },
    {
      question: "Какой грунт?"
    },
    {
      question: "Требуется ли наголовник?",
      options: ["Да", "Нет"],
      conditionalFields: {
        "Да": [
          { label: "Какой наголовник", placeholder: "Укажите тип наголовника" },
          { label: "Сечение", placeholder: "Укажите сечение" }
        ]
      }
    },
    {
      question: "Требуется ли шефмонтаж?",
      options: ["Да", "Нет"]
    },
    {
      question: "В какой город осуществлять доставку?"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Молоты гидравлические Yongan (серия YC) | KGS"
        description="Гидравлические сваебойные молоты Yongan серии YC. Широкая сфера применения, низкий уровень шума, забивка без предварительного бурения даже в мерзлую почву."
        keywords="гидравлические молоты, молоты Yongan, серия YC, сваебойные молоты, забивка свай, шпунтовые работы"
        canonical="https://kgs-ural.ru/catalog/moloty-yongan-yc"
        ogTitle="Молоты гидравлические Yongan (серия YC) - профессиональное оборудование для забивки свай"
        ogDescription="Гидравлические молоты Yongan серии YC от ведущего китайского производителя. Более 30 моделей, выносной пульт управления, регулировка энергии удара."
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
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Video" size={18} />
                </a>
              </div>
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">
                8 (800) 600-74-65
              </a>
              <Button size="sm" className="btn-gradient text-white hidden md:block">
                Заказать звонок
              </Button>
              <MobileMenu currentPath="/catalog/moloty-yongan-yc" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Оборудование', path: '/catalog' },
        { label: 'Молоты гидравлические Yongan серия YC', path: '/catalog/moloty-yongan-yc' }
      ]} />

      <section className="relative pt-14 pb-8 md:pt-16 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Серия YC
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Молоты гидравлические Yongan (серия YC)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Варианты гидравлических молотов YC
              </a>
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Общая информация
              </a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-white">
              <OptimizedImage 
                src="https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png"
                alt="Молоты гидравлические Yongan серия YC"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="variants" className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
                Варианты гидравлических молотов серии YC
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {variants.map((variant, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-heading font-bold text-primary">
                          {variant.name}
                        </h3>
                      </div>
                      
                      <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                        {variant.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                            <span className="text-sm text-primary">{spec.label}</span>
                            <span className="text-sm font-semibold text-primary">{spec.value}</span>
                          </div>
                        ))}
                        
                        {expandedVariant === variant.name && (
                          <>
                            {variant.detailedSpecs.map((spec, idx) => (
                              <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                                <span className="text-sm text-primary">{spec.label}</span>
                                <span className="text-sm font-semibold text-primary">{spec.value}</span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 mt-4">
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
                          className="w-full"
                        >
                          {expandedVariant === variant.name ? (
                            <>
                              <Icon name="ChevronUp" size={16} className="mr-2" />
                              Скрыть характеристики
                            </>
                          ) : (
                            <>
                              <Icon name="ChevronDown" size={16} className="mr-2" />
                              Подробнее
                            </>
                          )}
                        </Button>
                        <a href="#consultation" className="block">
                          <Button className="btn-gradient text-white w-full" size="sm">
                            <Icon name="MessageSquare" size={16} className="mr-2" />
                            Получить консультацию
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="description" className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-xl mb-12 animate-fade-in">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">Гидравлические молоты Yongan серии YC</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">О производителе</h3>
                    <p className="text-lg leading-relaxed text-primary">
                      Компания Yongan Machinery основана в 1985 году и специализируется на производстве гидравлических ударных молотов. За 37 лет работы стала ведущим китайским предприятием по производству свайных молотов.
                    </p>
                    <p className="text-lg leading-relaxed text-primary mt-4">
                      Сваебойные молоты Yongan применяются при строительстве причалов, эстакад, морской ветроэнергетики и фундаментов зданий. Ассортимент включает более 30 моделей от YC-3 до YC-220.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">Преимущества молотов серии YC</h4>
                    <ul className="list-disc pl-6 space-y-2 text-primary">
                      <li className="leading-relaxed">Широкая сфера применения для забивки стальных трубчатых, железобетонных свай, шпунтов</li>
                      <li className="leading-relaxed">Простота управления и обслуживания</li>
                      <li className="leading-relaxed">Низкий уровень шума по сравнению с дизельными молотами</li>
                      <li className="leading-relaxed">Забивка свай без предварительного бурения даже в мерзлую почву</li>
                      <li className="leading-relaxed">Выносной пульт управления с автоматическим и ручным режимами работы</li>
                      <li className="leading-relaxed">Регулировка энергии удара в процессе работы</li>
                      <li className="leading-relaxed">Возможность подключения к гидростанции или базовой машине</li>
                      <li className="leading-relaxed">Прочный материал амортизирующей подушки, кованая ударная часть</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">Назначение молотов Yongan YC</h4>
                    <ul className="list-disc pl-6 space-y-2 text-primary">
                      <li className="leading-relaxed">Погружение деревянных и железобетонных свай</li>
                      <li className="leading-relaxed">Устройство свайных фундаментов</li>
                      <li className="leading-relaxed">Погружение металлических труб</li>
                      <li className="leading-relaxed">Погружение шпунта Ларсена</li>
                      <li className="leading-relaxed">Строительство причалов и эстакад</li>
                      <li className="leading-relaxed">Морская ветроэнергетика</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
              Фотогалерея
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  onClick={() => setSelectedImage(image)}
                >
                  <OptimizedImage 
                    src={image}
                    alt={`Молоты гидравлические Yongan YC - фото ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
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
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-accent"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={32} />
            </Button>
            <img
              src={selectedImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <section id="consultation" className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
                Консультация специалиста
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Подбор гидравлического молота Yongan
              </h2>
              <p className="text-lg text-primary">
                Заполните форму, и наш специалист поможет подобрать оптимальную модель молота для ваших задач
              </p>
            </div>

            {!showConsultationForm ? (
              <div className="text-center">
                <Button
                  size="lg"
                  className="btn-gradient text-white text-lg px-8 py-6"
                  onClick={() => setShowConsultationForm(true)}
                >
                  <Icon name="MessageSquare" size={24} className="mr-3" />
                  Получить консультацию
                </Button>
              </div>
            ) : (
              <Card className="border-none shadow-2xl animate-fade-in">
                <CardContent className="p-8">
                  <EquipmentForm 
                    equipmentType="Молоты гидравлические Yongan (серия YC)"
                    questions={questions}
                    onClose={() => setShowConsultationForm(false)}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">КоперГруппСервис</h3>
              <p className="text-white/80">Производство и поставка сваебойного оборудования</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>Телефон: 8 (800) 600-74-65</p>
                <p>Email: info@kgs-ural.ru</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={24} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Video" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MolotyYonganYC;