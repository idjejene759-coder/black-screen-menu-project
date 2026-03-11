import { Link } from "react-router-dom";
import ConsultationSection from "@/components/ConsultationSection";
import Icon from "@/components/ui/icon";

export const HomeContact = () => {
  return (
    <>
      <ConsultationSection />

      <footer className="bg-primary text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-3 md:mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                  alt="КГС Логотип"
                  className="h-12 md:h-16 w-auto"
                />
              </div>
              <p className="text-white/70 text-xs md:text-sm">
                Производство и поставка оборудования для строительства свайных фундаментов
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Каталог</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Сваебойные молоты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Буровые установки</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Копровые мачты</a></li>
                <li><Link to="/parts" className="hover:text-accent transition-colors">Запчасти</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/services" className="hover:text-accent transition-colors">Шефмонтаж и пусконаладка оборудования</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Техническое обслуживание и обучение</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Гарантия</Link></li>
                <li><Link to="/production" className="hover:text-accent transition-colors">Производство и доставка</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-accent transition-colors">О нас</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Новости</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <p>© 2025 КоперГруппСервис. Все права защищены.</p>
              <div className="flex items-center space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
                </a>
                <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  <Icon name="Video" size={20} />
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-accent transition-colors">Политика cookie</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};