import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { CartButton } from "@/components/CartButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PartsHero } from "@/components/parts/PartsHero";
import { PartsDescription } from "@/components/parts/PartsDescription";
import { PartsCatalog } from "@/components/parts/PartsCatalog";
import ConsultationSection from "@/components/ConsultationSection";

const Parts = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Запчасти для сваебойного оборудования — оригинальные комплектующие | КГС"
        description="Большой склад запчастей для сваебойного оборудования. Оригинальные комплектующие для молотов, копровых мачт, буровых установок. Быстрая доставка по России. Консультация по подбору."
        keywords="запчасти для сваебойного оборудования, комплектующие для молотов, запчасти копровых мачт, детали буровых установок, купить запчасти"
        canonical="https://kgs-ural.ru/parts"
        ogTitle="Запчасти для сваебойного оборудования"
        ogDescription="Оригинальные запчасти, большой склад, быстрая доставка. Консультация по подбору."
      />
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
              <Link to="/" className="text-white/90 hover:text-accent transition-colors text-sm">Главная</Link>
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <a href="/#catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Каталог</a>
              <Link to="/parts" className="text-accent transition-colors text-sm font-medium">Запчасти</Link>
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
              <CartButton />
              <MobileMenu currentPath="/parts" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Запчасти', path: '/parts' }]} />

      <PartsHero />
      <PartsDescription />
      <PartsCatalog />
      <ConsultationSection />

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/70 text-sm mb-4">
                Производство и поставка оборудования для строительства свайных фундаментов
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#catalog" className="text-white/70 hover:text-accent transition-colors">Буровое оборудование</a></li>
                <li><a href="/#catalog" className="text-white/70 hover:text-accent transition-colors">Спецтехника</a></li>
                <li><Link to="/parts" className="text-white/70 hover:text-accent transition-colors">Запчасти</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Шефмонтаж и пусконаладка оборудования</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Техническое обслуживание и обучение</Link></li>
                <li><Link to="/services" className="text-white/70 hover:text-accent transition-colors">Гарантия</Link></li>
                <li><Link to="/production" className="text-white/70 hover:text-accent transition-colors">Производство и доставка</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-white/70">г. Екатеринбург, ул. Фронтовых бригад, д. 22, оф. 909</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-accent flex-shrink-0" />
                  <a href="tel:88006007465" className="text-white/70 hover:text-accent transition-colors">8 (800) 600-74-65</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-accent flex-shrink-0" />
                  <a href="mailto:info@kgs-ural.ru" className="text-white/70 hover:text-accent transition-colors">info@kgs-ural.ru</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 ООО «КГС». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Parts;