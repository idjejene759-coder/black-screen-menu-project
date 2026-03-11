import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export const EquipmentFooter = () => {
  return (
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
  );
};
