import { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MobileMenu } from "@/components/MobileMenu";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface ContactItem {
  type: "email" | "phone" | "telegram" | "vk" | "max";
  label: string;
  value: string;
  href: string;
}

interface EmployeePageProps {
  name: string;
  position: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  contacts: ContactItem[];
  company?: string;
}

const contactStyle: Record<ContactItem["type"], { icon: string; color: string; bg: string; row: string }> = {
  email:    { icon: "Mail",          color: "text-primary",    bg: "bg-primary/15 group-hover:bg-primary/25",      row: "bg-primary/5 hover:bg-primary/10 border border-primary/10" },
  phone:    { icon: "Phone",         color: "text-primary",    bg: "bg-primary/15 group-hover:bg-primary/25",      row: "bg-primary/5 hover:bg-primary/10 border border-primary/10" },
  telegram: { icon: "Send",          color: "text-[#2AABEE]",  bg: "bg-[#2AABEE]/15 group-hover:bg-[#2AABEE]/25", row: "bg-[#2AABEE]/5 hover:bg-[#2AABEE]/10 border border-[#2AABEE]/10" },
  vk:       { icon: "Share2",        color: "text-[#0077FF]",  bg: "bg-[#0077FF]/15 group-hover:bg-[#0077FF]/25", row: "bg-[#0077FF]/5 hover:bg-[#0077FF]/10 border border-[#0077FF]/10" },
  max:      { icon: "MessageCircle", color: "text-orange-500", bg: "bg-orange-100 group-hover:bg-orange-200",     row: "bg-orange-50 hover:bg-orange-100 border border-orange-100" },
};

const STANDARD_TYPES: ContactItem["type"][] = ["phone", "email"];
const MESSENGER_TYPES: ContactItem["type"][] = ["telegram", "vk", "max"];

const buildVCard = (name: string, position: string, company: string, contacts: ContactItem[]) => {
  const nameParts = name.trim().split(" ");
  const lastName  = nameParts[0] ?? "";
  const firstName = nameParts.slice(1).join(" ");

  const cleanPosition = position.replace(/\s*ООО\s*[«"'»]*КГС[«"'»]*/gi, "").trim();
  const titleLine = `${cleanPosition} ${company}`.trim();

  const phones = contacts.filter(c => c.type === "phone").map(c => `TEL;TYPE=CELL:${c.href.replace("tel:", "")}`).join("\r\n");
  const emails  = contacts.filter(c => c.type === "email").map(c => `EMAIL:${c.value}`).join("\r\n");

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${titleLine}`,
    `N:${lastName};${firstName};;;`,
    `ORG:${company}`,
    `TITLE:${cleanPosition}`,
    phones,
    emails,
    "END:VCARD",
  ].filter(Boolean).join("\r\n");
};

const VCARD_URL = "https://functions.poehali.dev/2d02a6c5-8547-4475-ab59-986b14929d6e";

const ContactRow = ({ c }: { c: ContactItem }) => {
  const style = contactStyle[c.type];
  return (
    <a
      href={c.href}
      target={!STANDARD_TYPES.includes(c.type) ? "_blank" : undefined}
      rel={!STANDARD_TYPES.includes(c.type) ? "noopener noreferrer" : undefined}
      aria-label={`${c.label}: ${c.value}`}
      className={`flex items-center gap-3 p-3 md:p-4 rounded-xl transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${style.row}`}
    >
      <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${style.bg}`}>
        <Icon name={style.icon} className={style.color} size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
        <p className={`font-medium text-sm md:text-base truncate ${style.color}`}>{c.value}</p>
      </div>
      <Icon name="ChevronRight" className="text-muted-foreground/30 group-hover:text-muted-foreground flex-shrink-0 transition-colors" size={16} aria-hidden="true" />
    </a>
  );
};

const EmployeePage = ({ name, position, slug, seoTitle, seoDescription, contacts, company = "ООО «КГС»" }: EmployeePageProps) => {
  const pageUrl = `https://kgs-ural.ru${slug}`;
  const vCard = useMemo(() => buildVCard(name, position, company, contacts), [name, position, company, contacts]);
  const employeeSlug = slug.split("/").pop() ?? "";
  const downloadUrl = useMemo(() => `${VCARD_URL}?slug=${employeeSlug}`, [employeeSlug]);

  const standardContacts  = contacts
    .filter(c => STANDARD_TYPES.includes(c.type))
    .sort((a) => a.type === "phone" ? -1 : 1);
  const messengerContacts = contacts.filter(c => MESSENGER_TYPES.includes(c.type));

  const handleAddContact = useCallback(async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isAndroid = /android/i.test(navigator.userAgent);
    if (!isAndroid) return; // iOS — стандартное поведение ссылки

    e.preventDefault();
    try {
      // Скачиваем vcf-файл как blob
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const vcfFile = new File([blob], `${name.replace(/\s+/g, "_")}.vcf`, { type: "text/vcard" });

      // Web Share API — Android открывает системный диалог «Открыть с помощью»
      if (navigator.canShare && navigator.canShare({ files: [vcfFile] })) {
        await navigator.share({ files: [vcfFile], title: name });
      } else {
        // Fallback: открываем blob-url в новой вкладке
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      }
    } catch {
      // Если что-то пошло не так — открываем ссылку напрямую
      window.open(downloadUrl, "_blank");
    }
  }, [downloadUrl, name]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seoTitle} description={seoDescription} canonical={pageUrl} />
      <ScrollToTop />

      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.poehali.dev/files/e8940fa1-9132-49b3-bf7b-93d6cc15b33f.png"
                alt="КГС — логотип"
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about"      className="text-white/90 hover:text-accent transition-colors text-sm">О компании</Link>
              <Link to="/catalog"    className="text-white/90 hover:text-accent transition-colors text-sm">Оборудование</Link>
              <Link to="/parts"      className="text-white/90 hover:text-accent transition-colors text-sm">Запчасти</Link>
              <Link to="/services"   className="text-white/90 hover:text-accent transition-colors text-sm">Услуги</Link>
              <Link to="/production" className="text-white/90 hover:text-accent transition-colors text-sm">Производство и доставка</Link>
              <Link to="/contact"    className="text-accent transition-colors text-sm font-medium">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:88006007465" className="text-white hover:text-accent transition-colors text-sm font-medium hidden lg:block">
                8 (800) 600-74-65
              </a>
              <MobileMenu currentPath="/contact" />
            </div>
          </div>
        </div>
      </header>

      <Breadcrumbs items={[
        { label: "Контакты", path: "/contact" },
        { label: name, path: slug },
      ]} />

      {/* Hero */}
      <section className="relative pt-14 pb-12 md:pt-16 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="relative inline-block mb-5">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white/30 shadow-xl overflow-hidden bg-primary flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/f0c32034-3119-4a73-9d2f-8c27a83d9b44.png"
                  alt="Логотип КГС"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-heading font-bold text-white mb-3 leading-tight">
              {name}
            </h1>
            <p className="text-accent text-base md:text-lg font-medium">{position}</p>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-3 sm:px-4 max-w-xl">

          <Card className="mb-6 shadow-xl border-t-4 border-t-accent overflow-hidden relative">
            {/* Декоративная фото-полоса справа — только desktop */}
            <div className="absolute top-0 right-0 w-1/4 h-full hidden sm:block" aria-hidden="true">
              <div
                className="absolute inset-0 bg-cover bg-top opacity-70"
                style={{ backgroundImage: "url(https://cdn.poehali.dev/files/d2abf384-7c66-44d9-834b-ddaa3f323fb1.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
            </div>

            <div className="relative p-3 sm:p-5 md:p-8 sm:pr-[28%]">
              {/* Телефон и Email */}
              {standardContacts.length > 0 && (
                <div className="space-y-2 mb-3">
                  {standardContacts.map((c, i) => <ContactRow key={i} c={c} />)}
                </div>
              )}

              {/* Разделитель */}
              {standardContacts.length > 0 && messengerContacts.length > 0 && (
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground px-1">Мессенджеры</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
              )}

              {/* Мессенджеры */}
              {messengerContacts.length > 0 && (
                <div className="space-y-2">
                  {messengerContacts.map((c, i) => <ContactRow key={i} c={c} />)}
                </div>
              )}
            </div>
          </Card>

          {/* QR / Добавить контакт */}
          <Card className="p-5 md:p-8 text-center mb-6 shadow-xl">
            <h2 className="font-heading font-semibold text-base mb-1">Сохранить контакт</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Отсканируйте QR-код или нажмите кнопку — контакт откроется для сохранения в телефоне
            </p>
            <div className="flex justify-center mb-5">
              <div className="p-3 md:p-4 bg-white rounded-2xl shadow-md inline-block">
                <QRCodeSVG
                  value={downloadUrl}
                  size={typeof window !== "undefined" && window.innerWidth < 640 ? 140 : 180}
                  bgColor="#ffffff"
                  fgColor="#0f2356"
                  level="M"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-4">{name} · {position}</p>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAddContact}
              aria-label={`Добавить контакт ${name}`}
              className="inline-flex items-center justify-center gap-2 btn-gradient text-white rounded-md px-5 py-2.5 text-sm font-medium w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <Icon name="UserPlus" size={16} aria-hidden="true" />
              Добавить контакт
            </a>
          </Card>

          <div className="text-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/contact#team">
                <Icon name="ChevronLeft" size={16} aria-hidden="true" />
                Все сотрудники
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EmployeePage;