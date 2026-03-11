const cities = [
  { name: "Калининград", x: 8.5, y: 52.5 },
  { name: "Мурманск", x: 36, y: 18 },
  { name: "Санкт-Петербург", x: 29, y: 28 },
  { name: "Архангельск", x: 38, y: 22 },
  { name: "Великий Новгород", x: 27, y: 31 },
  { name: "Кострома", x: 35, y: 36 },
  { name: "Москва", x: 31, y: 40 },
  { name: "Владимир", x: 34, y: 39 },
  { name: "Тула", x: 31.5, y: 42.5 },
  { name: "Рязань", x: 33.5, y: 42 },
  { name: "Йошкар-Ола", x: 39, y: 39 },
  { name: "Чебоксары", x: 40, y: 41 },
  { name: "Симферополь", x: 29, y: 52 },
  { name: "Ростов-на-Дону", x: 29.5, y: 50 },
  { name: "Керчь", x: 31, y: 52.5 },
  { name: "Краснодар", x: 28, y: 52.5 },
  { name: "Саратов", x: 36, y: 47 },
  { name: "Казань", x: 40, y: 42.5 },
  { name: "Пермь", x: 44, y: 38.5 },
  { name: "Екатеринбург", x: 46.5, y: 40.5 },
  { name: "Астрахань", x: 38, y: 52 },
  { name: "Оренбург", x: 43, y: 48 },
  { name: "Магнитогорск", x: 45, y: 47 },
  { name: "Челябинск", x: 46.5, y: 45 },
  { name: "Тобольск", x: 52, y: 40 },
  { name: "Тюмень", x: 51, y: 43 },
  { name: "Сургут", x: 55, y: 37 },
  { name: "Пангоды", x: 55.5, y: 34 },
  { name: "Норильск", x: 60, y: 24 },
  { name: "Набережные Челны", x: 41, y: 41.5 },
  { name: "Новый Уренгой", x: 57, y: 30 },
  { name: "Омск", x: 52, y: 46 },
  { name: "Томск", x: 57, y: 43 },
  { name: "Новосибирск", x: 56, y: 47 },
  { name: "Кемерово", x: 59, y: 47 },
  { name: "Новокузнецк", x: 58, y: 50 },
  { name: "Красноярск", x: 63, y: 44 },
  { name: "Тайшет", x: 66, y: 44 },
  { name: "Иркутск", x: 69, y: 46 },
  { name: "Якутск", x: 79, y: 30 },
  { name: "Мыс Манорский", x: 87, y: 28 },
  { name: "Благовещенск", x: 83, y: 44 },
  { name: "Хабаровск", x: 87, y: 46 },
  { name: "Южно-Сахалинск", x: 91, y: 44 },
  { name: "Уссурийск", x: 88, y: 51 },
  { name: "Владивосток", x: 88, y: 53 },
  { name: "Находка", x: 89, y: 55 },
  { name: "ДНР", x: 30.5, y: 51 },
  { name: "Ноглики", x: 91, y: 38 },
];

export const RussiaMap = () => {
  return (
    <section className="py-10 md:py-14 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
            400+ клиентов по всей России и СНГ
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Поставляем оборудование во все регионы страны и государства СНГ
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative bg-primary rounded-2xl overflow-hidden">
            <img
              src="https://cdn.poehali.dev/files/8922b304-3930-4ee7-9974-cbc69cf2b571.png"
              alt="Карта присутствия КГС по России и СНГ"
              className="w-full h-auto opacity-80"
            />
            <div
              className="absolute inset-0"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            >
              <svg
                viewBox="0 0 100 70"
                className="w-full h-full"
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                {cities.map((city, i) => (
                  <g key={i}>
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="0.55"
                      fill="#F59E0B"
                      stroke="white"
                      strokeWidth="0.15"
                      className="cursor-pointer"
                    >
                      <title>{city.name}</title>
                    </circle>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
              <span>Город присутствия</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">49+</span>
              <span>городов и регионов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
