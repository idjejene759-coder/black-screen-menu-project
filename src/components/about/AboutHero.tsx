import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const achievements = [
  { value: 400, label: "клиентов в России и странах СНГ" },
  { value: 60, label: "выполненных шефмонтажей" },
  { value: 10, label: "лет опыта работы компании" },
  { value: 150, label: "единиц поставленной техники" },
  { value: 1000, label: "изготовленных и поставленных запчастей и комплектующих" }
];

export const AboutHero = () => {
  return (
    <>
      <section className="relative pt-14 pb-10 md:pt-16 md:pb-12 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Более 10 лет на рынке
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              КоперГруппСервис — надежный партнер в оборудовании для свайного фундаментостроения
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Торгово-производственная компания с более чем 10-летним опытом успешной работы в сфере оборудования для фундаментостроения.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {achievements.map((stat, index) => (
              <Card key={index} className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix="+" 
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-2"
                />
                <div className="text-sm md:text-base text-primary">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};