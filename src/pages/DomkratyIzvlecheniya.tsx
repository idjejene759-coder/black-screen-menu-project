import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";

const DomkratyIzvlecheniya = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Домкраты для извлечения свай",
    description: "Гидравлические домкраты для выдергивания забитых свай из грунта. Усилие от 30 до 500 тонн.",
    brand: { "@type": "Brand", name: "KGS" },
    category: "Домкраты",
    manufacturer: { "@type": "Organization", name: "КоперГруппСервис" },
  };

  const specs = [
    { label: "Усилие извлечения", value: "30 — 500 т" },
    { label: "Тип свай", value: "ЖБ, металлические, шпунт" },
    { label: "Принцип работы", value: "Гидравлический" },
    { label: "Перехват", value: "Поэтапный до полного извлечения" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Домкраты для извлечения свай | KGS"
        description="Гидравлические домкраты для извлечения свай усилием 30-500 тонн. Выдергивание временных свай, демонтаж шпунта, повторное использование."
        keywords="домкрат для извлечения свай, выдёргивание свай, гидравлический домкрат сваи"
        canonical="https://kgs-ural.ru/catalog/domkraty-izvlecheniya"
        ogTitle="Домкраты для извлечения свай"
        ogDescription="Гидравлические домкраты для извлечения свай усилием 30-500 тонн."
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />

      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png" alt="КГС Логотип" className="h-12 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <Link to="/catalog" className="text-accent transition-colors text-sm font-medium">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">8 (800) 600-74-65</a>
              <Button size="sm" className="btn-gradient text-white hidden md:block">Заказать звонок</Button>
              <MobileMenu currentPath="/catalog/domkraty-izvlecheniya" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Оборудование", path: "/catalog" },
        { label: "Домкраты для извлечения свай", path: "/catalog/domkraty-izvlecheniya" },
      ]} />

      <section className="relative pt-16 pb-10 md:pt-20 md:pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Домкраты для извлечения свай
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="#specs" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Характеристики</a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">Оставить заявку</a>
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">О домкратах для извлечения свай</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Домкраты для извлечения свай — специализированное гидравлическое оборудование, предназначенное для выдергивания забитых свай из грунта.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Применяются в случаях, когда необходимо демонтировать временные сваи, исправить ошибки при забивке или извлечь сваи для повторного использования. Гидравлический домкрат устанавливается на оголовок сваи и с помощью мощного усилия производит постепенное извлечение.
                </p>
                <div className="space-y-2 pt-2">
                  {["Усилие извлечения от 30 до 500 тонн", "Поэтапный перехват сваи до полного извлечения", "Работа с ЖБ сваями, металлическими и шпунтом", "Компактная конструкция, простота монтажа"].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-base md:text-lg mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-base md:text-lg text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left py-3 px-6 font-heading font-semibold text-base">Параметр</th>
                        <th className="text-left py-3 px-6 font-heading font-semibold text-base">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specs.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-2.5 px-6 text-primary text-base">{spec.label}</td>
                          <td className="py-2.5 px-6 font-semibold text-primary text-base">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ConsultationSection />

      <footer className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png" alt="КГС Логотип" className="h-16 w-auto mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">Официальный дилер ведущих производителей сваебойного оборудования</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">О компании</Link></li>
                <li><Link to="/catalog" className="text-white/70 hover:text-accent transition-colors">Оборудование</Link></li>
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
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors"><Icon name="Send" size={22} /></a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors"><Icon name="Share2" size={22} /></a>
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

export default DomkratyIzvlecheniya;