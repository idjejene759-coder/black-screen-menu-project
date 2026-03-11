import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  currentPath?: string;
}

export const MobileMenu = ({ currentPath = '' }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/about', label: 'О компании' },
    { to: '/catalog', label: 'Оборудование' },
    { to: '/parts', label: 'Запчасти' },
    { to: '/services', label: 'Услуги' },
    { to: '/production', label: 'Производство и доставка' },
    { to: '#', label: 'Новости' },
    { to: '/contact', label: 'Контакты' },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white p-2 hover:text-accent transition-colors"
        aria-label="Меню"
      >
        <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
          />
          
          <div className="fixed top-16 left-0 right-0 bg-primary border-t border-white/10 z-50 animate-fade-in shadow-xl">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      closeMenu();
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    }}
                    className={`text-white/90 hover:text-accent transition-colors py-2 px-3 rounded ${
                      currentPath === link.to ? 'text-accent font-medium bg-accent/10' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                  <a
                    href="tel:88006007465"
                    className="text-white hover:text-accent transition-colors font-medium"
                  >
                    8 (800) 600-74-65
                  </a>
                  <Button className="btn-gradient text-white w-full">
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};