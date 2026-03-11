import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

export const PartsDescription = () => {
  return (
    <>
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
              Запчасти для вашей техники — быстро, надёжно, точно в срок!
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-primary text-base md:text-lg leading-relaxed mb-8">
                  В КоперГруппСервис мы заботимся о вашей технике на каждом этапе её эксплуатации. Оперативная поставка запчастей и расходных материалов является одним из ключевых элементов нашей поддержки.
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                    <CardContent className="p-5 flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Icon name="Warehouse" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base mb-1 text-primary">Склад в Екатеринбурге</h3>
                        <p className="text-primary text-sm leading-relaxed">
                          Для максимальной скорости доставки мы организовали склад в Екатеринбурге, где всегда в наличии наиболее востребованные позиции.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                    <CardContent className="p-5 flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Icon name="RefreshCw" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base mb-1 text-primary">Качественные аналоги</h3>
                        <p className="text-primary text-sm leading-relaxed">
                          Мы также развиваем альтернативные каналы поставок качественных аналоговых запчастей, позволяя владельцам импортной строительной техники получать надёжные детали по доступной цене, без простоев и задержек.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/89177cd4-9abe-4e8c-b6c0-56edc1b3b581.png"
                  alt="Гидравлические цилиндры и запчасти для сваебойного оборудования"
                  variant="content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Своевременные поставки без задержек
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Качественные оригинальные и аналоговые запчасти
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Консультация опытных менеджеров при подборе нужных деталей
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Wrench" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-primary">
                    Запчасти как для импортной, так и отечественной техники
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartsDescription;