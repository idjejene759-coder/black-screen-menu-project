import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <span className="text-accent font-bold text-base md:text-lg mt-0.5 flex-shrink-0">✓</span>
    <span className="text-base md:text-lg text-primary">{text}</span>
  </div>
);

const MachtyMkbeRuDescription = () => {
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Мачта копрово-бурильная серии МКБЭ</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-3">
                Уникальная конструкция навесного оборудования российского производства, предназначенная для установки на гусеничные экскаваторы отечественного и импортного производства массой от 22 тонн.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed">
                Оборудование прошло сертификацию в соответствии с требованиями Технического регламента Таможенного союза и имеет Декларацию соответствия ЕАЭС.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                Мачты МКБЭ предназначены для расширения технологических возможностей экскаватора и применяются в промышленном и гражданском строительстве для:
              </p>
              <div className="space-y-2">
                <CheckItem text="погружения (забивки) железобетонных и металлических свай" />
                <CheckItem text="выполнения шпунтовых работ" />
                <CheckItem text="устройства скважин" />
                <CheckItem text="завинчивания винтовых свай" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Package" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Комплектация и оборудование</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-base md:text-lg font-semibold text-primary mb-3">Сваебойное оборудование</p>
                  <p className="text-base md:text-lg text-primary mb-2">В качестве сваепогружателя применяются сваебойные молоты российского и импортного производства:</p>
                  <div className="space-y-2">
                    <CheckItem text="дизельные трубчатые (масса ударной части до 3000 кг)" />
                    <CheckItem text="дизельные штанговые (масса ударной части до 3500 кг)" />
                    <CheckItem text="гидравлические (масса ударной части до 3 000 кг)" />
                  </div>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-primary mb-3">Бурильное оборудование</p>
                  <div className="space-y-2 mb-4">
                    <CheckItem text="Гидравлические вращатели с максимальным крутящим моментом до 111 кН•м" />
                    <CheckItem text="Диаметр шнека — до 1 200 мм" />
                  </div>
                  <p className="text-base md:text-lg text-primary mb-2">По согласованию с заказчиком:</p>
                  <div className="space-y-2">
                    <CheckItem text="кардан-переходник для облегчения монтажа шнека" />
                    <CheckItem text="переходники для завинчивания свай" />
                    <CheckItem text="люнеты для центрирования шнеков" />
                  </div>
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
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструкция</h3>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-3">
                Мачта представляет собой сварную прямоугольную коробчатую конструкцию, усиленную по всей длине диафрагмами жёсткости. Направляющие выполнены из круглых или профильных труб и предназначены для перемещения гидровращателя или сваебойного оборудования.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-3">На мачте установлены:</p>
              <div className="space-y-2 mb-4">
                <CheckItem text="кронштейн для соединения со стрелой базовой машины и гидроцилиндром рукояти (наклон вперёд/назад)" />
                <CheckItem text="два гидроцилиндра наклона вправо/влево" />
                <CheckItem text="гидроцилиндр телескопирования (по согласованию)" />
                <CheckItem text="монтажные плиты для крепления гидрооборудования и лебёдок" />
                <CheckItem text="гидроцилиндр упора или дополнительная секция (нижний фланец)" />
                <CheckItem text="оголовок грузового оборудования или дополнительная секция (верхний фланец)" />
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-2">
                Все посадочные места унифицированы для повышения универсальности.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-2">
                Передвижение буровой каретки осуществляется цепным механизмом (планетарный редуктор РДЦ-800, усилие 8 тонн), либо системой «гидроцилиндр – полиспаст». Каретка легко демонтируется для установки сваебойного оборудования.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed">
                Предусмотрены места крепления свайной и молотовой лебёдок. Мачта не требует дополнительного оборудования для монтажа.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Gamepad2" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Принцип работы</h3>
              </div>
              <div className="space-y-2">
                <CheckItem text="Питание осуществляется от бортовой сети базового экскаватора." />
                <CheckItem text="Кабина комплектуется дополнительным джойстиком управления (опционально — выносной пульт)." />
                <CheckItem text="Наклон вперёд/назад — гидроцилиндром рукояти." />
                <CheckItem text="Наклон вправо/влево — отдельными гидроцилиндрами." />
                <CheckItem text="Гидроцилиндр опоры фиксирует мачту на грунте." />
                <CheckItem text="Все гидроузлы оснащены предохранительными клапанами." />
                <CheckItem text="Установлен датчик угла наклона (креномер) с выводом информации на дисплей в кабине." />
                <CheckItem text="Предусмотрены механические аварийные блокировки." />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MachtyMkbeRuDescription;