import EmployeePage from "@/components/EmployeePage";

const EmployeePlyukhina = () => (
  <EmployeePage
    name="Юлия Александровна Плюхина"
    position="Менеджер по продажам ООО «КГС»"
    slug="/contact/plyukhina"
    seoTitle="Юлия Александровна Плюхина — Менеджер по продажам КГС"
    seoDescription="Контакты Юлии Александровны Плюхиной, Менеджера по продажам ООО КГС. Телефон, email, мессенджеры."
    contacts={[
      { type: "email",    label: "Email",    value: "sales2@kgs-ural.ru",  href: "mailto:sales2@kgs-ural.ru" },
      { type: "phone",    label: "Телефон",  value: "+7 963 037 17 28",    href: "tel:+79630371728" },
      { type: "telegram", label: "Telegram", value: "Написать в Telegram", href: "https://t.me/JuliaKGS" },
      { type: "max",      label: "MAX",      value: "Написать в MAX",      href: "https://max.ru/u/f9LHodD0cOJmyHDuRGSnU3RvFQhNRXsryVhRkTb0be0IzFK-EKoqA_wgHTw" },
    ]}
  />
);

export default EmployeePlyukhina;