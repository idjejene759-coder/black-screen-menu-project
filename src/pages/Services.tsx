import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ConsultationSection from "@/components/ConsultationSection";

const Services = () => {
  const [isServiceFormOpen, setIsServiceFormOpen] = useState(false);
  const [serviceForm, setServiceForm] = useState({ name: "", phone: "", email: "" });

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Шефмонтаж и техническое обслуживание сваебойного оборудования",
    "provider": {
      "@type": "Organization",
      "name": "КоперГруппСервис",
      "url": "https://kgs-ural.ru"
    },
    "areaServed": ["RU", "KZ", "BY"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги по обслуживанию сваебойного оборудования",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Шефмонтаж и пусконаладка оборудования",
            "description": "Профессиональная установка и настройка сваебойного оборудования на объекте"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Техническое обслуживание и ремонт",
            "description": "Диагностика, ремонт и обслуживание сваебойной и буровой техники"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Обучение персонала",
            "description": "Обучение операторов и механиков работе с оборудованием"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Гарантийное обслуживание",
            "description": "Гарантийное и постгарантийное обслуживание оборудования"
          }
        }
      ]
    }
  };

  const supervisionProcesses = [
    "Выезжают на объект и проводят настройку и пусконаладку спецтехники, включая тестирование в различных режимах эксплуатации",
    "Предоставляют квалифицированные консультации по монтажу оборудования. Согласовывают с заказчиком объем работ, тип и количество привлекаемой техники",
    "Проводят шефмонтаж сваебойного оборудования по всей России и странах СНГ",
    "Контролируют монтаж и качество установочных и пусконаладочных работ, инструктируют операторов и механиков по вопросам правильной эксплуатации техники",
    "Сдают оборудование заказчику и совместно с ним тестируют работу всех основных функций спецтехники в рабочих режимах"
  ];

  const supervisionBenefits = [
    { icon: "UserCheck", title: "Профессиональный монтаж", description: "под контролем инженеров" },
    { icon: "Settings", title: "Точная настройка", description: "и тестирование в рабочих режимах" },
    { icon: "GraduationCap", title: "Инструктаж персонала", description: "по эксплуатации и обслуживанию" },
    { icon: "Award", title: "Соответствие стандартам", description: "завода-изготовителя" },
    { icon: "Zap", title: "Бесперебойная работа", description: "техники с первого запуска" }
  ];

  const maintenanceServices = [
    { icon: "Wrench", title: "Диагностика и ремонт", description: "сваебойной и буровой техники" },
    { icon: "HardHat", title: "Шефмонтаж оборудования", description: "поставляемого нашей компанией" },
    { icon: "GraduationCap", title: "Обучение", description: "операторов и механиков на месте эксплуатации" },
    { icon: "MessageSquare", title: "Консультации", description: "по техническому обслуживанию и эксплуатации" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Услуги по шефмонтажу и обслуживанию сваебойного оборудования | КГС"
        description="Шефмонтаж и пусконаладка сваебойного оборудования по России и СНГ. Техническое обслуживание, гарантия, обучение персонала. Выезд специалистов на объект. 60+ шефмонтажей."
        keywords="шефмонтаж сваебойного оборудования, пусконаладка буровых установок, техническое обслуживание свайной техники, ремонт сваебойных молотов, обучение операторов"
        canonical="https://kgs-ural.ru/services"
        ogTitle="Шефмонтаж и обслуживание сваебойного оборудования"
        ogDescription="Профессиональный шефмонтаж, пусконаладка и техобслуживание сваебойной техники. Гарантия качества."
      />
      <SchemaOrg data={servicesSchema} />
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
              <Link to="/services" className="text-accent transition-colors text-sm font-medium">Услуги</Link>
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
              <MobileMenu currentPath="/services" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Услуги', path: '/services' }]} />

      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Профессиональный сервис
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Услуги
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Полный спектр услуг по монтажу, обслуживанию и ремонту сваебойного и бурового оборудования
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#supervision" 
                className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium"
              >
                Шефмонтаж и пусконаладка оборудования
              </a>
              <a 
                href="#maintenance" 
                className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium"
              >
                Техническое обслуживание и обучение
              </a>
              <a 
                href="#guarantee" 
                className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium"
              >
                Гарантия
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="supervision" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/50">
                Шефмонтаж оборудования
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Шефмонтаж и пусконаладка оборудования
              </h2>
              <p className="text-xl text-accent font-semibold mb-4">
                Безупречная установка — надёжная работа вашей техники!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
              <div className="space-y-6">
                <p className="text-primary leading-relaxed">
                  Мы выполняем шефмонтаж и пусконаладку оборудования по всей территории России и стран СНГ.
                </p>
                <p className="text-primary leading-relaxed">
                  Одной из наиболее востребованных услуг нашей компании является шефмонтаж, который гарантирует бесперебойную работу сваебойного оборудования, буровых установок, ударных молотов и другого оборудования для правильной установки и эксплуатации.
                </p>
                <div>
                  <p className="text-primary leading-relaxed mb-3">
                    <strong className="text-foreground">Шефмонтаж</strong> — это процесс установки оборудования под контролем опытного инженерного специалиста. Благодаря этой услуге заказчики могут быть уверены в:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <Icon name="CheckCircle2" className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-primary">правильности монтажа и настройки всех элементов оборудования;</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle2" className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-primary">соблюдении стандартов эксплуатации завода-изготовителя;</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle2" className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-primary">наличии всех необходимых комплектующих.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Card className="overflow-hidden p-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/files/88f01299-6295-4f4d-943f-84df014ee381.jpg"
                    alt="Шефмонтаж сваебойного оборудования"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Card>
            </div>

            <Card className="p-8 mb-10">
              <h3 className="text-xl font-heading font-bold mb-6">
                Шефмонтаж и пусконаладка включают целый ряд производственных процессов, в рамках которых наши специалисты:
              </h3>
              <div className="space-y-4">
                {supervisionProcesses.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-accent/10 text-accent font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <p className="text-primary leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mb-10">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Что вы получаете:</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {supervisionBenefits.map((benefit, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon} className="text-accent" size={32} />
                    </div>
                    <h4 className="font-heading font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-primary">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-accent/5">
              <p className="text-primary leading-relaxed text-center">
                Наши сервисные инженеры — это специалисты с многолетним опытом работы, которые знают все тонкости наладки и настройки сложного оборудования, строго соблюдая действующие стандарты и нормативы.
              </p>
              <p className="text-lg font-semibold text-center mt-4 mb-6">
                КоперГруппСервис — гарант надёжного старта вашей техники.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="btn-gradient text-white" onClick={() => setIsServiceFormOpen(true)}>
                  <Icon name="FileText" className="mr-2" size={20} />
                  Оставить заявку сервисному инженеру
                </Button>
              </div>

              <Dialog open={isServiceFormOpen} onOpenChange={setIsServiceFormOpen}>
                <DialogContent className="sm:max-w-[440px]">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-heading font-bold text-primary">
                      Заявка сервисному инженеру
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={(e) => { e.preventDefault(); console.log("Service form:", serviceForm); setIsServiceFormOpen(false); }} className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block text-primary">ФИО<span className="text-red-500">*</span></label>
                      <Input value={serviceForm.name} onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })} placeholder="Иван Иванов" required />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block text-primary">Телефон<span className="text-red-500">*</span></label>
                      <Input type="tel" value={serviceForm.phone} onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })} placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1.5 block text-primary">Email<span className="text-red-500">*</span></label>
                      <Input type="email" value={serviceForm.email} onChange={(e) => setServiceForm({ ...serviceForm, email: e.target.value })} placeholder="email@example.com" required />
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox id="privacy-service" className="mt-1" />
                      <label htmlFor="privacy-service" className="text-xs text-primary leading-relaxed cursor-pointer">
                        Я согласен на обработку персональных данных в соответствии с{" "}
                        <a href="#" className="text-primary hover:text-accent underline">политикой конфиденциальности</a>
                      </label>
                    </div>
                    <Button type="submit" className="w-full btn-gradient-reverse text-white uppercase tracking-wider font-bold">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </Card>
          </div>
        </div>
      </section>

      <section id="maintenance" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/50">
                Техническое обслуживание и обучение
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Обслуживание спецтехники и обучение персонала
              </h2>
              <p className="text-xl text-accent font-semibold">
                Надёжный сервис для вашей техники
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
              <div className="space-y-6 text-primary leading-relaxed">
                <p className="text-lg">
                  Качественное техническое обслуживание — залог долгой и бесперебойной работы сваебойной, буровой техники и навесного оборудования.
                </p>
                <p>
                  В современных условиях сервис может успешно функционировать только при наличии опытных специалистов и профессионального диагностического оборудования. Именно поэтому в компании КоперГруппСервис большое внимание уделяется подготовке персонала — наши инженеры регулярно проходят обучение и повышение квалификации, в том числе на заводах-изготовителях оборудования.
                </p>

                <div>
                  <h3 className="text-2xl font-heading font-bold mb-6">Что мы делаем:</h3>
                  <div className="grid gap-4">
                    {maintenanceServices.map((service, index) => (
                      <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-3">
                          <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name={service.icon} className="text-accent" size={20} />
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold mb-1">{service.title}</h4>
                            <p className="text-sm text-primary">{service.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="p-6 bg-accent/5">
                  <h3 className="text-xl font-heading font-bold mb-3">Надёжность, подтверждённая опытом</h3>
                  <p className="text-primary leading-relaxed mb-3">
                    За годы работы мы выстроили прочные партнёрские отношения с крупными поставщиками оригинальных комплектующих. Это позволяет нам использовать качественные детали от заводов-изготовителей и поддерживать высокий уровень сервиса.
                  </p>
                  <p className="text-lg font-semibold">
                    КоперГруппСервис — ваш надёжный партнёр в обслуживании сваебойной и буровой техники.
                  </p>
                </Card>
              </div>

              <div className="lg:sticky lg:top-24">
                <Card className="overflow-hidden p-2 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="relative rounded-lg overflow-hidden aspect-[3/4] shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/8ae33331-780b-4a38-a75c-c46f19440710.jpg"
                      alt="Сваебойная и буровая техника КоперГруппСервис"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Консультации и обучение персонала</h3>
              <Card className="p-8">
                <h4 className="text-xl font-heading font-bold mb-4">Почему важно обучение:</h4>
                <p className="text-primary leading-relaxed mb-4">
                  Неподготовленный оператор может допустить ошибки, которые приведут к неисправностям или аварийным ситуациям. Обучение механиков и операторов позволяет избежать поломок, повысить безопасность и продлить срок службы оборудования.
                </p>
                <p className="text-primary leading-relaxed">
                  Наши специалисты знают специфику каждой модели техники и умеют находить решение даже в нестандартных ситуациях.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="guarantee" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
                Гарантийное обслуживание
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Надёжность, подтверждённая гарантией
              </h2>
            </div>

            <Card className="p-8 bg-white/10 border-white/20 text-white">
              <div className="space-y-6 leading-relaxed">
                <p className="text-lg font-semibold text-accent">
                  КоперГруппСервис предоставляет гарантию сроком 12 месяцев с момента поставки оборудования (за исключением расходных материалов).
                </p>
                <p>
                  Мы работаем по всей России и в странах СНГ, обеспечивая профессиональный сервис, ремонт и диагностику оборудования для фундаментостроения.
                </p>
                <p className="text-lg font-semibold">
                  КоперГруппСервис — надёжный партнёр и гарантия бесперебойной работы вашей техники.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ConsultationSection />

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-16 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">
                Производство и поставка оборудования для строительства свайных фундаментов
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <nav className="space-y-2">
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Шефмонтаж и пусконаладка оборудования</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Техническое обслуживание и обучение</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Гарантия</Link>
                <Link to="/production" className="block text-white/70 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              </nav>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:88006007465" className="block text-white/70 hover:text-accent transition-colors">
                  8 (800) 600-74-65
                </a>
                <a href="mailto:service@kgs-ural.ru" className="block text-white/70 hover:text-accent transition-colors">
                  service@kgs-ural.ru
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kgsural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={20} />
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

export default Services;