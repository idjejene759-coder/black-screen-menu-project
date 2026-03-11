import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EquipmentForm } from "@/components/EquipmentForm";
import { useState } from "react";
import MachtyKitayContent from "./machty-kitay/MachtyKitayContent";
import MachtyKitaySpecs from "./machty-kitay/MachtyKitaySpecs";

const MachtyKitay = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Мачты копровые экскаваторные (Китай)",
    description: "Экскаваторная копровая мачта китайского производства — навесное оборудование для переоборудования экскаватора в сваебойную установку. Высота 20 850 мм, 2 лебёдки по 4 т.",
    brand: { "@type": "Brand", name: "KGS" },
    category: "Копровые мачты",
    manufacturer: { "@type": "Organization", name: "КоперГруппСервис" },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Мачты копровые экскаваторные (Китай) | KGS"
        description="Копровая мачта китайского производства для экскаваторов. Высота 20 850 мм, 2 лебёдки по 4 т, гидравлическая регулировка наклона. Переоборудование экскаватора в сваебойную установку."
        keywords="копровая мачта Китай, мачта экскаваторная китайская, копровое оборудование Китай, сваебойная установка на экскаватор"
        canonical="https://kgs-ural.ru/catalog/machty-kitay"
        ogTitle="Мачты копровые экскаваторные (Китай) — переоборудование экскаватора в сваебойную установку"
        ogDescription="Копровая мачта китайского производства. Высота 20 850 мм, 2 лебёдки по 4 т. Надёжная конструкция для забивки свай."
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
              <MobileMenu currentPath="/catalog/machty-kitay" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Оборудование", path: "/catalog" },
        { label: "Мачты копровые экскаваторные (Китай)", path: "/catalog/machty-kitay" },
      ]} />

      <MachtyKitayContent />
      <MachtyKitaySpecs />

      {/* CTA */}
      <section id="consultation" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              Нужна консультация по копровой мачте (Китай)?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8">
              Оставьте заявку и наши специалисты помогут подобрать оптимальную комплектацию под ваши задачи и базовую машину
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
              <h3 className="font-heading font-semibold text-lg">Консультация: Мачты (Китай)</h3>
              <button
                onClick={() => setShowConsultationForm(false)}
                className="text-primary hover:text-primary"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="p-4">
              <EquipmentForm
                categoryTitle="Мачты копровые экскаваторные (Китай)"
                categoryId="machty-kitay"
                questions={[
                  {
                    question: "Модель экскаватора?",
                  },
                  {
                    question: "Что планируете навешивать?",
                    options: ["Гидромолот (забивка свай)", "Нужна консультация"],
                  },
                  {
                    question: "Какие сваи планируете забивать?",
                    columns: [
                      { label: "Сечение", placeholder: "Укажите сечение свай" },
                      { label: "Длина", placeholder: "Укажите длину свай" },
                    ],
                  },
                  { question: "Когда планируется закупка (объект)?" },
                  { question: "В какой город осуществлять доставку?" },
                ]}
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
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

export default MachtyKitay;