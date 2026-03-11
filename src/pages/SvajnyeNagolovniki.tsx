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

const SvajnyeNagolovniki = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Свайные наголовники",
    "description": "Свайные наголовники для защиты свай от разрушения при забивке. Для круглых и квадратных свай различных сечений.",
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

  const galleryImages = [
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png",
    "https://cdn.poehali.dev/files/16c24c8b-1514-4151-aa7d-7e2641f3e449.png"
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
        title="Свайные наголовники | KGS"
        description="Свайные наголовники для защиты свай от разрушения при ударах молота. Для круглых, квадратных свай и труб различных размеров."
        keywords="свайные наголовники, наголовники для свай, защита свай, забивка свай, свайное оборудование"
        canonical="https://kgs-ural.ru/catalog/svaynye-nagolovniki"
        ogTitle="Свайные наголовники - защита свай при забивке"
        ogDescription="Свайные наголовники из высокопрочной стали с амортизирующими вкладышами. Для круглых и квадратных свай, труб."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg"
                alt="КоперГруппСервис"
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/catalog" className="text-white/90 hover:text-white transition-colors">
                Каталог
              </Link>
              <Link to="/services" className="text-white/90 hover:text-white transition-colors">
                Услуги
              </Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">
                О компании
              </Link>
              <Link to="/contacts" className="text-white/90 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+73432888499" className="text-white/90 hover:text-white transition-colors">
                +7 343 288-84-99
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: "Главная", href: "/" },
              { label: "Каталог", href: "/catalog" },
              { label: "Сваебойные молоты", href: "/catalog#pile-hammers" },
              { label: "Свайные наголовники" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                <OptimizedImage
                  src={selectedImage || galleryImages[0]}
                  alt="Свайные наголовники"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === image || (!selectedImage && index === 0)
                        ? 'border-primary'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`Вид ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Badge className="mb-4">Свайное оборудование</Badge>
              <h1 className="text-3xl font-bold mb-4">Свайные наголовники</h1>
              
              <div className="prose max-w-none mb-6">
                <h2 className="text-xl font-semibold mb-3">Свайные наголовники</h2>
                <p className="text-primary mb-4">
                  Свайные наголовники — важный элемент свайного оборудования, который устанавливается на верхнюю часть сваи для защиты её от разрушения при ударах молота и равномерного распределения ударной нагрузки.
                </p>
                <p className="text-primary mb-4">
                  Наголовники изготавливаются из высокопрочной стали и оснащаются специальными вкладышами (амортизирующими подушками), которые гасят ударную волну и предотвращают повреждение бетона и арматуры.
                </p>

                <h3 className="text-lg font-semibold mb-3 mt-6">Типы свайных наголовников</h3>
                <ul className="space-y-2 text-primary">
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Для круглых свай — различных диаметров</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Для квадратных свай — различных сечений (от 200×200 до 400×400 мм)</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Для труб — под конкретный диаметр трубы</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Универсальные наголовники — с регулируемым размером</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 mt-6">Функции наголовников</h3>
                <ul className="space-y-2 text-primary">
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Защита головы сваи от разрушения</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Равномерное распределение ударной нагрузки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Предотвращение сколов бетона</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Сохранность арматурного каркаса</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Увеличение срока службы сваи</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Повышение эффективности забивки</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 mt-6">Конструкция наголовника</h3>
                <p className="text-primary mb-4">
                  Стандартный наголовник состоит из стального корпуса с внутренней полостью под сваю, амортизирующей подушки (обычно из твердых пород дерева или специального композитного материала) и системы крепления. Некоторые модели оснащены механизмом центрирования для точной установки на сваю.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={() => setShowConsultationForm(true)}
                >
                  Получить консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <a href="tel:+73432888499">
                    <Icon name="phone" className="w-5 h-5 mr-2" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Получить консультацию</h2>
              <EquipmentForm 
                equipmentType="Свайные наголовники"
                questions={questions}
              />
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg"
                alt="КоперГруппСервис"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Поставка свайного оборудования и спецтехники
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">Каталог</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li>
                <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="tel:+73432888499" className="hover:text-white transition-colors">
                    +7 343 288-84-99
                  </a>
                </li>
                <li>
                  <a href="mailto:kgs@kgs-ural.ru" className="hover:text-white transition-colors">
                    kgs@kgs-ural.ru
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Юридическая информация</h3>
              <p className="text-sm text-gray-400">
                ООО "КоперГруппСервис"<br />
                ИНН: 6686113105<br />
                ОГРН: 1196658042503
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
            © 2024 КоперГруппСервис. Все права защищены.
          </div>
        </div>
      </footer>

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Получить консультацию</h2>
                <button 
                  onClick={() => setShowConsultationForm(false)}
                  className="text-gray-400 hover:text-primary"
                >
                  <Icon name="x" className="w-6 h-6" />
                </button>
              </div>
              <EquipmentForm 
                equipmentType="Свайные наголовники"
                questions={questions}
                onSuccess={() => setShowConsultationForm(false)}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SvajnyeNagolovniki;