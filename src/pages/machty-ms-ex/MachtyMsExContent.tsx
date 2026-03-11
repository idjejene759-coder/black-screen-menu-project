import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const MachtyMsExContent = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-14 pb-8 md:pt-16 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Мачты копровые экскаваторные
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачты копровые экскаваторные (серия МКБЭ)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Варианты исполнения
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

      {/* Описание продукта */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-10 text-center">
              Мачты копровые экскаваторные (серия МКБЭ)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-base md:text-lg text-primary leading-relaxed mb-6">
                  Мачта МКБЭ — это навесное копрово-бурильное оборудование, устанавливаемое на гусеничный экскаватор. Позволяет превратить стандартный экскаватор в полноповоротную установку для забивки свай и лидерного бурения без изменения базовой конструкции машины.
                </p>
                <p className="text-base md:text-lg text-primary leading-relaxed">
                  Серия МКБЭ выпускается в двух исполнениях: <strong>МКБЭ-1</strong> (навесная на стреле экскаватора) и <strong>МКБЭ-2</strong> (многофункциональная, на жёсткой раме). Оборудование совместимо с российскими и импортными экскаваторами массой от 20 т.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-xl max-w-md w-full">
                  <OptimizedImage
                    src="https://cdn.poehali.dev/files/105d2bb4-29a9-4951-a811-b3e5257a0cf9.png"
                    alt="Мачты копровые экскаваторные серии МКБЭ"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Ключевые преимущества</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="RefreshCw" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Универсальность</h4>
                  </div>
                  <p className="text-base md:text-lg text-primary leading-relaxed">Превращает экскаватор в полноповоротную копровую или буровую машину и обратно — без изменения базовой конструкции.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="DollarSign" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Экономия до 4 раз</h4>
                  </div>
                  <p className="text-base md:text-lg text-primary leading-relaxed">Мачты МКБЭ в среднем до 4 раз дешевле импортных аналогов при сопоставимом качестве и российском производстве.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Быстрое переоборудование</h4>
                  </div>
                  <p className="text-base md:text-lg text-primary leading-relaxed">МКБЭ-1 монтируется за 2–3 часа (на стреле), МКБЭ-2 на жёсткой раме — за 1–2 рабочие смены.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Надёжность</h4>
                  </div>
                  <p className="text-base md:text-lg text-primary leading-relaxed">Комплектующие надёжных производителей. Оборудование адаптировано к российским условиям эксплуатации.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Wrench" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Доступное обслуживание</h4>
                  </div>
                  <p className="text-base md:text-lg text-primary leading-relaxed">Низкие эксплуатационные затраты, наличие запчастей на складе, мобильная сервисная служба KGS.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={20} className="text-accent" />
                    </div>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-primary">Удобная транспортировка</h4>
                  </div>
                  <p className="text-base md:text-lg text-primary leading-relaxed">Мачта складывается в транспортное положение на экскаваторную базу, снижая затраты при перебазировке.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyMsExContent;