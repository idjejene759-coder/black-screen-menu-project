import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const SvaebojnyeMashiny = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Сваебойные машины",
    "description": "Сваебойные установки STARKE и шагающие копровые установки Dongtai Juli для выполнения свайных работ любой сложности.",
    "brand": {
      "@type": "Brand",
      "name": "KGS"
    },
    "category": "Свайное оборудование",
    "manufacturer": {
      "@type": "Organization",
      "name": "КоперГруппСервис"
    }
  };

  const questions = [
    {
      question: "Какие сваи планируете забивать?",
      subfields: [
        { label: "Тип свай", placeholder: "Укажите тип свай" },
        { label: "Сечение", placeholder: "Укажите сечение" },
        { label: "Длина", placeholder: "Укажите длину" }
      ]
    },
    {
      question: "Объем работ (количество свай)"
    },
    {
      question: "Какой грунт на объекте?"
    },
    {
      question: "Требуется шефмонтаж?",
      options: ["Да", "Нет"]
    },
    {
      question: "В какой город осуществлять доставку?"
    }
  ];

  const photoGallery = [
    "https://cdn.poehali.dev/files/placeholder-machine-1.jpg",
    "https://cdn.poehali.dev/files/placeholder-machine-2.jpg",
    "https://cdn.poehali.dev/files/placeholder-machine-3.jpg",
    "https://cdn.poehali.dev/files/placeholder-machine-4.jpg"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Сваебойные машины STARKE и Dongtai Juli | KGS"
        description="Сваебойные установки на базе экскаватора STARKE серии LH и шагающие копровые установки Dongtai Juli серии KLB. Высокая производительность и надежность."
        keywords="сваебойные машины, копровые установки, шагающие установки, сваебойная установка, установка для свай"
        canonical="https://kgs-ural.ru/catalog/pile-machines"
        ogTitle="Сваебойные машины - мощное оборудование для свайных работ"
        ogDescription="Установки STARKE и Dongtai Juli для забивки свай. Высокая мощность, надежность и производительность."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/5c1db9e3-d3bc-4fef-9e97-4e9fc1e1f1fc.png" 
                alt="KGS Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="text-white hover:text-white transition-colors">
                Оборудование
              </Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">
                О компании
              </Link>
              <Link to="/contacts" className="text-white/90 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+73432888845" className="text-white hover:text-accent transition-colors">
                +7 (343) 288-88-45
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs 
              items={[
                { label: "Главная", href: "/" },
                { label: "Каталог", href: "/catalog" },
                { label: "Сваебойные машины" }
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Сваебойные машины
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Копровые установки на базе экскаватора и шагающие сваебойные установки для выполнения работ любой сложности
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Сваебойные установки STARKE (серия LH)
                  </h2>
                  <p className="text-primary mb-4 leading-relaxed">
                    Сваебойные установки производства компании Guangdong Liyuan Hydraulic Machinery Co. Ltd (Китай) характеризуются высокими показателями мощности и эффективности. Компания основана в 1993 году и успешно зарекомендовала себя на рынке.
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Копровые машины на базе экскаватора изготавливаются с применением современных технологий, обеспечивающих долговечность работы.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Ключевые характеристики серии LH
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая мощность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Гидравлическая система управления</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Большое энергосбережение</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Хорошая производительность</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Области применения
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Забивка свай</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Установка опор</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Выполнение свайных работ различной сложности</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Шагающие сваебойные установки Dongtai Juli (серия KLB)
                  </h2>
                  <p className="text-primary mb-4 leading-relaxed">
                    Шагающие копровые установки Dongtai Juli серии KLB предназначены для выполнения свайных работ. Они могут оснащаться дизель-молотом, гидравлическим молотом, вибропогружателем или буровым станком (буровой головкой).
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Гидравлические шагающие установки Dongtai Juli серии KLB предназначены для выполнения свайных работ и лидерного бурения, они отличаются низким удельным давлением на грунт, высокой устойчивостью при выполнении работ на строительных площадках и многофункциональностью.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Оснащение копровых установок
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Лебедки с электрическим приводом</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Механизм позиционирования мачты с гидравлическим приводом</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Механизм передвижения шагающего типа с гидравлическим приводом (обеспечивает хорошую маневренность и высокую производительность)</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества установок KLB
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Надежность конструкции</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Низкое удельное давление на грунт</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая устойчивость при работе</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Многофункциональность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая маневренность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая производительность</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Фотогалерея оборудования
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {photoGallery.map((photo, index) => (
                      <div 
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(photo)}
                      >
                        <OptimizedImage
                          src={photo}
                          alt={`Сваебойные машины - фото ${index + 1}`}
                          width={400}
                          height={300}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20 sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Получить консультацию
                  </h3>
                  <p className="text-primary mb-6">
                    Заполните форму, и наш специалист свяжется с вами для подбора оптимального решения
                  </p>
                  <Button 
                    onClick={() => setShowConsultationForm(true)}
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Оставить заявку
                  </Button>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="phone" className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm text-primary">Телефон</p>
                        <a href="tel:+73432888845" className="font-semibold hover:text-accent transition-colors">
                          +7 (343) 288-88-45
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="mail" className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm text-primary">Email</p>
                        <a href="mailto:info@kgs-ural.ru" className="font-semibold hover:text-accent transition-colors">
                          info@kgs-ural.ru
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Модельный ряд
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Сваебойные установки STARKE (серия LH)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Шагающие установки Dongtai Juli (серия KLB)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KGS</h3>
              <p className="text-white/80">
                Поставка и сервис свайного оборудования с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Главная</Link></li>
                <li><Link to="/catalog" className="text-white/80 hover:text-white transition-colors">Оборудование</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">О компании</Link></li>
                <li><Link to="/contacts" className="text-white/80 hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (343) 288-88-45</li>
                <li>info@kgs-ural.ru</li>
                <li>г. Екатеринбург</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-white/80">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: выходной
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>2024 КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <OptimizedImage
              src={selectedImage}
              alt="Увеличенное фото"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">Консультация по оборудованию</h2>
              <button 
                onClick={() => setShowConsultationForm(false)}
                className="text-primary hover:text-foreground"
              >
                <Icon name="x" className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <EquipmentForm 
                equipmentType="Сваебойные машины"
                questions={questions}
                onSuccess={() => setShowConsultationForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SvaebojnyeMashiny;