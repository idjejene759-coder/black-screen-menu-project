import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Wrench",
    title: "Быстрый демонтаж",
    description: "Мачта легко снимается, при этом базовая машина полностью сохраняет свои штатные функции.",
  },
  {
    icon: "TrendingUp",
    title: "Экономическая эффективность",
    description: "Переоборудование гусеничного крана в сваебойную или буровую установку позволяет задействовать технику, которая ранее простаивала без работы.",
  },
  {
    icon: "RefreshCw",
    title: "Универсальность",
    description: "Быстрое переоборудование: кран ⇔ сваебойная или буровая установка.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Оптимальные цены",
    description: "Копровая мачта МК KGS позволяет получить сваебойную или буровую установку, которая в 10–20 раз дешевле импортных аналогов.",
  },
  {
    icon: "Settings",
    title: "Простота эксплуатации",
    description: "Оборудование отличается удобством управления и обслуживания.",
  },
];

const MachtyBenefitsSection = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Ключевые преимущества МК KGS
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

export default MachtyBenefitsSection;