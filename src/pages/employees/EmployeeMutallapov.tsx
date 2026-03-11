import EmployeePage from "@/components/EmployeePage";

const EmployeeMutallapov = () => (
  <EmployeePage
    name="Артур Фирдависович Муталлапов"
    position="Сервисный инженер ООО «КГС»"
    slug="/contact/mutallapov"
    seoTitle="Артур Фирдависович Муталлапов — Сервисный инженер КГС"
    seoDescription="Контакты Артура Фирдависовича Муталлапова, Сервисного инженера ООО КГС. Телефон, email, мессенджеры."
    contacts={[
      { type: "email",    label: "Email",    value: "service@kgs-ural.ru",     href: "mailto:service@kgs-ural.ru" },
      { type: "phone",    label: "Телефон",  value: "+7 963 037 82 44",        href: "tel:+79630378244" },
      { type: "telegram", label: "Telegram", value: "Написать в Telegram",     href: "https://t.me/KoperGroupService" },
      { type: "max",      label: "MAX",      value: "Написать в MAX",          href: "https://max.ru/u/f9LHodD0cOIPsebG_aPMtuEHW6x6EwEWM4MO0E4uFQvW0k5N37WBaaLuRLw" },
    ]}
  />
);

export default EmployeeMutallapov;