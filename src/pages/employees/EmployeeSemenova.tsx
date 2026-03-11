import EmployeePage from "@/components/EmployeePage";

const EmployeeSemenova = () => (
  <EmployeePage
    name="Анна Викторовна Семенова"
    position="Менеджер по продажам ООО «КГС»"
    slug="/contact/semenova"
    seoTitle="Анна Викторовна Семенова — Менеджер по продажам КГС"
    seoDescription="Контакты Анны Викторовны Семеновой, Менеджера по продажам ООО КГС. Телефон, email, мессенджеры."
    contacts={[
      { type: "email",    label: "Email",    value: "sales4@kgs-ural.ru",      href: "mailto:sales4@kgs-ural.ru" },
      { type: "phone",    label: "Телефон",  value: "+7 909 703 30 66",        href: "tel:+79097033066" },
      { type: "telegram", label: "Telegram", value: "Написать в Telegram",     href: "https://t.me/Anna_Semenova_KGS" },
      { type: "max",      label: "MAX",      value: "Написать в MAX",          href: "https://max.ru/u/f9LHodD0cOLRohHB08IJ0eicM4SxMVM-YxcpbN5MeL8o04rMPM_RNWdi8SU" },
    ]}
  />
);

export default EmployeeSemenova;