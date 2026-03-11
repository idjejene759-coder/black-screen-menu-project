import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";

const MachtyMkbeRuHero = () => {
  return (
    <>
      <section className="relative pt-16 pb-10 md:pt-20 md:pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Мачты копровые экскаваторные (Россия)
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачта копрово-бурильная экскаваторного типа (серия МКБЭ, Россия)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="#specs" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Технические характеристики
              </a>
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Мачта копрово-бурильная экскаваторного типа МКБЭ
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Мачта МКБЭ — навесное копрово-бурильное оборудование, устанавливаемое на гусеничные экскаваторы отечественного и импортного производства массой от 22 тонн. Оборудование сертифицировано в соответствии с требованиями ТР ТС, имеет Декларацию соответствия ЕАЭС.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Мачта устанавливается на стрелу экскаватора и подключается к гидравлической системе базовой машины. После демонтажа мачты экскаватор полностью сохраняет штатные функции.
                </p>
                <div className="space-y-2 pt-2">
                  {[
                    "Российское производство, сертификат ЕАЭС",
                    "Установка на экскаватор от 22 т",
                    "Бурение до 24 м, диаметр до 800 мм",
                    "Забивка свай до 12 м",
                    "Экономия в сравнении с импортными аналогами",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-base md:text-lg mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-base md:text-lg text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl w-full max-w-md">
                  <OptimizedImage
                    src="https://cdn.poehali.dev/files/d2c1f4a3-f581-4b59-b8d6-580d2eff604a.jpg"
                    alt="Мачта копрово-бурильная экскаваторного типа МКБЭ"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyMkbeRuHero;