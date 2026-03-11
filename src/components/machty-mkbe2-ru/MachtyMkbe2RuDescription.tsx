import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <span className="text-accent font-bold text-base md:text-lg mt-0.5 flex-shrink-0">✓</span>
    <span className="text-base md:text-lg text-primary">{text}</span>
  </div>
);

const MachtyMkbe2RuDescription = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-8">
            Общая информация
          </h2>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Особенности</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                Первая отечественная разработка, обеспечивающая совместное использование сваебойного и бурильного оборудования на одной мачте.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-3">Конструкция предусматривает два ряда направляющих:</p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span className="text-base md:text-lg text-primary">Для установки молота (дизельного или гидравлического).</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span className="text-base md:text-lg text-primary">Для установки вращателя (гидравлического или электрического).</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Состав мачты МКБЭ-2</h3>
              </div>
              <div className="space-y-2 mb-4">
                <CheckItem text="Оголовок" />
                <CheckItem text="Верхняя, средняя и нижняя секции" />
                <CheckItem text="Грузоподъёмные гидравлические лебёдки" />
                <CheckItem text="Гидравлические захваты фиксации сваи" />
                <CheckItem text="Механизм опоры мачты" />
                <CheckItem text="Гидравлические трубопроводы, РВД, тормозные клапаны, распределители" />
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-2">
                Подъём и опускание молота и сваи осуществляется грузовыми лебёдками.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-2">
                Перемещение гидравлического вращателя — гидроцилиндром с системой полиспастов (усилие вдавливания и подъёма — 19 тонн).
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed">
                По желанию заказчика возможна установка цепного механизма перемещения вращателя.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Области применения</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-base md:text-lg font-semibold text-primary mb-2">Сваебойные работы:</p>
                  <div className="space-y-2">
                    <CheckItem text="Забивка железобетонных и металлических свай до 12 м" />
                    <CheckItem text="Шпунтовые работы" />
                  </div>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-primary mb-2">Буровые работы:</p>
                  <div className="space-y-2">
                    <CheckItem text="Лидерное бурение до 17 м" />
                    <CheckItem text="Диаметр скважины до 800 мм" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MachtyMkbe2RuDescription;
