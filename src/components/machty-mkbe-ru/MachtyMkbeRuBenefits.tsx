import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "RefreshCw",
    title: "Быстрое переоборудование",
    text: "Монтаж мачты на стреле экскаватора занимает 2–3 часа. После демонтажа экскаватор полностью сохраняет штатные функции.",
  },
  {
    icon: "TrendingUp",
    title: "Экономическая эффективность",
    text: "Переоборудование экскаватора в сваебойную или буровую установку позволяет задействовать имеющуюся технику без покупки специализированной машины.",
  },
  {
    icon: "Shield",
    title: "Российское производство",
    text: "Оборудование производится в России, сертифицировано по ТР ТС, имеет Декларацию соответствия ЕАЭС. Запчасти в наличии.",
  },
  {
    icon: "Settings",
    title: "Широкий спектр работ",
    text: "Забивка свай, лидерное бурение, шпунтовые работы, завинчивание винтовых свай — всё на одной мачте.",
  },
  {
    icon: "Wrench",
    title: "Простое обслуживание",
    text: "Питание от бортовой сети экскаватора. Управление из кабины дополнительным джойстиком. Мобильная сервисная служба KGS.",
  },
];

const MachtyMkbeRuBenefits = () => {
  return (
    <section id="benefits" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Преимущества мачты МКБЭ
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

export default MachtyMkbeRuBenefits;
