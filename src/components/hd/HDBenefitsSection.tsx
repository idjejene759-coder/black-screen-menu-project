import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Shield",
    title: "Прочность и надёжность",
    description: "Высокая прочность и надёжность конструкции обеспечивают длительный срок службы в условиях интенсивной эксплуатации.",
  },
  {
    icon: "Zap",
    title: "Высокая энергия удара",
    description: "Энергия удара на 30–50% выше по сравнению со штанговыми молотами при одинаковой массе ударной части.",
  },
  {
    icon: "Wrench",
    title: "Простота обслуживания",
    description: "Простота эксплуатации и технического обслуживания. Независимая система принудительной смазки значительно увеличивает срок службы.",
  },
  {
    icon: "Fuel",
    title: "Экономичный расход топлива",
    description: "Оптимальное соотношение массы ударной части и силы удара обеспечивает экономичный расход топлива и низкие эксплуатационные затраты.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Регулировка в процессе работы",
    description: "Возможность настройки силы удара непосредственно в процессе работы без остановки молота.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Доступная стоимость",
    description: "Более доступная стоимость по сравнению с гидравлическими молотами при высокой производительности.",
  },
];

const HDBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества молотов Starke HD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary leading-relaxed text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HDBenefitsSection;
