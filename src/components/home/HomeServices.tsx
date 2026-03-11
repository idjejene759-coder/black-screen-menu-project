import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { ImageWithWatermark } from "@/components/ImageWithWatermark";

const services = [
  {
    icon: "Wrench",
    title: "Шефмонтаж и пусконаладка оборудования",
    description: "Профессиональная установка и настройка оборудования"
  },
  {
    icon: "Settings",
    title: "Техническое обслуживание",
    description: "Регулярное обслуживание и ремонт техники"
  },
  {
    icon: "GraduationCap",
    title: "Консультация и обучение",
    description: "Обучение персонала работе с оборудованием"
  },
  {
    icon: "ShieldCheck",
    title: "Гарантийное и постгарантийное обслуживание",
    description: "Полная поддержка на всех этапах эксплуатации"
  }
];

export const HomeServices = () => {
  return (
    <>
      <section id="services" className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Наши услуги</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} className="text-accent" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-lg">{service.title}</h3>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-gradient-reverse text-white font-medium">
                Подробнее об услугах
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="production" className="py-10 md:py-14 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                Производство
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Производственный цех
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>2 производственных цеха площадью 1000 и 1800 кв.м.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>2 станка плазменной резки с ЧПУ 2,5 × 6,0 м</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>12 сварочных постов (полуавтомат)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Фрезерные и токарные станки с ЧПУ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                  <span>Кран-балки грузоподъёмностью 5 т.</span>
                </div>
              </div>

              <Link to="/production">
                <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90">
                  Подробнее о производстве
                </Button>
              </Link>
            </div>

            <div className="image-card relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary opacity-30 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary opacity-30 z-10 pointer-events-none"></div>
              <ImageWithWatermark 
                src="https://cdn.poehali.dev/files/659f2e6b-375e-43a9-849a-527f54ee4b64.png"
                alt="Производственный цех КГС"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};