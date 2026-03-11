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

const SvaebojnyeMoloty = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Сваебойные молоты",
    "description": "Гидравлические, дизельные трубчатые и штанговые сваебойные молоты для забивки свай. Широкий модельный ряд для различных условий работы.",
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

  const photoGallery = [
    "https://cdn.poehali.dev/files/placeholder-hammer-1.jpg",
    "https://cdn.poehali.dev/files/placeholder-hammer-2.jpg",
    "https://cdn.poehali.dev/files/placeholder-hammer-3.jpg",
    "https://cdn.poehali.dev/files/placeholder-hammer-4.jpg"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Сваебойные молоты - гидравлические и дизельные | KGS"
        description="Сваебойные молоты Yongan, Starke, Dongtai Juli. Гидравлические, дизельные трубчатые и штанговые молоты для забивки свай. Поставка, монтаж, гарантия."
        keywords="сваебойные молоты, гидравлические молоты, дизельные молоты, молот для свай, забивка свай, молот трубчатый, молот штанговый"
        canonical="https://kgs-ural.ru/catalog/pile-hammers"
        ogTitle="Сваебойные молоты - надежное оборудование для забивки свай"
        ogDescription="Гидравлические молоты Yongan, дизельные трубчатые Starke и штанговые Dongtai Juli. Свайные наголовники в комплекте."
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
                { label: "Сваебойные молоты" }
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Сваебойные молоты
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Гидравлические, дизельные трубчатые и штанговые молоты для забивки свай различных типов
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Гидравлические молоты Yongan (серия YC)
                  </h2>
                  <p className="text-primary mb-4 leading-relaxed">
                    Компания Yongan Machinery основана в 1985 году, специализируется на производстве гидравлических ударных молотов. За 37 лет стала ведущим китайским предприятием по производству свайных молотов.
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Сваебойные молоты Yongan применяются при строительстве причалов, эстакад, морской ветроэнергетики и фундаментов зданий. Ассортимент включает более 30 моделей от YC-3 до YC-220.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества молотов серии YC
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Широкая сфера применения для забивки стальных трубчатых, железобетонных свай, шпунтов</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Простота управления и обслуживания</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Низкий уровень шума</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Забивка свай без предварительного бурения даже в мерзлую почву</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Выносной пульт управления с автоматическим и ручным режимами работы</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Регулировка энергии удара</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Подключение к гидростанции или базовой машине</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Прочный материал амортизирующей подушки, кованая ударная часть</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Дизельные трубчатые молоты Starke (серия HD)
                  </h2>
                  <p className="text-primary mb-4 leading-relaxed">
                    Дизельные трубчатые молоты для забивки свай работают по принципу дизельного двигателя, обеспечивая непрерывную высокоэффективную работу. Используется независимая технология принудительной смазки насоса, значительно увеличивающая срок службы.
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Применение: установка железобетонных свай, свай из стальных труб, прямых и морских свай, наклонных свай.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества молотов Starke HD
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Энергия удара на 30-50% больше, чем у штанговых молотов с аналогичными параметрами</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Оптимальное соотношение массы ударной части и силы удара — экономия топлива</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Регулировка силы удара в процессе работы без остановки молота</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Простая система воздушного охлаждения</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Ниже стоимость по сравнению с гидравлическими молотами</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Прочность, надежность, простота в эксплуатации и обслуживании</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Дизельные штанговые молоты Dongtai Juli (серия DD)
                  </h2>
                  <p className="text-primary mb-6 leading-relaxed">
                    Дизельный штанговый молот производства Dongtai Juli Machinery Manufacturing Co., LTD (Китай) отличается большой мощностью и стабильным качеством. Серия DD — самая современная продукция, производимая на основе многолетнего опыта и передовых технологий.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Преимущества молотов серии DD
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Энергия удара на 70-80% больше, чем у молотов российского производства с таким же весом ударной части</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая компрессия по сравнению с российскими аналогами</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Высокая мощность и низкий расход топлива</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Большой срок службы</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Хорошая теплоотдача, увеличивающая производительность</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Применение сваебойных молотов
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Погружение деревянных и железобетонных свай</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Строительство свайного фундамента</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Погружение металлических труб</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Погружение шпунта Ларсена</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Свайные наголовники
                  </h2>
                  <p className="text-primary mb-6 leading-relaxed">
                    Свайные наголовники — важный элемент свайного оборудования, который устанавливается на верхнюю часть сваи для защиты её от разрушения при ударах молота и равномерного распределения ударной нагрузки.
                  </p>
                  <p className="text-primary mb-6 leading-relaxed">
                    Наголовники изготавливаются из высокопрочной стали и оснащаются специальными вкладышами (амортизирующими подушками), которые гасят ударную волну и предотвращают повреждение бетона и арматуры.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Типы свайных наголовников
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Для круглых свай — различных диаметров</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Для квадратных свай — различных сечений (от 200×200 до 400×400 мм)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Для труб — под конкретный диаметр трубы</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Универсальные наголовники — с регулируемым размером</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Функции наголовников
                  </h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Защита головы сваи от разрушения</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Равномерное распределение ударной нагрузки</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Предотвращение сколов бетона</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Сохранность арматурного каркаса</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Увеличение срока службы сваи</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-primary">Повышение эффективности забивки</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Конструкция наголовника
                  </h3>
                  <p className="text-primary leading-relaxed">
                    Стандартный наголовник состоит из стального корпуса с внутренней полостью под сваю, амортизирующей подушки (обычно из твердых пород дерева или специального композитного материала) и системы крепления. Некоторые модели оснащены механизмом центрирования для точной установки на сваю.
                  </p>
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
                          alt={`Сваебойные молоты - фото ${index + 1}`}
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
                      <span className="text-sm">Молоты гидравлические Yongan (серия YC)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Молоты дизельные трубчатые Starke (серия HD)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Молоты дизельные штанговые Dongtai Juli (серия DD)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Свайные наголовники</span>
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
                equipmentType="Сваебойные молоты"
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

export default SvaebojnyeMoloty;