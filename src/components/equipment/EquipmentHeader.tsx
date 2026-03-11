import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";

interface EquipmentHeaderProps {
  currentPath: string;
}

export const EquipmentHeader = ({ currentPath }: EquipmentHeaderProps) => {
  return (
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
            <MobileMenu currentPath={currentPath} />
          </div>
        </div>
      </div>
    </header>
  );
};
