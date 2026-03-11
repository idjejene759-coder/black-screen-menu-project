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

const VibropogruzateliKranovye = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Вибропогружатели крановые",
    "description": "Гидравлические и электрические крановые вибропогружатели Yongan для погружения и извлечения шпунтовых свай, труб и других свайных элементов.",
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
      question: "Грузоподъемность базовой машины?"
    },
    {
      question: "Что планируете погружать?"
    },
    {
      question: "Глубина погружения?"
    },
    {
      question: "Диаметр трубы?"
    },
    {
      question: "Какие требуются зажимы?",
      options: ["Труба", "Шпунт", "Сваи"]
    },
    {
      question: "Какие будут грунты?"
    },
    {
      question: "Требуется ли шефмонтаж?",
      options: ["Да", "Нет"]
    },
    {
      question: "Когда планируется закупка (объект)?"
    },
    {
      question: "В какой город осуществлять доставку?"
    }
  ];

  const photoGallery = [
    "https://cdn.poehali.dev/files/placeholder-vibro-crane-1.jpg",
    "https://cdn.poehali.dev/files/placeholder-vibro-crane-2.jpg",
    "https://cdn.poehali.dev/files/placeholder-vibro-crane-3.jpg",
    "https://cdn.poehali.dev/files/placeholder-vibro-crane-4.jpg"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Вибропогружатели крановые Yongan | KGS"
        description="Гидравлические и электрические крановые вибропогружатели Yongan серий YZ, YZ-VM и DZJ. Регулируемый дебаланс, переменная частота, высокая универсальность."
        keywords="вибропогружатели крановые, гидравлические вибропогружатели, электрические вибропогружатели, Yongan, погружение шпунта"
        canonical="https://kgs-ural.ru/catalog/vibro-crane"
        ogTitle="Вибропогружатели крановые - эффективное оборудование для свайных работ"
        ogDescription="Вибропогружатели Yongan с регулируемым дебалансом и переменной частотой. Более 30 моделей для различных условий."
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
                { label: "Вибропогружатели крановые" }
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Вибропогружатели крановые
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Профессиональное оборудование для погружения и извлечения шпунтовых свай, труб и свай различных типов
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Вибропогружатели гидравлические серия YZ
                  </h2>
                  <p className="text-primary mb-4 leading-relaxed">
                    Вибропогружатель гидравлический YZ — профессиональное оборудование для погружения и извлечения свайных элементов. Применяется для погружения и извлечения шпунтовых свай, труб, двутавра, свай из бетона и железобетона, швеллера, уголков, арматуры, уголков, забивки деревянных свай, анкеров, а также уплотнения бетона.
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Вибропогружатели Yongan имеют более 30 моделей вибропогружателей от YZ-35 до YZ-250T. Обеспечивает мощное вибрационное воздействие с разной частотой в диапазоне от 0 до 2500 об/мин.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Ключевые характеристики серии YZ
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Регулируемый дебаланс: количество тяги можно изменить настройкой амплитуды, что обеспечивает лучшую адаптацию к строительным условиям</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Переменная частота: изменяя расход масла, мотор может изменять скорость для достижения переменной частоты вибрации в нужном диапазоне 0 — 2500 об/мин</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая универсальность: широкий спектр применения для различных строительных условий</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Вибропогружатели серия YZ-VM
                  </h2>
                  <p className="text-primary mb-6 leading-relaxed">
                    Модели серии YZ-VM — гидравлические вибропогружатели с зажимом, специально разработанные для применения на кранах. Используются для забивки и извлечения шпунтовых свай, стальных труб, балок и свай других типов на строительных площадках морских сооружений, мостов, дамб, причалов, эстакад, подземных переходов и других строительных объектов.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Конструктивные особенности YZ-VM
                  </h3>
                  <p className="text-primary leading-relaxed">
                    Модели серии VM имеют встроенный зажим для удержания свайных элементов, что делает их универсальным решением для различных типов строительства. Зажимной механизм обеспечивает надежную фиксацию элементов во время работы.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Вибропогружатели электрические серия DZJ
                  </h2>
                  <p className="text-primary mb-6 leading-relaxed">
                    Вибропогружатель электрический DZJ — профессиональное оборудование для погружения и извлечения свайных элементов с электрическим приводом. Является экономичной альтернативой гидравлическим моделям.
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Применяется для погружения и извлечения шпунтовых свай, труб, двутавра, свай из бетона и железобетона, швеллера, арматуры, деревянных свай, анкеров, а также уплотнения бетона.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества электрических вибропогружателей DZJ
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Экономичность: работа от электросети</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Простота эксплуатации и обслуживания</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Надежность конструкции</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Широкий спектр применения</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Эффективное использование на объектах с доступом к электроэнергии</span>
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
                          alt={`Вибропогружатели крановые - фото ${index + 1}`}
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
                      <span className="text-sm">Вибропогружатели гидравлические крановые Yongan (серия YZ)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Вибропогружатели гидравлические крановые Yongan (серия YZ-VM)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Вибропогружатели электрические крановые Yongan (серия DZJ)</span>
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
                equipmentType="Вибропогружатели крановые"
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

export default VibropogruzateliKranovye;