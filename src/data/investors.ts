export const getInvestors = (locale: string) => [
  {
    id: 1,
    nameKey: "services.technology.name",
    descriptionKey: "services.technology.description",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80",
    link: `/${locale}/tech`
  },
  {
    id: 2,
    nameKey: "services.marketing.name",
    descriptionKey: "services.marketing.description",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80",
    link: "https://dotku.us/marketing/"
  },
  {
    id: 3,
    nameKey: "services.businessService.name",
    descriptionKey: "services.businessService.description",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80",
    link: `/${locale}/business`
  },
  {
    id: 4,
    nameKey: "services.consulting.name",
    descriptionKey: "services.consulting.description",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80",
    link: `/${locale}/tech/consultant`
  }
];

// English names for backward compatibility (non-locale pages)
const englishNames: Record<string, { name: string; description: string }> = {
  "services.technology.name": { name: "Technology", description: "We provide tech solutions covering international business including AI, IoT, FinTech, EdTech and etc." },
  "services.marketing.name": { name: "Marketing", description: "We help businesses grow through digital marketing, branding, and customer engagement strategies." },
  "services.businessService.name": { name: "Business", description: "We help global businesses grow by connecting with over 1,000 organizations and partners worldwide, successfully handling more than 100 cases each year." },
  "services.consulting.name": { name: "Consulting", description: "Expert guidance and solutions for your business challenges and growth opportunities." },
};

export const investors = getInvestors('en').map(item => ({
  ...item,
  name: englishNames[item.nameKey]?.name ?? item.nameKey,
  description: englishNames[item.nameKey]?.description ?? item.descriptionKey,
}));
