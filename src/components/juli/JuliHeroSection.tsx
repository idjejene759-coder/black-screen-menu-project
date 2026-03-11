import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const JuliHeroSection = () => {
  return (
    <>
      <section className="relative pt-14 pb-8 md:pt-16 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Дизельные штанговые молоты
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Дизельные штанговые молоты Dongtai Juli (серия DD)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Модели молотов серии DD
              </a>
              <a href="#info" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Общая информация
              </a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-10 text-center">Дизельные штанговые молоты Dongtai Juli (серия DD)</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Дизельные штанговые молоты, производимые компанией Dongtai Juli Machinery Manufacturing Co., LTD (Китай), отличаются высокой мощностью, надёжностью и стабильным качеством. Оборудование завоевало хорошую репутацию и пользуется устойчивым спросом на мировом рынке.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Наиболее современной разработкой компании является штанговый дизельный молот серии DD, созданный на основе многолетнего производственного опыта и с применением передовых технологий китайских и зарубежных производителей.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full">
                  <OptimizedImage
                    src="https://cdn.poehali.dev/files/e0bf2c5a-73ef-4997-8542-4f43893a8796.jpg"
                    alt="Молоты дизельные штанговые Dongtai Juli серии DD"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                Используя принцип и технологии дизельного двигателя, данные молоты имеют возможность непрерывно и эффективно работать длительное время.
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4">
                Это свойство достигается благодаря:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                  <span className="text-base md:text-lg text-primary">эффективной системе воздушного охлаждения с высокой теплоотдачей</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                  <span className="text-base md:text-lg text-primary">современной системе подачи топлива</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-base md:text-lg mt-0.5">&#10004;</span>
                  <span className="text-base md:text-lg text-primary">компактной и продуманной конструкции, удобной в эксплуатации и обслуживании</span>
                </div>
              </div>
              <p className="text-base md:text-lg text-primary leading-relaxed font-medium">
                По совокупности технических характеристик штанговые дизельные молоты серии DD значительно превосходят отечественные аналоги.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JuliHeroSection;
