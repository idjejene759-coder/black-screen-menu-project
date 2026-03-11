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

const BurovyeMashiny = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Буровые машины",
    "description": "Гидравлические буровые машины JINT серий SH и SD, горизонтально-направленные буровые установки Dongtai Juli для строительства фундаментов.",
    "brand": {
      "@type": "Brand",
      "name": "KGS"
    },
    "category": "Буровое оборудование",
    "manufacturer": {
      "@type": "Organization",
      "name": "КоперГруппСервис"
    }
  };

  const questions = [
    {
      question: "Диаметр бурения?"
    },
    {
      question: "Глубина бурения?"
    },
    {
      question: "Какие будут грунты?"
    },
    {
      question: "Требуется ли шефмонтаж?",
      options: ["Да", "Нет"]
    },
    {
      question: "Когда планируется объект?"
    },
    {
      question: "В какой город осуществлять доставку?"
    }
  ];

  const photoGallery = [
    "https://cdn.poehali.dev/files/placeholder-drilling-1.jpg",
    "https://cdn.poehali.dev/files/placeholder-drilling-2.jpg",
    "https://cdn.poehali.dev/files/placeholder-drilling-3.jpg",
    "https://cdn.poehali.dev/files/placeholder-drilling-4.jpg"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Буровые машины JINT и Dongtai Juli | KGS"
        description="Гидравлические буровые машины JINT серий SH и SD, горизонтально-направленные установки Dongtai Juli. Высокая производительность для строительства фундаментов."
        keywords="буровые машины, гидравлические буровые, буровые установки, бурение свай, роторное бурение, JINT"
        canonical="https://kgs-ural.ru/catalog/drilling"
        ogTitle="Буровые машины - надежное оборудование для глубокого бурения"
        ogDescription="Буровые машины JINT и Dongtai Juli с международным уровнем качества. Идеальное оборудование для фундаментостроения."
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
                { label: "Буровые машины" }
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Буровые машины
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Гидравлические буровые установки для строительства свайных фундаментов большого диаметра
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    О производителе JINT
                  </h2>
                  <p className="text-primary mb-6 leading-relaxed">
                    Shanghai Jintai Construction Machinery Co., Ltd. — китайская государственная компания, основанная в 1921 году. С 1996 по 2003 год работала совместно с немецкой компанией Bauer, производя немецкую технику. Это обеспечило высокий уровень качества и использование передовых технологий.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Гидравлические буровые машины JINT (серия SH)
                  </h2>
                  <p className="text-primary mb-6 leading-relaxed">
                    Гидравлическая буровая машина JINT серии SH представляет собой "новый тип буровых установок с большой треугольной структурой", сочетающий современные технологии и процессы гидравлического бурового оборудования.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества серии SH
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Простота эксплуатации</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая работоспособность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Возможность бурить глубокие ямы с высокой эффективностью</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Большое количество аксессуаров от разных мировых брендов</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Области применения серии SH
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Строительство высотных зданий</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Строительство мостов</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Работа в сложных геологических слоях с большим содержанием воды</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Все виды строительства фундамента</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Гидравлические буровые машины JINT (серия SD)
                  </h2>
                  <p className="text-primary mb-4 leading-relaxed">
                    Гидравлические буровые машины SD — это "многофункциональное роторное буровое оборудование нового поколения" с современными технологиями. Основные параметры производительности достигли международного передового уровня.
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Идеальное оборудование для строительства свайного фундамента большого диаметра. Широко используются в фундаментостроении, строительстве многоэтажных зданий, мостовых и водосберегающих проектах.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества серии SD
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая производительность: высокая мощность, выбросы Euro III, низкий центр тяжести, хорошая стабильность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Силовая головка: многоскоростное управление, высокая эффективность бурения, точное вертикальное сверление</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Основная лебедка: максимальная скорость до 70 м/мин, функция быстрого нажатия двигателя</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Экономия энергии: разумное распределение мощности, снижение энергопотребления</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Гибкость: наложенный противовес можно увеличивать или уменьшать в соответствии с условиями работы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Горизонтальные буровые машины Dongtai Juli (серия JL)
                  </h2>
                  <p className="text-primary mb-6 leading-relaxed">
                    Горизонтально-направленные буровые установки Dongtai Juli серии JL широко используются для строительства железных дорог, дорог, укрепления рек, центра города, других ограниченных для строительства районов, для строительства водопроводов, угольного газа, электроники, телекоммуникаций, природного газа.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества серии JL
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Турбодвигатель Cummins — мощная тяговая сила, высокая надежность, низкое энергопотребление</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Прибор автоматического демонтажа и монтажа труб — высокая эффективность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Повышенная производительность и высокая эффективность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Многие ключевые компоненты используют международные продукты для обеспечения качества</span>
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
                          alt={`Буровые машины - фото ${index + 1}`}
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
                      <span className="text-sm">Гидравлическая буровая машина JINT (серия SH)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Гидравлическая буровая машина JINT (серия SD)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Горизонтальная буровая машина Dongtai Juli (серия JL)</span>
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
                equipmentType="Буровые машины"
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

export default BurovyeMashiny;