import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Layers",
    title: "Два в одном",
    text: "Первая отечественная мачта с двумя рядами направляющих — для молота и для вращателя одновременно на одной конструкции.",
  },
  {
    icon: "RefreshCw",
    title: "Быстрое переоборудование",
    text: "Монтаж на жёсткой раме занимает 1–2 рабочие смены. Экскаватор после демонтажа мачты полностью сохраняет штатные функции.",
  },
  {
    icon: "TrendingUp",
    title: "Экономическая эффективность",
    text: "Одна машина выполняет функции сваебойной и буровой установки, что снижает затраты на технику и перебазировку.",
  },
  {
    icon: "Shield",
    title: "Российское производство",
    text: "Оборудование производится в России. Запасные части в наличии, мобильная сервисная служба KGS.",
  },
  {
    icon: "ArrowUpDown",
    title: "Большой диапазон масс",
    text: "Совместима с экскаваторами от 20 до 45 тонн. Длина основной мачты — от 10 до 18 м под задачи заказчика.",
  },
];

const MachtyMkbe2RuBenefits = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества мачты МКБЭ-2
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={b.icon} size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-primary">{b.title}</h3>
                  </div>
                  <p className="text-base text-primary leading-relaxed">{b.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachtyMkbe2RuBenefits;
