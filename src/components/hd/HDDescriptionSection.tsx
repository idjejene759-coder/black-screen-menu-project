import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HDDescriptionSection = () => {
  return (
    <section id="description" className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">Общая информация</h2>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Settings" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Принцип работы</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                В основе конструкции лежит свободнопадающий ударный механизм, функционирующий за счёт воспламенения топливной смеси при сжатии. Движение поршня в верхнем и нижнем цилиндрах формирует энергию удара, передаваемую свае.
              </p>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Подача топлива регулируется оператором, что позволяет изменять силу удара в зависимости от:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-primary font-semibold text-base">Типа сваи</p>
                  <p className="text-primary text-base mt-1">железобетонные, стальные, наклонные</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-primary font-semibold text-base">Длины и сечения</p>
                  <p className="text-primary text-base mt-1">геометрические характеристики сваи</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-primary font-semibold text-base">Характеристик грунта</p>
                  <p className="text-primary text-base mt-1">тип и плотность грунта на объекте</p>
                </div>
              </div>
              <p className="text-primary mt-4 text-base md:text-lg leading-relaxed">
                Регулировка осуществляется непосредственно в процессе работы, без остановки молота.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg mb-6">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Wrench" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Конструктивные особенности</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-3 text-base md:text-lg">Система смазки и охлаждения</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Независимая система принудительной смазки насоса</li>
                    <li>Многоточечная смазка верхнего и нижнего цилиндров</li>
                    <li>Простая и надёжная система воздушного охлаждения</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-3 text-base md:text-lg">Управление и безопасность</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Компактная система подачи топлива, удобная в обслуживании</li>
                    <li>Регулировка энергии удара за счёт изменения подачи топлива</li>
                    <li>Система аварийной остановки и защитные устройства безопасности</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} className="text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Область применения</h3>
              </div>
              <p className="text-primary mb-4 text-base md:text-lg leading-relaxed">
                Дизельные трубчатые молоты Starke HD применяются для забивки различных типов свай. Оборудование эффективно используется в условиях, где невозможно применение статического вдавливания.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Типы свай</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-primary text-base md:text-lg">
                    <li>Железобетонные сваи</li>
                    <li>Стальные трубчатые сваи</li>
                    <li>Наклонные сваи</li>
                    <li>Морские сваи</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-primary font-semibold mb-2 text-base md:text-lg">Особые условия</h4>
                  <p className="text-primary text-base md:text-lg leading-relaxed">
                    Молоты применяются в том числе при работе с наклонными сваями и в ситуациях, где статическое вдавливание невозможно из-за особенностей грунта или конструкции фундамента.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HDDescriptionSection;
