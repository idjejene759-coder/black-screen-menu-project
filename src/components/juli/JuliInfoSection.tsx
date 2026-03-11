import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const JuliInfoSection = () => {
  return (
    <section id="info" className="py-10 md:py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>
          
          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Назначение молотов Dongtai Juli DD</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Дизельные штанговые молоты серии DD предназначены для погружения свай различных типов при устройстве фундаментов:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Виды погружаемых элементов</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Железобетонные сваи</li>
                    <li>Деревянные сваи</li>
                    <li>Металлические трубы</li>
                    <li>Шпунт Ларсена</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Области применения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Устройство свайных фундаментов</li>
                    <li>Промышленное и гражданское строительство</li>
                    <li>Мостостроение и эстакады</li>
                    <li>Энергетические объекты</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Cog" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Принцип работы</h3>
                </div>
                <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                  Молоты серии DD работают по принципу дизельного двигателя. Ударная часть (поршень) поднимается и при падении сжимает воздушно-топливную смесь в цилиндре.
                </p>
                <p className="text-primary mb-3 text-base md:text-lg">В результате происходит:</p>
                <ol className="list-decimal pl-5 space-y-1.5 text-primary text-base md:text-lg">
                  <li>Воспламенение топливной смеси</li>
                  <li>Ударное воздействие на сваю</li>
                  <li>Подброс ударной части вверх для следующего цикла</li>
                </ol>
                <p className="text-primary mt-3 text-base md:text-lg leading-relaxed">
                  Цикл повторяется автоматически до полного погружения сваи в грунт.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Технические особенности</h3>
                </div>
                <p className="text-primary mb-3 text-base md:text-lg leading-relaxed">
                  По совокупности технических характеристик штанговые дизельные молоты серии DD значительно превосходят отечественные аналоги:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                  <li>Энергия удара на <strong>70–80% выше</strong> российских аналогов</li>
                  <li>Коэффициент компрессии до <strong>22</strong> (против 12–14 у аналогов)</li>
                  <li>Диапазон моделей от <strong>1,8 до 20 т</strong> массы ударной части</li>
                  <li>Расход топлива от <strong>6 до 51 л/час</strong></li>
                  <li>Частота ударов <strong>35–60 уд/мин</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuliInfoSection;
