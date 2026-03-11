import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ImageWithWatermark } from "@/components/ImageWithWatermark";
import { SpecialOfferBanner } from "@/components/SpecialOfferBanner";

const stats = [
  { value: 400, label: "клиентов в России и странах СНГ" },
  { value: 60, label: "выполненных шефмонтажей" },
  { value: 10, label: "лет опыта работы компании" },
  { value: 150, label: "единиц поставленной техники" },
  { value: 1000, label: "изготовленных и поставленных запчастей и комплектующих" }
];

const principles = [
  {
    icon: "ShieldCheck",
    title: "Гарантия качества и соблюдение сроков"
  },
  {
    icon: "DollarSign",
    title: "Оптимальные цены на оборудование"
  },
  {
    icon: "Users",
    title: "Индивидуальный подход к клиенту"
  },
  {
    icon: "Award",
    title: "Широкий ассортимент оборудования"
  },
  {
    icon: "Wrench",
    title: "Техническое обслуживание оборудования"
  },
  {
    icon: "HeadphonesIcon",
    title: "Постпродажный сервис"
  }
];

export const HomeHero = () => {
  return (
    <>
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
              <Link to="/catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
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
              <a href="#contact">
                <Button size="sm" className="btn-gradient text-white hidden md:block">
                  Заказать звонок
                </Button>
              </a>
              <MobileMenu currentPath="/" />
            </div>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="absolute inset-0">
          <ImageWithWatermark 
            src="https://cdn.poehali.dev/files/478ad401-ddf3-4936-9a52-2fcda59d6718.jpeg"
            alt="Оборудование для свайных работ"
            className="w-full h-full object-cover opacity-20"
            style={{filter: 'brightness(0.9) contrast(1.1) saturate(1.15)'}}
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="animate-fade-in relative z-10">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                10+ лет на рынке
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
                Оборудование и машины для строительства свайных фундаментов
              </h1>
              <div className="mb-4 md:mb-6">
                <p className="text-accent text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                  ПРОИЗВОДСТВО • ПОСТАВКА • СЕРВИС
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
                <a href="#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="btn-gradient-reverse text-white font-medium w-full sm:w-auto">
                    Получить каталог
                  </Button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="btn-gradient-reverse text-white font-medium w-full sm:w-auto">
                    Запросить консультацию
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={18} />
                  <span className="text-white/90 text-xs sm:text-sm">400+ клиентов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={18} />
                  <span className="text-white/90 text-xs sm:text-sm">Прямые поставки</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={18} />
                  <span className="text-white/90 text-xs sm:text-sm">Собственное производство</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <AnimatedCounter 
                  end={stat.value} 
                  suffix="+" 
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent mb-1 md:mb-2"
                />
                <div className="text-xs md:text-sm text-primary leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpecialOfferBanner />

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">О компании КоперГруппСервис</h2>
            <p className="text-primary text-base md:text-lg">
              Мы — команда профессионалов с более чем 10-летним опытом в поставке и производстве оборудования для строительства свайных фундаментов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="relative flex justify-center items-start">
              <div className="max-w-[500px] w-full">
                <img
                  src="https://cdn.poehali.dev/files/8c3796cc-a524-4f33-9530-7c050d6bfc36.png"
                  alt="Производство КГС"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Award" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Поставка импортного оборудования</h3>
                  <p className="text-primary">
                    Сотрудничество с ведущими производителями Китая и Турции
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Factory" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Собственное производство</h3>
                  <p className="text-primary">
                    2 производственных цеха площадью 1000 и 1800 м²
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Users" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Полный цикл услуг</h3>
                  <p className="text-primary">
                    От подбора оборудования до ввода в эксплуатацию и постпродажного сервиса
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              Принципы, которыми мы руководствуемся в работе
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name={principle.icon} className="text-accent" size={24} />
                  </div>
                  <p className="font-medium">{principle.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};