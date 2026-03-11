import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MachtyDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>
          
          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение и возможности</h3>
              </div>
              <p className="text-primary mb-6 text-base md:text-lg leading-relaxed">
                Копровая мачта — это направляющий элемент для навесного оборудования, который существенно расширяет функциональные возможности базовой строительной техники. Она позволяет эффективно использовать имеющиеся машины для выполнения свайных и буровых работ без потери их основного назначения.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Монтаж на базовую технику</h4>
                  <p className="text-primary text-base md:text-lg">Копровая мачта устанавливается на гусеничные краны</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Совместимое навесное оборудование</h4>
                  <p className="text-primary mb-2 text-base md:text-lg">Универсальная конструкция мачты позволяет использовать различные виды рабочего оборудования:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>сваебойные молоты для забивки свай</li>
                    <li>вращатели для буровых работ</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Области применения и принцип работы</h3>
              </div>
              <p className="text-primary mb-2 text-base font-medium">Копровая мачта МК применяется для:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base mb-4">
                <li>забивки железобетонных свай, труб и шпунта</li>
                <li>устройства буронабивных свай</li>
              </ul>
              <p className="text-primary mb-2 text-base font-medium">Копровая мачта МК KGS — металлоконструкция, обеспечивающая:</p>
              <ul className="list-disc pl-5 space-y-1 text-primary text-base mb-4">
                <li>перемещение сваи и рабочего оборудования</li>
                <li>точное центрирование по оси</li>
                <li>наведение сваи на точку погружения</li>
              </ul>
              <p className="text-primary mb-2 text-base">Крепление мачты осуществляется с помощью специальных устройств (цапф) и раскосов.</p>
              <p className="text-primary font-medium mb-2 text-base">Копровая установка (кран + мачта):</p>
              <ol className="list-decimal pl-5 space-y-1 text-primary text-base">
                <li>Поднимает сваю</li>
                <li>Подвозит или подтаскивает к месту установки</li>
                <li>Устанавливает сваю в проектное положение</li>
                <li>Погружает сваю в грунт сваебойным оборудованием</li>
                <li>Перемещается к следующей свае</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Gamepad2" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Управление копровой мачтой</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Управление копровой мачтой осуществляется оператором из кабины крана с помощью пульта управления.
              </p>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                При нажатии кнопок пульта срабатывают электромагнитные клапаны распределителя, открывая необходимые гидролинии:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Пульт управления — гидролинии:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>цилиндров коррекции</li>
                    <li>цилиндра опоры мачты</li>
                    <li>цилиндров захватов мачты</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-primary font-semibold mb-2 text-base md:text-lg">Остальные операции выполняются стандартными органами управления крана:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>главной лебёдкой</li>
                    <li>вспомогательной лебёдкой</li>
                    <li>подъёмом и опусканием стрелы</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MachtyDescriptionSection;