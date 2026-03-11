import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const capabilities = [
  {
    icon: "Ruler",
    title: "Инженерный отдел",
    description: "Выполняет детальные расчёты, моделирование и проектирование конструкций"
  },
  {
    icon: "Factory",
    title: "Производственный участок",
    description: "Быстро и качественно изготавливает оборудование, соблюдая стандарты качества"
  },
  {
    icon: "Wrench",
    title: "Сервисные инженеры",
    description: "Обеспечивают профессиональный шефмонтаж и ввод оборудования в эксплуатацию"
  }
];

export const ProductionCycle = () => {
  return (
    <section id="production-cycle" className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Полный цикл производства навесного оборудования
          </h2>
          <div className="prose prose-lg max-w-none text-primary space-y-4">
            <p>
              Одним из ключевых направлений деятельности компании является полный цикл производства оборудования для фундаментостроения, а также изготовление металлоконструкций любой сложности по чертежам заказчика.
            </p>
            <p>
              Мы создаём решения, соответствующие техническим нормам, инженерным требованиям и задачам конкретного проекта.
            </p>
            <p>
              Наш опыт позволяет нам воплощать даже самые сложные инженерные идеи, если они не противоречат законам физики и требованиям безопасности.
            </p>
            <p className="font-semibold text-primary">
              Работа компании строится по принципу полного цикла — от инженерных расчётов до монтажа оборудования:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-primary">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    Производство на Урале
                  </h3>
                  <p className="text-primary">
                    Наше производство расположено на Урале — в центре металлургической промышленности России, что позволяет минимизировать логистические расходы, сокращать сроки поставок и предлагать максимально выгодные условия для наших клиентов.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://cdn.poehali.dev/files/0e4eb50d-5afd-4176-96cd-cedd837ed88d.png"
              alt="Производственный цех КГС на Урале"
              variant="content"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};