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

const MolotyDongtaiDD = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Молоты дизельные штанговые Dongtai Juli (серия DD)",
    "description": "Дизельные штанговые молоты Dongtai Juli серии DD. Энергия удара на 70-80% больше российских аналогов. Высокая мощность и низкий расход топлива.",
    "brand": {
      "@type": "Brand",
      "name": "Dongtai Juli"
    },
    "category": "Сваебойные молоты",
    "manufacturer": {
      "@type": "Organization",
      "name": "Dongtai Juli Machinery Manufacturing Co., LTD"
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
      name: "DD-18",
      specs: [
        { label: "Масса ударной части", value: "1,8 т" },
        { label: "Максимальная энергия", value: "43 кДж" },
        { label: "Количество ударов в минуту", value: "40–60" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "1,8" },
        { label: "Максимальный ход цилиндра, м", value: "2,1" },
        { label: "Количество ударов в минуту", value: "40–60" },
        { label: "Максимальная энергия, кДж", value: "43" },
        { label: "Расход топлива, л/час", value: "6" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "596" },
        { label: "Максимальный вес сваи, т", value: "5" },
        { label: "Коэффициент компрессии", value: "18" },
        { label: "Масса молота, кг", value: "3300" }
      ]
    },
    {
      name: "DD-25",
      specs: [
        { label: "Масса ударной части", value: "2,5 т" },
        { label: "Максимальная энергия", value: "57,5 кДж" },
        { label: "Количество ударов в минуту", value: "40–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "2,5" },
        { label: "Максимальный ход цилиндра, м", value: "2,5" },
        { label: "Количество ударов в минуту", value: "40–50" },
        { label: "Максимальная энергия, кДж", value: "57,5" },
        { label: "Расход топлива, л/час", value: "10" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "968" },
        { label: "Максимальный вес сваи, т", value: "6" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "4600" }
      ]
    },
    {
      name: "DD-30",
      specs: [
        { label: "Масса ударной части", value: "3,0 т" },
        { label: "Максимальная энергия", value: "73,5 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "3,0" },
        { label: "Максимальный ход цилиндра, м", value: "2,7" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "73,5" },
        { label: "Расход топлива, л/час", value: "11" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1109" },
        { label: "Максимальный вес сваи, т", value: "6,5" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "5000" }
      ]
    },
    {
      name: "DD-35",
      specs: [
        { label: "Масса ударной части", value: "3,5 т" },
        { label: "Максимальная энергия", value: "89,6 кДж" },
        { label: "Количество ударов в минуту", value: "40–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "3,5" },
        { label: "Максимальный ход цилиндра, м", value: "2,8" },
        { label: "Количество ударов в минуту", value: "40–50" },
        { label: "Максимальная энергия, кДж", value: "89,6" },
        { label: "Расход топлива, л/час", value: "12" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1250" },
        { label: "Максимальный вес сваи, т", value: "7" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "6100" }
      ]
    },
    {
      name: "DD-45",
      specs: [
        { label: "Масса ударной части", value: "4,5 т" },
        { label: "Максимальная энергия", value: "120 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "4,5" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "120" },
        { label: "Расход топлива, л/час", value: "14,5" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1430" },
        { label: "Максимальный вес сваи, т", value: "9" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "7380" }
      ]
    },
    {
      name: "DD-55",
      specs: [
        { label: "Масса ударной части", value: "5,5 т" },
        { label: "Максимальная энергия", value: "157 кДж" },
        { label: "Количество ударов в минуту", value: "45–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "5,5" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "45–50" },
        { label: "Максимальная энергия, кДж", value: "157" },
        { label: "Расход топлива, л/час", value: "16,5" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1690" },
        { label: "Максимальный вес сваи, т", value: "13" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "10000" }
      ]
    },
    {
      name: "DD-65",
      specs: [
        { label: "Масса ударной части", value: "6,5 т" },
        { label: "Максимальная энергия", value: "189 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "6,5" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "189" },
        { label: "Расход топлива, л/час", value: "18" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "1980" },
        { label: "Максимальный вес сваи, т", value: "16" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "13000" }
      ]
    },
    {
      name: "DD-75",
      specs: [
        { label: "Масса ударной части", value: "7,5 т" },
        { label: "Максимальная энергия", value: "226 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "7,5" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "226" },
        { label: "Расход топлива, л/час", value: "19" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "2280" },
        { label: "Максимальный вес сваи, т", value: "18,5" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "14500" }
      ]
    },
    {
      name: "DD-85",
      specs: [
        { label: "Масса ударной части", value: "8,5 т" },
        { label: "Максимальная энергия", value: "250 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "8,5" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "250" },
        { label: "Расход топлива, л/час", value: "20" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "2560" },
        { label: "Максимальный вес сваи, т", value: "22" },
        { label: "Коэффициент компрессии", value: "22" },
        { label: "Масса молота, кг", value: "16500" }
      ]
    },
    {
      name: "DD-103",
      specs: [
        { label: "Масса ударной части", value: "10,3 т" },
        { label: "Максимальная энергия", value: "309 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "10,3" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "309" },
        { label: "Расход топлива, л/час", value: "24" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "2950" },
        { label: "Максимальный вес сваи, т", value: "30" },
        { label: "Коэффициент компрессии", value: "24" },
        { label: "Масса молота, кг", value: "18000" }
      ]
    },
    {
      name: "DD-128",
      specs: [
        { label: "Масса ударной части", value: "12,8 т" },
        { label: "Максимальная энергия", value: "398 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "12,8" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "398" },
        { label: "Расход топлива, л/час", value: "28" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "3460" },
        { label: "Максимальный вес сваи, т", value: "38" },
        { label: "Коэффициент компрессии", value: "28" },
        { label: "Масса молота, кг", value: "22000" }
      ]
    },
    {
      name: "DD-160",
      specs: [
        { label: "Масса ударной части", value: "16 т" },
        { label: "Максимальная энергия", value: "455 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "16" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "455" },
        { label: "Расход топлива, л/час", value: "40" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "3970" },
        { label: "Максимальный вес сваи, т", value: "48" },
        { label: "Коэффициент компрессии", value: "28" },
        { label: "Масса молота, кг", value: "28700" }
      ]
    },
    {
      name: "DD-180",
      specs: [
        { label: "Масса ударной части", value: "18 т" },
        { label: "Максимальная энергия", value: "549 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "18" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "549" },
        { label: "Расход топлива, л/час", value: "48" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "4510" },
        { label: "Максимальный вес сваи, т", value: "55" },
        { label: "Коэффициент компрессии", value: "30" },
        { label: "Масса молота, кг", value: "35000" }
      ]
    },
    {
      name: "DD-200",
      specs: [
        { label: "Масса ударной части", value: "20 т" },
        { label: "Максимальная энергия", value: "603 кДж" },
        { label: "Количество ударов в минуту", value: "35–50" }
      ],
      detailedSpecs: [
        { label: "Масса ударной части, т", value: "20" },
        { label: "Максимальный ход цилиндра, м", value: "3" },
        { label: "Количество ударов в минуту", value: "35–50" },
        { label: "Максимальная энергия, кДж", value: "603" },
        { label: "Расход топлива, л/час", value: "51" },
        { label: "Сила взрыва при воздействии на сваю, кН", value: "4750" },
        { label: "Максимальный вес сваи, т", value: "60" },
        { label: "Коэффициент компрессии", value: "30" },
        { label: "Масса молота, кг", value: "39000" }
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
        title="Молоты дизельные штанговые Dongtai Juli (серия DD) | KGS"
        description="Дизельные штанговые молоты Dongtai Juli серии DD. Большая мощность и стабильное качество. Энергия удара на 70-80% выше российских аналогов."
        keywords="дизельные молоты, молоты Dongtai Juli, серия DD, штанговые молоты, сваебойные молоты, забивка свай"
        canonical="https://kgs-ural.ru/catalog/moloty-dongtai-dd"
        ogTitle="Молоты дизельные штанговые Dongtai Juli (серия DD) - современное оборудование"
        ogDescription="Дизельные штанговые молоты DD от Dongtai Juli. Высокая компрессия, большой срок службы, хорошая теплоотдача."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <Link to="/catalog" className="text-accent transition-colors text-sm font-medium">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <a href="#" className="text-white/90 hover:text-accent transition-colors text-sm">Новости</a>
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
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
              <MobileMenu currentPath="/catalog/moloty-dongtai-dd" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: 'Оборудование', path: '/catalog' },
        { label: 'Молоты дизельные штанговые Dongtai Juli (серия DD)', path: '/catalog/moloty-dongtai-dd' }
      ]} />

      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Серия DD
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Молоты дизельные штанговые Dongtai Juli (серия DD)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Варианты дизельных штанговых молотов серии DD
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
                alt="Молоты дизельные штанговые Dongtai Juli серия DD"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="variants" className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
                Модели молотов Dongtai Juli серии DD
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

      <section id="description" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">Дизельные штанговые молоты Dongtai Juli серии DD</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Factory" size={18} className="text-accent" />
                    </div>
                    <h4 className="text-lg font-heading font-bold text-primary">О производителе</h4>
                  </div>
                  <p className="text-primary text-sm leading-relaxed mb-3">
                    Дизельные штанговые молоты, производимые компанией Dongtai Juli Machinery Manufacturing Co., LTD (Китай), отличаются высокой мощностью, надёжностью и стабильным качеством. Оборудование завоевало хорошую репутацию и пользуется устойчивым спросом на мировом рынке.
                  </p>
                  <p className="text-primary text-sm leading-relaxed">
                    Наиболее современной разработкой компании является штанговый дизельный молот серии DD, созданный на основе многолетнего производственного опыта и с применением передовых технологий китайских и зарубежных производителей.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Cog" size={18} className="text-accent" />
                    </div>
                    <h4 className="text-lg font-heading font-bold text-primary">Принцип работы</h4>
                  </div>
                  <p className="text-primary text-sm leading-relaxed mb-3">
                    Используя принцип и технологии дизельного двигателя, данные молоты имеют возможность непрерывно и эффективно работать длительное время. Это свойство достигается благодаря:
                  </p>
                  <ul className="space-y-2 mb-3">
                    {[
                      "эффективной системе воздушного охлаждения с высокой теплоотдачей",
                      "современной системе подачи топлива",
                      "компактной и продуманной конструкции, удобной в эксплуатации и обслуживании",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">✔</span>
                        <span className="text-sm text-primary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-primary font-medium">
                    По совокупности технических характеристик молоты серии DD значительно превосходят отечественные аналоги.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Star" size={18} className="text-accent" />
                    </div>
                    <h4 className="text-lg font-heading font-bold text-primary">Преимущества</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Энергия удара на 70–80% выше, чем у российских молотов с аналогичной массой ударной части",
                      "Высокая степень компрессии по сравнению с отечественными аналогами",
                      "Высокая мощность при низком расходе топлива",
                      "Длительный срок службы",
                      "Эффективная теплоотдача, повышающая общую производительность",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">✔</span>
                        <span className="text-sm text-primary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={18} className="text-accent" />
                    </div>
                    <h4 className="text-lg font-heading font-bold text-primary">Назначение</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Погружение деревянных и железобетонных свай",
                      "Устройство свайных фундаментов",
                      "Погружение металлических труб",
                      "Погружение шпунта Ларсена",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">✔</span>
                        <span className="text-sm text-primary leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-10 md:py-14 bg-gray-50">
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
                  onClick={() => setSelectedImage(image)}
                >
                  <OptimizedImage
                    src={image}
                    alt={`Молот Dongtai Juli DD - фото ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-medium">Молот Dongtai Juli серии DD</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Нужна консультация по выбору молота?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Оставьте заявку и наши специалисты помогут подобрать оптимальную модель под ваши задачи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setShowConsultationForm(true)}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Link to="/catalog">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 w-full"
                >
                  <Icon name="ArrowLeft" className="mr-2" size={20} />
                  Вернуться в каталог
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex items-center justify-between">
              <h3 className="font-heading font-semibold text-lg">Консультация: Молоты Dongtai Juli DD</h3>
              <button 
                onClick={() => setShowConsultationForm(false)}
                className="text-primary hover:text-primary"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="p-4">
              <EquipmentForm 
                categoryTitle="Молоты дизельные штанговые Dongtai Juli (серия DD)"
                categoryId="pile-hammers"
                questions={questions}
              />
            </div>
          </div>
        </div>
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

      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-16 w-auto mb-4"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Официальный дилер ведущих производителей сваебойного оборудования
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">О компании</Link></li>
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Оборудование</Link></li>
                <li><Link to="/parts" className="text-white/70 hover:text-accent transition-colors">Запчасти</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Услуги</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-white/70">
                  <Icon name="Phone" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <a href="tel:88006007465" className="hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </li>
                <li className="flex items-start text-white/70">
                  <Icon name="Mail" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@kgs-ural.ru" className="hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </li>
                <li className="flex items-start text-white/70">
                  <Icon name="MapPin" size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>Екатеринбург, ул. Победы, 5</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={22} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={22} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Video" size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MolotyDongtaiDD;