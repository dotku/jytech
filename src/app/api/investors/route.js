const investors = [
  "0100 Ventures",
  "01Booster",
  "01 VC",
  "1000 Black Voices",
  "1011 Ventures",
  "11.2 Capital",
  "212 Venture Capital",
  "42 Cap",
  "43 North",
  "500 Startups",
  "500 Startups Investor community",
  "50 Partners",
  "5G Open Innovation Lab",
  "5Y Capital",
  "83North",
  "ABB Synerleap",
  "Absolvo",
  "AB Startups",
  "Abu Dhabi Investment Office",
  "Accel",
  "Accenture",
  "ActionPoint",
  "ACT Ventures",
  "Adara Ventures",
  "Agera ",
  "Agoranov",
  "AI Grant",
  "Airtree",
  "AIS the Startup",
  "AI Ventures",
  "AlbionVC",
  "Alchemist",
  "Alchemist - Artificial Intelligence",
  "Aleph VC",
  "Alliance Venture",
  "Allianz X Gmbh",
  "Almi Invest",
  "Alpana Ventures",
  "Alpha JWC Ventures",
  "Alt Capital",
  "AlvenCapital",
  "Amadeus Capital",
  "Amanzia ",
  "Amaranthine",
  "Ambrosetti",
  "Amref International University",
  "Ananda Ventures",
  "Andreessen Horowitz",
  "Angelacademe",
  "Angel Ventures",
  "Angular Ventures ",
  "ANSYS",
  "Antler",
  "APBA",
  "Applyify",
  "Arkwright X",
  "Arrow Electronics ",
  "Artesian VC",
  "Arzaan Ventures",
  "Ashoka ",
  "Aster Capital",
  "AstraZeneca China",
  "Atea",
  "Atheno",
  "Athome",
  "Atlanta Tech Village",
  "Atlantic Bridge",
  "Atomico",
  "Australian Computer Society ",
  "Australian Space Startups",
  "Axilor Ventures ",
  "B4I",
  "Backstage Capital",
  "Bain Capital Ventures",
  "Balderton Capital",
  "Base10 Partners",
  "Basis Set Ventures",
  "Battery Ventures",
  "B Capital Group",
  "Beco Capital",
  "Benchmark Capital",
  "Bessemer Venture Partners",
  "Betabit",
  "Beta-i",
  "Bethnal Green Ventures",
  "Better Tomorrow Ventures",
  "Beyond Capital",
  "Bird Incubator",
  "Bitkom",
  "BITS Palani",
  "Blackbird",
  "Black Capital",
  "Blockchain Founders Fund",
  "BlueChilli ",
  "Blue Health Innovation Centre",
  "Blume Ventures",
  "Bogazici Ventures",
  "BoldStart Ventures",
  "Bolt VC",
  "Bonfire Ventures",
  "Bosch Startup Harbour",
  "Bossa Nova Investimentos",
  "Bowery Capital",
  "BPI ",
  "Bridgewest Ventures NZ",
  "Bright Pixel",
  "BRM Capital",
  "Btov Partners",
  "BTSDI",
  "Building Global Innovators",
  "Builtfirst",
  "Business Growth Fund",
  "Business Sweden",
  "Business Tampere",
  "Bynd VC",
  "Cake Ventures",
  "Calculus Capital",
  "Canaan Partners",
  "Canada Pension Plan Investment Board (CPPIB)",
  "Capgemini",
  "Capital Factory",
  "Captii VC",
  "Carbonbase",
  "Cardumen Capital",
  "Cariplo Factory",
  "Carnegie Mellon University",
  "Casa do Impacto",
  "CASStar",
  "Cavalry Ventures",
  "CBC Capital",
  "CDP Venture",
  "CDW",
  "Cendana Capital",
  "CGI ",
  "Chapter One",
  "Chasm Digital",
  "Cherry Ventures",
  "Cherubic Ventures",
  "China Chain Store & Franchise Association/中国连锁经营协会",
  "China Growth Capital",
  "Chiratae Ventures",
  "CIIE Ahmedabad",
  "Circulate Capital",
  "CISCO Launchpad",
  "Citi Accelerator",
  "Civitta",
  "Clarendon Fund Management",
  "Clear Robotics Limited",
  "ClearSky",
  "Cleveland Clinic Innovations",
  "Climate collective",
  "CN Group",
  "Coatue Management",
  "Cocoon Capital",
  "Codec",
  "Collaborative Fund",
  "Collective Spark",
  "Color in Tech",
  "Content Square - Atomics Labs",
  "Conviction",
  "Conviction - Artificial Intelligence",
  "Conviction Investment Partners",
  "Coparion",
  "Costanoa Ventures",
  "Crane.VC ",
  "Crayon",
  "CRCM Ventures (ChinaRock)",
  "Creandum",
  "Creathor Ventures",
  "Credo Ventures ",
  "Creitive",
  "Crowdberry",
  "Crowdcube",
  "CRV",
  "CSIRO",
  "Cubo",
  "DART Labs",
  "Day One Capital",
  "DEEPCORE Inc.",
  "Deloitte",
  "Demium",
  "Dexter Capital Advisors",
  "Diligr",
  "DIP-Capital",
  "Distrito",
  "DnB",
  "Dom-Daniel",
  "Downing Ventures",
  "Draper Espirit",
  "DTec",
  "Dubai Angel Investors",
  "Dubai Future Foundation",
  "Duke University",
  "DWT Project W",
  "Dynamo",
  "Early Bird",
  "EDB New Ventures",
  "EDP Starter",
  "Edtech France",
  "Eduspaze",
  "EEC Ventures",
  "Eight roads",
  "Elad Gil",
  "Elad Gil - Artificial Intelligence",
  "Elaia",
  "Elevate Greece",
  "Elkstone Capital",
  "Embarc Collective",
  "EMD-Merck China",
  "Emergence Capital",
  "Eminence Ventures",
  "Empact Ventures",
  "Endeavor",
  "Engineering Capital",
  "Eniac",
  "Enterprise Ireland",
  "Enterprise Singapore",
  "Entree Capital",
  "Entrepreneur First",
  "Entrepreneur Network Access Program",
  "Envolve Entrepreneurship",
  "EPFL",
  "Epicenter",
  "Episode 1",
  "EQT",
  "Equal Ventures",
  "ERA NYC",
  "Eretz.bio",
  "Ernst & Young",
  "ESA",
  "ETF Partners",
  "EthAum Venture Partners",
  "ETH – Zurich",
  "Expa",
  "F10",
  "Falcon Edge Capital",
  "Fatima Gobi Ventures",
  "Felicis Ventures",
  "Female Founders Fund",
  "FemInvest",
  "Fetnet",
  "Finch Capital",
  "Finconecta",
  "Finleap",
  "Finolab",
  "FinSec Innovation Lab",
  "FintechCN",
  "Fintech Galaxy",
  "Fintech Hive Dubai",
  "Fintech Hub Qatar",
  "Fintech Innovation Lab",
  "Fintech Saudi",
  "First Round Capital",
  "Fishburners",
  "Flat6Labs",
  "FlipKart",
  "Floodgate Fund",
  "Florida International University",
  "Fongit",
  "Force Over Mass",
  "Forerunner Ventures",
  "ForgePoint Capital",
  "Form Capital",
  "Fortino Capital",
  "Fort Ross Ventures",
  "Fortune VC",
  "Founder Collective",
  "Founder Gym",
  "Founders Factory",
  "FoundersFounders",
  "Founders Fund",
  "Founders Institute",
  "Framework Ventures",
  "Freestyle",
  "Frog Capital",
  "Frontline Ventures",
  "Funding London",
  "Fuse",
  "Future Capital/明势资本",
  "Future Now Ventures",
  "Fynd",
  "Ganexa Capital",
  "GAN - Global Accelerator Network",
  "Gaorong VC",
  "Gapminder VC",
  "Gemini Israel Ventures",
  "General Catalyst",
  "Genesis Partners",
  "Georgia Institute of Technology",
  "Georgian Partners",
  "German Accelerator",
  "GGV Capital",
  "Giant Leap Fund",
  "GitHub Accelerator",
  "Glilot Capital",
  "Global Brain Capital",
  "Global Founders Capital",
  "Global VC",
  "Global Ventures",
  "Globis Capital Partners & Co.",
  "Gobi China",
  "Golden Ventures",
  "Greycroft",
  "Greylock Ventures",
  "Grindstone Ventures",
  "Grove VC",
  "GSIC",
  "Hadean Ventures",
  "Hanaco Venture Capital",
  "Harlem Capital Partners",
  "Harvard University",
  "Hectar",
  "HenQ VC",
  "H-Farm",
  "High Tech Grunderfonds",
  "Highway to A Hundred Unicorns",
  "Hill House Capital",
  "Hiventures",
  "H&M CO:Lab vs H&M Lab",
  "Hof Capital",
  "Honey island",
  "Horizons Ventures Israel",
  "Howard University",
  "Hoxton Ventures",
  "Hub 71",
  "HubHub",
  "Hubspot",
  "Huge Thing",
  "i2i Ventures",
  "I3P",
  "IAG",
  "IA Ventures",
  "Icebreaker",
  "Icehouse Ventures",
  "ICONIQ Capital",
  "Ideaspring Capital",
  "Idekapital",
  "Ideon Science Park",
  "IDG Capital",
  "IDInvest/Eurazeo",
  "Ignition",
  "IIIT-H Accelerator",
  "Illumina",
  "Imagine Cup",
  "Imagine Labs",
  "iMatch",
  "Imec iStart",
  "Impact Accelerator",
  "Impact Hub",
  "Impact Startup",
  "Impact X Capital",
  "Imperial College London",
  "In5",
  "Incubate Fund",
  "Indaco",
  "Index Ventures",
  "Indian Institute of Technology System",
  "Indico Capital ",
  "Industri utvikling vest",
  "Indus Valley Capital",
  "Infocomm Media Development",
  "Inkubator Salten",
  "Innoangel Fund",
  "Innovation Norway",
  "Innoventure",
  "Innoventus sor",
  "InnovX",
  "Inovabra Habitat",
  "InsureLab Germany",
  "Insuretech Capital ",
  "Insuretech UK",
  "Insurtech Hub",
  "Intelak",
  "Intel Capital",
  "Intercept",
  "Internal Microsoft",
  "Intersection ventures",
  "Intuit",
  "Inventure",
  "Investiere",
  "Investinor",
  "Invitalia",
  "IoT Tribe",
  "IQ Capital",
  "IVP",
  "J12 Ventures",
  "Jaguar Ventures",
  "Jerusalem Venture Partners",
  "Johns Hopkins Technology Ventures",
  "K9 Ventures",
  "Kae Capital",
  "Kalaari Capital",
  "Kaplan Singapore",
  "Karavan",
  "Katapult Accelerator",
  "KAUST",
  "Kazsek",
  "Kerala Startup Mission",
  "Khosla Ventures",
  "Kibo Ventures",
  "Kickstart",
  "KI Innovations",
  "Kjeller Innovasjon Incubator",
  "Kleiner Perkins",
  "KPMG",
  "L2 Ventures",
  "La Famiglia",
  "Lakestar",
  "Lakson Investment Ventures",
  "La Startup Factory",
  "LaunchVIC",
  "Leadventures",
  "Le Camp",
  "Lenovo Capital/联想创投",
  "Leo Capital",
  "Lerer Hippeau",
  "Level 39",
  "Lighthouse Ventures",
  "Lightship Capital",
  "Lightspeed Venture Partners",
  "Linear Capital",
  "Link Innovations",
  "Localglobe",
  "London & Partners",
  "lool Ventures",
  "LORCA",
  "Lufthansa Innovation Hub",
  "Luminar Ventures",
  "Lumo Labs",
  "Lux Capital Management",
  "Lventure",
  "M12 Recommendations",
  "MaC Venture Capital",
  "Made of Lisboa",
  "Madrona",
  "Maersk OceanPro",
  "MaGIC",
  "Magma Venture Partners",
  "Main Incubator",
  "Mainstage Incubator",
  "Mangrove",
  "Maniv Mobility",
  "Marathon VC",
  "MaRs Discovery District",
  "Mashup",
  "Mastercard StartPath",
  "Matrix Partners",
  "Maverick.vc",
  "Mayfield Fund",
  "Maze",
  "MBRIF ",
  "MDS Studio",
  "Medina Capital",
  "Menlo Ventures",
  "Merantix",
  "Mercadolibre Commerce Fund",
  "Mercia Capital Management",
  "Meritech",
  "Metavallon VC",
  "MEVCA",
  "MEVP",
  "MHS Capital",
  "Microsoft Alumni Network",
  "Mind",
  "Minderoo Foundation",
  "Ministry of Awesome",
  "Miracleplus ",
  "MIT",
  "MKB Fintechlab",
  "MMC Ventures",
  "Modus Ventures",
  "Momentum",
  "Monashees",
  "Monash University",
  "Montage Ventures",
  "Moonfire",
  "Morningside Venture Capital",
  "Motive Partners",
  "Movens",
  "Movexum",
  "Moxxie Ventures",
  "Mubadala Ventures",
  "Mucker Capital",
  "NAB Ventures",
  "NASSCOM – 10000 Startups",
  "National Incubation Centers (NIC)",
  "Nauta",
  "NBG Seeds",
  "Neo",
  "Neo - Artificial Intelligence",
  "Neo - Founders",
  "Nest I/O",
  "NetApp Excellerator",
  "New Enterprise Associates",
  "New York Fashion Tech Lab",
  "NEXI",
  "NextView Ventures",
  "Nexus Ventures",
  "Nobuhiro Ariyasu",
  "Nordcloud",
  "Nordea",
  "Nordic Edge",
  "Norrsken",
  "Norselab",
  "Northern Light Venture Capital/北极光",
  "Northwestern University",
  "Northzone",
  "Norwest Ventures",
  "Notation Capital",
  "Notion Capital Management",
  "Novartis",
  "NOVA SBE",
  "Nuwa Capital",
  "NVIDIA Inception",
  "NXTP VC",
  "Nysno Invest",
  "Octopus Ventures",
  "OGR ",
  "Oman Technology Fund (OTF)",
  "One Valley",
  "OpenAI Fund",
  "Orange Fab China",
  "Orange Ventures",
  "Oslo Cancer Cluster Incubator",
  "OTP Innovation LAB",
  "Oxx",
  "Parade Ventures",
  "Partech Ventures",
  "Paua Ventures",
  "Peak Innovation",
  "Pegasus Vertical",
  "Permira",
  "Petridish",
  "Picus Capital",
  "PIF",
  "Pioneer Square Labs",
  "Pitango Venture Capital",
  "PivotNorth Capital",
  "Platzi",
  "Playfair Capital",
  "Playground Global",
  "Plexo Capital",
  "Plug and Play Tech",
  "Plum ventures",
  "Plus VC",
  "Point Nine",
  "Politecnico di Milano",
  "Polsky Center for Entrepreneurship and Innovation",
  "Portfolion",
  "Porto Digital",
  "Portugal Fintech",
  "Portugal ventures",
  "Praetura Ventures",
  "Precursor Ventures",
  "Premio Marzotto",
  "Prime Ventures",
  "PRIO Jump Start",
  "Project A",
  "PropTech Ventures",
  "ProVenture ",
  "Provoke Solutions",
  "Pulsar",
  "PwC",
  "PwC Raising Programme",
  "QiMing Ventures",
  "Qualcomm Ventures",
  "QUBIS University",
  "Qumra Capital",
  "Qventures",
  "R2GConnect",
  "RackHouse Venture Capital",
  "Radical Ventures",
  "Raed Ventures",
  "Rainmaking/Startup bootcamp",
  "Ravel Innovation",
  "Redline",
  "Redpoint Ventures",
  "Reinventure",
  "Resolute ventures",
  "RESPOND",
  "Revo Capital",
  "Rhapsody Venture Partners",
  "Right Click Capital",
  "Root Ventures",
  "Saama Capital",
  "SaaSPlaza",
  "SaaStr",
  "Sagene Tech Ventures",
  "SAIF Partners",
  "Samsung Next ",
  "Sapphire Ventures",
  "SAP Startup Studio",
  "Sarmayacar",
  "Saudi Aramco",
  "Saudi Venture Capital",
  "SBE Australia",
  "Scale Venture Partners",
  "Scalex Ventures",
  "S Capital VC",
  "Scottish Equity Partners",
  "Script Capital",
  "Seaya Ventures",
  "Secret",
  "Seedcamp",
  "SENS Suisse",
  "Sentia",
  "SEP",
  "Sequoia Capital",
  "Serena Capital",
  "SG Tech",
  "Shell ",
  "She Loves Tech",
  "Shen Zhen Capital",
  "Sheraa",
  "Shiprocket",
  "Shorooq Partners",
  "SHub",
  "SICTIC",
  "Siemens Technology Accelerator",
  "Sierra Ventures",
  "Silicon Badia ",
  "Simula Garage",
  "SINE, IIT Bombay",
  "Skagerak Maturo",
  "SNO Ventures",
  "Social Enterprise Academy",
  "Social Entrepreneurs Ireland",
  "Social Impact Hub",
  "Softbank Innovation Fund",
  "SoftwareOne",
  "Solidify",
  "Solus Capital",
  "Sopra Steria",
  "SOSV",
  "Source code capital",
  "South Park Commons",
  "Space3ac",
  "Spanish Point",
  "Spark Capital",
  "Spark Festival",
  "SPD Silicon Valley Bank ",
  "Speed Invest",
  "Speedup VC Group",
  "Spicehaus",
  "Spider Capital",
  "Sprettert",
  "Spring Capital Polaris",
  "Square Peg Capital",
  "SRTIP",
  "Stanford University",
  "Startmate",
  "Startup Autobahn",
  "Startupboost",
  "Startupbootcamp",
  "Startup Braga",
  "Startup Chile",
  "Startup Dunedin",
  "Startup Hungary",
  "Startup India",
  "StartupLab",
  "Startup Leiria",
  "Startup Lisboa",
  "Startup Mexico",
  "Startup Nexus",
  "Startup Portugal",
  "Startup Reseau",
  "StartupWiseguys",
  "Startup World Cup Summit",
  "StartupYard",
  "Station F",
  "Step",
  "Sting ",
  "Stone",
  "Stone and Chalk",
  "Streamlined VC",
  "STV",
  "Sukna VC",
  "Sun* Inc.",
  "SUP46",
  "Super Seed",
  "Supervielle",
  "Sure Valley Ventures",
  "Susa Ventures",
  "Suzhou Industrial Park",
  "SV Angel",
  "Swift Ventures",
  "Swift Ventures - Artificial Intelligence",
  "Swisscom",
  "Swiss Startup Capital",
  "SW Singapore",
  "Symvan Capital",
  "Synergo Capital SGR S.p.A.",
  "System.One",
  "Tank Stream Labs",
  "Target Accelerator ",
  "Target Global",
  "Target Partners",
  "Tar Heel Capital Pathfinder",
  "Tarsus on Demand",
  "Team8",
  "Techleap",
  "Techmakers",
  "Tech Nation",
  "Technion Israel Institute of Technology",
  "TechQuartier",
  "Techstars",
  "Tel Aviv University",
  "Telekom Techboost",
  "Telenor",
  "Televenture",
  "Telia Ventures",
  "Telstra Ventures",
  "Temasek Holdings",
  "Tera Ventures",
  "Territory 3",
  "The Bakery",
  "The Cannon",
  "The House Fund",
  "The House Fund - Artificial Intelligence",
  "The Studio",
  "The University of Tokyo Edge Capital Partners Co., Ltd.",
  "The Venture City",
  "The Venture Lane",
  "Third Derivative",
  "Threshold Ventures",
  "T-Hub",
  "Tiger Global Management",
  "Titletown Tech",
  "TLV Partners",
  "Tobias Rohrbach",
  "Toyota AI Ventures",
  "Transport NSW",
  "Tribe Accelerator",
  "TRK",
  "True Ventures",
  "Turbostart",
  "UCL Precision Medicine",
  "Ulu Ventures",
  "Uminova",
  "Uncork Capital",
  "Uni.Fund",
  "Union Square Ventures",
  "United States International University-Africa",
  "Universidad Autónoma de Nuevo León",
  "Universidade de São Paulo",
  "University College London",
  "University of California System",
  "University of Cambridge",
  "University of Oxford",
  "University of Washington",
  "UnternehmerTUM GmbH",
  "Upekkha",
  "UPTEC",
  "UTS",
  "Valide",
  "Venisia",
  "Venture friends",
  "Venture Highway",
  "Venturelab",
  "Venture Souq",
  "Vertex ventures",
  "Vespucci Partners",
  "Vhub",
  "Viking Ventures",
  "Village by CA + SAP \"Women Entrepreneure 2021\"",
  "Vintage Investment Partners",
  "Viola Ventures",
  "Visionaries Club",
  "VNTRS",
  "Vodafone Power Labs",
  "Volta",
  "V sharp Ventures",
  "Vusion",
  "W23",
  "Wamda",
  "Waterbridge VC",
  "Wave Capital",
  "Wavemaker Partners",
  "WAYRA",
  "Wellstreet",
  "Werk1",
  "Western Sydney University",
  "West Swedish Incubators",
  "We Ventures",
  "WeWork Labs",
  "WeXchange",
  "WI Harper Group/美中经和",
  "Wingman Ventures",
  "Womena",
  "Women in Cloud",
  "Wonder Ventures",
  "X15 Ventures",
  "Xcel",
  "X-elerator (Tsinghua SEM)",
  "XRC Labs",
  "XYZ Venture Capital",
  "Yale University",
  "Y Combinator",
  "Y Combinator - Artificial Intelligence",
  "YL Ventures",
  "YourNest VC",
  "YSYS",
  "Yun Qi",
  "Zetta Venture Partners",
  "Zhen Fund"
]

export async function GET() {
  return Response.json({ length: investors.length, data: investors })
}