import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MsExInfoSection = () => {
  return (
    <section id="advantages" className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Подробнее о преимуществах</h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="RefreshCw" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Переоборудование</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Экскаваторная база сохраняет свои функции. В зависимости от задач машина может использоваться как:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <Icon name="Shovel" size={32} className="text-accent mx-auto mb-3" />
                  <h4 className="text-primary font-semibold text-base md:text-lg">Экскаватор</h4>
                  <p className="text-primary text-sm mt-1">Основная функция базовой машины</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <Icon name="ArrowDown" size={32} className="text-accent mx-auto mb-3" />
                  <h4 className="text-primary font-semibold text-base md:text-lg">Сваебойная установка</h4>
                  <p className="text-primary text-sm mt-1">Полноповоротная забивка свай</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <Icon name="CircleDot" size={32} className="text-accent mx-auto mb-3" />
                  <h4 className="text-primary font-semibold text-base md:text-lg">Буровая установка</h4>
                  <p className="text-primary text-sm mt-1">Лидерное бурение до 14 м</p>
                </div>
              </div>
              <p className="text-primary mt-4 text-base md:text-lg leading-relaxed">
                Среднее время переоборудования — <strong>1 рабочая смена</strong> (в зависимости от исполнения).
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Экономичность</h3>
                </div>
                <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                  Мачты MS-EX (KGS) в среднем <strong>до 4 раз дешевле</strong> импортных аналогов при сопоставимом качестве.
                </p>
                <p className="text-primary text-base md:text-lg leading-relaxed">
                  При сравнении покупки новой импортной сваебойной машины с приобретением экскаватора и мачты MS-EX экономия может составлять <strong>от 3 до 5 раз</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Wrench" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Доступность обслуживания</h3>
                </div>
                <ul className="space-y-2 text-primary text-base md:text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">&#10004;</span>
                    <span>Низкие эксплуатационные затраты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">&#10004;</span>
                    <span>Наличие запасных частей на складе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">&#10004;</span>
                    <span>Мобильная сервисная служба KGS</span>
                  </li>
                </ul>
                <p className="text-primary mt-3 text-base md:text-lg leading-relaxed">
                  Это существенно снижает стоимость и время обслуживания оборудования.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Надёжность</h3>
                </div>
                <p className="text-primary text-base md:text-lg leading-relaxed">
                  В конструкции используются комплектующие известных мировых производителей. Оборудование адаптировано к российским условиям эксплуатации и рассчитано на длительную интенсивную работу.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Monitor" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Простота эксплуатации</h3>
                </div>
                <p className="text-primary text-base md:text-lg leading-relaxed">
                  Продуманная система управления, звуковая и световая сигнализация обеспечивают удобство и безопасность работы оператора непосредственно из кабины.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MsExInfoSection;