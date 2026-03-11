import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OptimizedImage } from "@/components/OptimizedImage";
import { EquipmentForm } from "@/components/EquipmentForm";
import { useState } from "react";

const VibroSG = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)",
    "description": "Гидравлические экскаваторные вибропогружатели серии CS с боковым зажимом для экскаваторов 18-40 тонн.",
    "brand": {
      "@type": "Brand",
      "name": "KGS"
    },
    "category": "Вибропогружатели экскаваторные",
    "manufacturer": {
      "@type": "Organization",
      "name": "КоперГруппСервис"
    }
  };

  const galleryImages = [
    "https://cdn.poehali.dev/files/15229d1d-d65c-45a6-b826-53c849a41ca6.jpg",
    "https://cdn.poehali.dev/files/8d5ff46f-c1e3-455c-b4bb-8e35f5ef25aa.png",
    "https://cdn.poehali.dev/files/8d5ff46f-c1e3-455c-b4bb-8e35f5ef25aa.png",
    "https://cdn.poehali.dev/files/8d5ff46f-c1e3-455c-b4bb-8e35f5ef25aa.png"
  ];

  const questions = [
    { question: "Грузоподъемность базовой машины?" },
    { question: "Что планируете погружать?" },
    { question: "Глубина погружения?" },
    { question: "Диаметр трубы?" },
    { question: "Какие требуются зажимы?", options: ["Труба", "Шпунт", "Сваи"] },
    { question: "Какие будут грунты?" },
    { question: "Требуется ли шефмонтаж?", options: ["Да", "Нет"] },
    { question: "Когда планируется объект?" },
    { question: "В какой город осуществлять доставку?" }
  ];

  return (
    <div className="min-h-screen">
      <SEO title="Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS) | KGS" description="Вибропогружатели серии CS с боковым зажимом для экскаваторов 18-40 тонн. Удобство работы, лучший обзор, возможность работы в ограниченном пространстве." keywords="вибропогружатели, серия CS, боковой зажим, экскаваторные вибропогружатели" canonical="https://kgs-ural.ru/catalog/vibro-sg" ogTitle="Вибропогружатели серии CS с боковым зажимом" ogDescription="Экскаваторные вибропогружатели CS для погружения шпунтовых свай, труб, железобетонных свай." />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2"><img src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg" alt="КоперГруппСервис" className="h-8 w-auto" /></Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/catalog" className="text-white/90 hover:text-white transition-colors">Каталог</Link>
              <Link to="/services" className="text-white/90 hover:text-white transition-colors">Услуги</Link>
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">О компании</Link>
              <Link to="/contacts" className="text-white/90 hover:text-white transition-colors">Контакты</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4"><a href="tel:+73432888499" className="text-white/90 hover:text-white transition-colors">+7 343 288-84-99</a></div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог", href: "/catalog" }, { label: "Вибропогружатели экскаваторные", href: "/catalog#excavator-vibro-drivers" }, { label: "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)" }]} />

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                <OptimizedImage src={selectedImage || galleryImages[0]} alt="Вибропогружатели серии CS" className="w-full h-full object-contain" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <button key={index} onClick={() => setSelectedImage(image)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === image || (!selectedImage && index === 0) ? 'border-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                    <OptimizedImage src={image} alt={`Вид ${index + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Badge className="mb-4">Вибропогружатели экскаваторные</Badge>
              <h1 className="text-3xl font-bold mb-4">Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)</h1>
              
              <div className="prose max-w-none mb-6">
                <h2 className="text-xl font-semibold mb-3">Гидравлические экскаваторные вибропогружатели серия CS</h2>
                <p className="text-primary mb-4">Гидравлический экскаваторный вибропогружатель серии CS — профессиональное оборудование с боковым зажимом для погружения и извлечения свайных элементов. Предназначен для монтажа на экскаваторы с грузоподъемностью от 18 до 40 тонн.</p>
                <p className="text-primary mb-4">Применяется для погружения и извлечения шпунтовых свай, труб, двутавра, свай из бетона и железобетона, швеллера, уголков, арматуры, забивки деревянных свай, анкеров, а также уплотнения бетона.</p>

                <h3 className="text-lg font-semibold mb-3 mt-6">Преимущества серии CS (боковой зажим)</h3>
                <ul className="space-y-2 text-primary">
                  <li className="flex items-start"><Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span>Боковое расположение зажима обеспечивает удобство работы и лучший обзор</span></li>
                  <li className="flex items-start"><Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span>Возможность работы в ограниченном пространстве</span></li>
                  <li className="flex items-start"><Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span>Простота замены свайных элементов</span></li>
                  <li className="flex items-start"><Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span>Высокая производительность при работе с различными типами свай</span></li>
                  <li className="flex items-start"><Icon name="check" className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span>Надежная фиксация элементов во время погружения</span></li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" onClick={() => setShowConsultationForm(true)}>Получить консультацию</Button>
                <Button size="lg" variant="outline" className="flex-1" asChild><a href="tel:+73432888499"><Icon name="phone" className="w-5 h-5 mr-2" />Позвонить</a></Button>
              </div>
            </div>
          </div>

          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Получить консультацию</h2>
              <EquipmentForm equipmentType="Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)" questions={questions} />
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div><img src="https://cdn.poehali.dev/files/e28d33a0-39b3-47ca-8f8d-54ccfc65a97b.svg" alt="КоперГруппСервис" className="h-8 w-auto mb-4" /><p className="text-gray-400 text-sm">Поставка свайного оборудования и спецтехники</p></div>
            <div><h3 className="font-semibold mb-4">Навигация</h3><ul className="space-y-2 text-sm"><li><Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">Каталог</Link></li><li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link></li><li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О компании</Link></li><li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li></ul></div>
            <div><h3 className="font-semibold mb-4">Контакты</h3><ul className="space-y-2 text-sm text-gray-400"><li><a href="tel:+73432888499" className="hover:text-white transition-colors">+7 343 288-84-99</a></li><li><a href="mailto:kgs@kgs-ural.ru" className="hover:text-white transition-colors">kgs@kgs-ural.ru</a></li></ul></div>
            <div><h3 className="font-semibold mb-4">Юридическая информация</h3><p className="text-sm text-gray-400">ООО "КоперГруппСервис"<br />ИНН: 6686113105<br />ОГРН: 1196658042503</p></div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">© 2024 КоперГруппСервис. Все права защищены.</div>
        </div>
      </footer>

      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Получить консультацию</h2>
                <button onClick={() => setShowConsultationForm(false)} className="text-gray-400 hover:text-primary"><Icon name="x" className="w-6 h-6" /></button>
              </div>
              <EquipmentForm equipmentType="Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)" questions={questions} onSuccess={() => setShowConsultationForm(false)} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default VibroSG;