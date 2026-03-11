import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { ConsultationButton } from "@/components/ConsultationButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyInfo } from "@/components/about/CompanyInfo";
import { TeamAndPartners } from "@/components/about/TeamAndPartners";
import { ProductionAndProjects } from "@/components/about/ProductionAndProjects";

const About = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO 
        title="О компании КоперГруппСервис — 10+ лет в производстве сваебойного оборудования"
        description="КоперГруппСервис — надежный поставщик сваебойного оборудования с 2013 года. 350+ клиентов по России и СНГ. Собственное производство в Екатеринбурге. Гарантия качества и сроков."
        keywords="о компании кгс, производитель сваебойного оборудования, поставщик копровых мачт, история компании, производство екатеринбург"
        canonical="https://kgs-ural.ru/about"
        ogTitle="О компании КоперГруппСервис — производство сваебойного оборудования"
        ogDescription="10+ лет опыта, 350+ клиентов, собственное производство. Надежный партнер в поставках свайного оборудования."
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
              <Link to="/about" className="text-accent transition-colors text-sm font-medium">О компании</Link>
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
              <Button size="sm" className="btn-gradient text-white hidden md:block">
                Заказать звонок
              </Button>
              <MobileMenu currentPath="/about" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'О компании', path: '/about' }]} />

      <AboutHero />
      <CompanyInfo />
      <TeamAndPartners />
      <ProductionAndProjects 
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      <ConsultationSection />

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
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <nav className="space-y-2">
                <Link to="/about" className="block text-accent transition-colors text-sm">О компании</Link>
                <Link to="/production" className="block text-white/70 hover:text-accent transition-colors text-sm">Производство</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Услуги</Link>
              </nav>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:88006007465" className="block text-white/70 hover:text-accent transition-colors">
                  8 (800) 600-74-65
                </a>
                <a href="mailto:info@kgs-ural.ru" className="block text-white/70 hover:text-accent transition-colors">
                  info@kgs-ural.ru
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Video" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 КоперГруппСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <ConsultationButton />
    </div>
  );
};

export default About;