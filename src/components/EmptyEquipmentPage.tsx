import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";

interface EmptyEquipmentPageProps {
  title: string;
  description?: string;
  keywords?: string;
  canonical: string;
  breadcrumbLabel: string;
  breadcrumbCategory?: string;
}

export const EmptyEquipmentPage = ({
  title,
  description = `Информация об оборудовании ${title} появится в ближайшее время`,
  keywords,
  canonical,
  breadcrumbLabel,
  breadcrumbCategory = "Каталог"
}: EmptyEquipmentPageProps) => {
  return (
    <div className="min-h-screen">
      <SEO 
        title={`${title} | KGS`}
        description={description}
        keywords={keywords || title}
        canonical={canonical}
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
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
                </a>
              </div>
              <a href="tel:+78003006587" className="hidden lg:flex items-center text-white text-sm">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (800) 300-65-87
              </a>
              <MobileMenu currentPath="/catalog" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: breadcrumbCategory, path: '/catalog' },
        { label: breadcrumbLabel, path: canonical }
      ]} />

      <section className="relative pt-14 pb-8 md:pt-16 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="mb-8">
                <Icon name="Clock" className="mx-auto text-accent" size={64} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-primary">
                Информация появится в ближайшее время
              </h2>
              <p className="text-lg text-primary mb-8">
                Мы работаем над наполнением раздела подробной информацией об этом оборудовании
              </p>
              <Link to="/catalog">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="ArrowLeft" className="mr-2" size={20} />
                  Вернуться в каталог
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">
                Надёжный поставщик сваебойного оборудования
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Навигация</h3>
              <nav className="space-y-2">
                <Link to="/about" className="block text-white/70 hover:text-accent transition-colors text-sm">О компании</Link>
                <Link to="/catalog" className="block text-white/70 hover:text-accent transition-colors text-sm">Оборудование</Link>
                <Link to="/parts" className="block text-white/70 hover:text-accent transition-colors text-sm">Запчасти</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Услуги</Link>
              </nav>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:+78003006587" className="block text-white/70 hover:text-accent transition-colors">
                  +7 (800) 300-65-87
                </a>
                <a href="mailto:info@kgs-ural.ru" className="block text-white/70 hover:text-accent transition-colors">
                  info@kgs-ural.ru
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-xs md:text-sm">
              © 2024 ООО «КГС». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};