import {
  Blocks,
  Megaphone,
  ServerCog,
  ShoppingBag,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Pijus.dev",
  owner: "Pijus",
  url: "https://pijus.dev",
  phone: "+37067587792",
  phoneDisplay: "+370 675 87792",
  messenger: "https://m.me/pijus.lukavicius",
  facebook: "https://www.facebook.com/pijus.lukavicius",
  description:
    "Profesionalių reprezentacinių svetainių, Shopify parduotuvių, reklamos ir individualių sistemų kūrimas.",
};

export const navigation = [
  { label: "Paslaugos", href: "#paslaugos" },
  { label: "Kainos", href: "#kainos" },
  { label: "Kontaktai", href: "#kontaktai" },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Svetainių kūrimas",
    description:
      "Greitos, aiškios ir pardavimui paruoštos reprezentacinės svetainės, kurios profesionaliai pristato verslą visuose ekranuose.",
    details: ["Individualus dizainas", "SEO pagrindai", "Mobili versija"],
    icon: Blocks,
  },
  {
    number: "02",
    title: "Shopify parduotuvės",
    description:
      "Pilnai paruoštos elektroninės parduotuvės — nuo struktūros ir dizaino iki mokėjimų, produktų bei paleidimo.",
    details: ["Pardavimo struktūra", "Mokėjimų integracija", "Lengvas valdymas"],
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Individualios sistemos",
    description:
      "Nestandartiniai sprendimai procesams automatizuoti: rezervacijos, valdymo sistemos, integracijos ir vidiniai įrankiai.",
    details: ["Verslo logika", "Integracijos", "Plečiama architektūra"],
    icon: Workflow,
  },
  {
    number: "04",
    title: "Reklama",
    description:
      "Tikslinės kampanijos ir aiški komunikacija, padedanti pasiekti klientus per Facebook, Instagram bei Google.",
    details: ["Kampanijų paruošimas", "Auditorijos", "Rezultatų analizė"],
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Hostingas ir priežiūra",
    description:
      "Patikimas svetainės talpinimas, techninė priežiūra, atnaujinimai ir pagalba, kai jos reikia.",
    details: ["SSL ir saugumas", "Atsarginės kopijos", "Techninė pagalba"],
    icon: ServerCog,
  },
];

export const pricing = [
  {
    title: "Reprezentacinė svetainė",
    price: "150–200 €",
    note: "Galutinė kaina priklauso nuo puslapių ir funkcijų kiekio.",
    featured: true,
  },
  {
    title: "Shopify e. parduotuvė",
    price: "nuo 600 €",
    note: "Dizainas, struktūra, mokėjimai ir paruošimas prekybai.",
    featured: false,
  },
  {
    title: "Hostingas",
    price: "15 € / mėn.",
    note: "Talpinimas, SSL, priežiūra ir techninė pagalba.",
    featured: false,
  },
  {
    title: "Reklama",
    price: "Individualiai",
    note: "Kaina nustatoma pagal kanalus, biudžetą ir tikslus.",
    featured: false,
  },
  {
    title: "Individuali sistema",
    price: "Individualiai",
    note: "Pasiūlymas parengiamas įvertinus funkcijas ir integracijas.",
    featured: false,
  },
];
