import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Политика конфиденциальности — КГС"
        description="Политика конфиденциальности и обработки персональных данных ООО «КГС»"
        canonical="https://kgs-ural.ru/privacy"
      />
      <ScrollToTop />
      
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <Link to="/catalog" className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
              <Link to="/parts" className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services" className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <a href="#" className="text-white/90 hover:text-accent transition-colors text-sm">Новости</a>
              <Link to="/contact" className="text-white/90 hover:text-accent transition-colors text-sm">Контакты</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                  <Icon name="Share2" size={18} />
                </a>
              </div>
              <a href="tel:+78003006587" className="hidden lg:flex items-center text-white text-sm">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (800) 300-65-87
              </a>
              <Link to="/catalog#contact">
                <Button size="sm" className="btn-gradient text-white hidden md:block">
                  Получить каталог
                </Button>
              </Link>
              <MobileMenu currentPath="/privacy" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[{ label: 'Политика конфиденциальности', path: '/privacy' }]} />

      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-8">
              Политика конфиденциальности
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-primary">
              <p className="text-sm text-primary/70">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">1. Общие положения</h2>
                <p>
                  Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует в отношении всей информации, 
                  которую ООО «КГС» (далее – Компания) может получить о пользователе во время использования сайта kgs-ural.ru.
                </p>
                <p>
                  Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями 
                  обработки его персональной информации.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">2. Персональные данные пользователей</h2>
                <p>
                  Под персональными данными в настоящей Политике понимается информация, которую пользователь предоставляет о себе 
                  самостоятельно при заполнении форм обратной связи, включая:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Фамилия, имя, отчество</li>
                  <li>Контактный телефон</li>
                  <li>Адрес электронной почты</li>
                  <li>Ответы на технические вопросы по оборудованию</li>
                  <li>Дополнительные комментарии</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">3. Цели обработки персональных данных</h2>
                <p>Компания обрабатывает персональные данные пользователя в следующих целях:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Идентификация пользователя для обратной связи</li>
                  <li>Предоставление консультаций по сваебойному оборудованию</li>
                  <li>Подбор оптимального оборудования в соответствии с техническими требованиями</li>
                  <li>Подготовка коммерческих предложений</li>
                  <li>Информирование о новых продуктах и услугах (при согласии пользователя)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">4. Условия обработки персональных данных</h2>
                <p>
                  Компания обрабатывает персональные данные на законной и справедливой основе. Обработка персональных данных осуществляется 
                  с согласия субъекта персональных данных на обработку его персональных данных.
                </p>
                <p>
                  Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. 
                  Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">5. Хранение и защита персональных данных</h2>
                <p>
                  Компания принимает необходимые организационные и технические меры для защиты персональной информации пользователя 
                  от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, 
                  а также от иных неправомерных действий третьих лиц.
                </p>
                <p>
                  Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не более 3 (трех) лет 
                  с момента последнего обращения пользователя, если иное не предусмотрено законодательством.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">6. Передача персональных данных третьим лицам</h2>
                <p>
                  Компания не передает персональные данные пользователей третьим лицам, за исключением случаев, предусмотренных 
                  законодательством Российской Федерации.
                </p>
                <p>
                  Персональные данные могут быть переданы уполномоченным органам государственной власти только по основаниям 
                  и в порядке, установленным законодательством РФ.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">7. Права пользователя</h2>
                <p>Пользователь имеет право:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получать информацию, касающуюся обработки его персональных данных</li>
                  <li>Требовать уточнения своих персональных данных, их блокирования или уничтожения</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                  <li>Обжаловать действия или бездействие Компании в уполномоченный орган по защите прав субъектов персональных данных</li>
                </ul>
                <p>
                  Для реализации своих прав пользователь может направить письменный запрос на адрес электронной почты: 
                  <a href="mailto:info@kgs-ural.ru" className="text-accent hover:underline"> info@kgs-ural.ru</a>
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">8. Изменение Политики конфиденциальности</h2>
                <p>
                  Компания имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений 
                  в заголовке Политики указывается дата последнего обновления. Новая редакция Политики вступает в силу 
                  с момента ее размещения на сайте.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-primary">9. Контактная информация</h2>
                <p>По вопросам, связанным с обработкой персональных данных, можно обращаться:</p>
                <div className="bg-primary/5 p-6 rounded-lg space-y-2">
                  <p><strong>ООО «КГС»</strong></p>
                  <p>Email: <a href="mailto:info@kgs-ural.ru" className="text-accent hover:underline">info@kgs-ural.ru</a></p>
                  <p>Телефон: <a href="tel:+78003006587" className="text-accent hover:underline">+7 (800) 300-65-87</a></p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link to="/catalog">
                <Button className="btn-gradient text-white">
                  <Icon name="ArrowLeft" className="mr-2" size={18} />
                  Вернуться к каталогу
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС Логотип"
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/70 text-sm">
                Надёжный поставщик сваебойного оборудования
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Навигация</h3>
              <nav className="space-y-2">
                <Link to="/about" className="block text-white/70 hover:text-accent transition-colors text-sm">О компании</Link>
                <Link to="/catalog" className="block text-white/70 hover:text-accent transition-colors text-sm">Оборудование</Link>
                <Link to="/parts" className="block text-white/70 hover:text-accent transition-colors text-sm">Запчасти</Link>
                <Link to="/services" className="block text-white/70 hover:text-accent transition-colors text-sm">Услуги</Link>
              </nav>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:+78003006587" className="block text-white/70 hover:text-accent transition-colors">
                  +7 (800) 300-65-87
                </a>
                <a href="mailto:info@kgs-ural.ru" className="block text-white/70 hover:text-accent transition-colors">
                  info@kgs-ural.ru
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold mb-4 text-accent">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com/kgs_ural" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                  <Icon name="Share2" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-xs md:text-sm">
              © 2024 ООО «КГС». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;