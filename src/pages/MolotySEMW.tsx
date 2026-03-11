import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const MolotySEMW = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Молоты дизельные трубчатые SEMW | KGS"
        description="Молоты дизельные трубчатые SEMW для забивки свай"
        keywords="молоты semw, дизельные молоты, трубчатые молоты, молот для свай"
        canonical="https://kgs-ural.ru/catalog/moloty-semw"
      />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/5c1db9e3-d3bc-4fef-9e97-4e9fc1e1f1fc.png" 
                alt="KGS Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="text-white hover:text-white transition-colors">
                Оборудование
              </Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">
                О компании
              </Link>
              <Link to="/contact" className="text-white/90 hover:text-white transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+73432888845" className="text-white hover:text-accent transition-colors">
                +7 (343) 288-88-45
              </a>
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs 
              items={[
                { label: "Главная", href: "/" },
                { label: "Каталог", href: "/catalog" },
                { label: "Сваебойные молоты", href: "/catalog/svaebojnye-moloty" },
                { label: "Молоты дизельные трубчатые SEMW" }
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Молоты дизельные трубчатые SEMW
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Дизельные трубчатые молоты для забивки свай
            </p>
          </div>
        </div>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-primary mb-8">
                Информация об оборудовании появится в ближайшее время
              </p>
              <Link to="/catalog">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="ArrowLeft" className="mr-2" size={20} />
                  Вернуться в каталог
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 КГС. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default MolotySEMW;