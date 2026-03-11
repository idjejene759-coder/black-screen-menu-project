import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";

const Contact = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash]);
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "КоперГруппСервис",
      "url": "https://kgs-ural.ru",
      "logo": "https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+7-800-600-74-65",
          "contactType": "customer service",
          "email": "service@kgs-ural.ru",
          "availableLanguage": "Russian",
          "areaServed": ["RU", "KZ", "BY"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "sales2@kgs-ural.ru",
          "availableLanguage": "Russian"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Екатеринбург",
        "addressCountry": "RU"
      }
    }
  };

  const team = [
    {
      name: "Евгений Анатольевич Селезнев",
      position: "Генеральный директор ООО «КГС»",
      email: "info@kgs-ural.ru",
      slug: "/contact/seleznev"
    },
    {
      name: "Ольга Александровна Тапинюк",
      position: "Исполнительный директор ООО «КГС»",
      email: "zhirova@kgs-ural.ru",
      slug: "/contact/tapinyuk"
    },
    {
      name: "Юлия Александровна Плюхина",
      position: "Менеджер по продажам ООО «КГС»",
      email: "sales2@kgs-ural.ru",
      slug: "/contact/plyukhina"
    },
    {
      name: "Анна Викторовна Семенова",
      position: "Менеджер по продажам ООО «КГС»",
      email: "sales4@kgs-ural.ru",
      slug: "/contact/semenova"
    },
    {
      name: "Артур Фирдависович Муталлапов",
      position: "Сервисный инженер ООО «КГС»",
      email: "service@kgs-ural.ru",
      slug: "/contact/mutallapov"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Контакты КГС — связаться с поставщиком сваебойного оборудования"
        description="Контакты компании КГС: телефон 8 (800) 600-74-65, email service@kgs-ural.ru. Офис в Екатеринбурге. Бесплатная консультация по оборудованию. Работаем по всей России и СНГ."
        keywords="контакты кгс, купить сваебойное оборудование екатеринбург, телефон поставщика, консультация по оборудованию"
        canonical="https://kgs-ural.ru/contact"
        ogTitle="Контакты КГС"
        ogDescription="Свяжитесь с нами: 8 (800) 600-74-65, бесплатная консультация по оборудованию."
      />
      <SchemaOrg data={contactSchema} />
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
              <Link to="/catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <a href="#" className="text-white/90 hover:text-accent transition-colors text-sm">Новости</a>
              <Link to="/contact" className="text-accent transition-colors text-sm font-medium">Контакты</Link>
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
              <MobileMenu currentPath="/contact" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Контакты', path: '/contact' }]} />

      <section className="relative pt-14 pb-10 md:pt-16 md:pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Контакты
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Свяжитесь с нами любым удобным способом. Мы работаем по всей России и в странах СНГ.
            </p>
          </div>
        </div>
      </section>

      <ConsultationSection reversed />

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div id="team" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Сотрудники компании</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Link key={index} to={member.slug}>
                  <Card className="p-6 hover:shadow-xl transition-all cursor-pointer hover:border-primary/40 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden border-2 border-primary/20 shadow-md bg-primary flex items-center justify-center">
                        <img
                          src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/f0c32034-3119-4a73-9d2f-8c27a83d9b44.png"
                          alt="КГС"
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-sm text-primary mb-3">{member.position}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Mail" size={16} />
                            <span>{member.email}</span>
                          </span>
                          <span className="inline-flex items-center space-x-1 text-xs text-primary/60 group-hover:text-primary transition-colors">
                            <span>Открыть</span>
                            <Icon name="ChevronRight" size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-primary/5 max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Icon name="Mail" className="text-accent" size={24} />
                <h3 className="font-heading font-semibold text-lg">По вопросам рекламы и сотрудничества</h3>
              </div>
              <a 
                href="mailto:marketing@kgs-ural.ru"
                className="text-primary hover:text-accent transition-colors font-medium text-lg"
              >
                marketing@kgs-ural.ru
              </a>
            </Card>
          </div>



          <div>
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Реквизиты</h2>
            <Card className="p-8 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                  <Icon name="FileText" className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    ООО «КоперГруппСервис»
                  </h3>
                  <div className="space-y-2 text-primary">
                    <p className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground w-20">ИНН:</span>
                      <span>6670440671</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground w-20">КПП:</span>
                      <span>66001001</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="font-semibold text-foreground w-20">ОГРН:</span>
                      <span>1169658096189</span>
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full btn-gradient-reverse text-white" size="lg">
                <Icon name="Download" className="mr-2" size={18} />
                Скачать реквизиты (PDF)
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                  alt="КГС Логотип"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm">
                Производство и поставка оборудования для строительства свайных фундаментов
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Сваебойные молоты</a></li>
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Буровые установки</a></li>
                <li><a href="/#catalog" className="hover:text-accent transition-colors">Копровые мачты</a></li>
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
    </div>
  );
};

export default Contact;