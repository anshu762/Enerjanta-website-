import {
  SurveyStatItem,
  SurveyFindingItem,
  SurveySectionItem,
  AmbassadorItem,
  InitiativeItem,
} from "@/types";

export const mockStats: SurveyStatItem[] = [
  {
    id: "stat-1",
    label: "Households Surveyed",
    value: "1,420",
    suffix: "+",
    order: 1,
  },
  {
    id: "stat-2",
    label: "Demand for Solar Transition",
    value: "84",
    suffix: "%",
    order: 2,
  },
  {
    id: "stat-3",
    label: "Avg. Monthly Energy Savings",
    value: "38",
    suffix: "%",
    order: 3,
  },
  {
    id: "stat-4",
    label: "Local Community Wards Engaged",
    value: "28",
    suffix: " Wards",
    order: 4,
  },
];

export const mockFindings: SurveyFindingItem[] = [
  {
    id: "find-1",
    title: "High Willingness, Severe Information Gap",
    description:
      "84% of surveyed households express strong interest in rooftop solar and renewable tariffs, but 71% report having no clear guidance on trusted vendors, subsidies, or net-metering approvals.",
    order: 1,
  },
  {
    id: "find-2",
    title: "Upfront Cost is the Primary Friction Point",
    description:
      "68% cited capital expenditure as their major hurdle, yet 79% said they would adopt micro-installations immediately under low-interest community loan pools or pay-as-you-save schemes.",
    order: 2,
  },
  {
    id: "find-3",
    title: "Grid Inconsistency Drives Clean Energy Urgency",
    description:
      "Frequent peak-load voltage fluctuations and power cuts during summer months have pushed 62% of residential blocks to consider battery-backed hybrid solar microgrids.",
    order: 3,
  },
  {
    id: "find-4",
    title: "Community Solar Appeals to Renters & Apartments",
    description:
      "Over 88% of urban apartment residents cannot install private panels but are eager to subscribe to shared neighborhood solar farms within a 5km radius.",
    order: 4,
  },
  {
    id: "find-5",
    title: "Youth & Local Champions Accelerate Adoption",
    description:
      "Wards with active student ambassadors reported a 3.4x higher rate of clean energy audit requests and citizen council participation compared to unassisted wards.",
    order: 5,
  },
];

export const mockSections: SurveySectionItem[] = [
  {
    id: "sec-1",
    title: "Community Energy Awareness & Perception",
    slug: "awareness",
    intro:
      "Assessing grassroots understanding of clean energy economics, grid independence, and local environmental impacts.",
    order: 1,
    points: [
      {
        id: "pt-1-1",
        sectionId: "sec-1",
        text: "91% recognize rooftop solar as an environmentally beneficial alternative to fossil grid power.",
        order: 1,
      },
      {
        id: "pt-1-2",
        sectionId: "sec-1",
        text: "Only 24% knew about state net-metering subsidy eligibility before reading our community briefing.",
        order: 2,
      },
      {
        id: "pt-1-3",
        sectionId: "sec-1",
        text: "78% expressed a desire for unbiased, neighborhood-led energy efficiency workshops.",
        order: 3,
      },
      {
        id: "pt-1-4",
        sectionId: "sec-1",
        text: "64% actively track their monthly kilowatt-hour consumption looking for peak-hour waste.",
        order: 4,
      },
    ],
    chartData: [
      { id: "cd-1-1", sectionId: "sec-1", label: "High Awareness", value: 46, chartType: "bar", order: 1 },
      { id: "cd-1-2", sectionId: "sec-1", label: "Moderate Knowledge", value: 38, chartType: "bar", order: 2 },
      { id: "cd-1-3", sectionId: "sec-1", label: "Uncertain / Basic", value: 16, chartType: "bar", order: 3 },
    ],
  },
  {
    title: "Citizen Priorities & Clean Energy Goals",
    id: "sec-2",
    slug: "priorities",
    intro:
      "What citizens prioritize most when considering clean energy upgrades for their homes and community facilities.",
    order: 2,
    points: [
      {
        id: "pt-2-1",
        sectionId: "sec-2",
        text: "Lowering recurring monthly electricity bills ranked as the #1 priority across 82% of households.",
        order: 1,
      },
      {
        id: "pt-2-2",
        sectionId: "sec-2",
        text: "Uninterrupted power supply for home cooling and essential medical devices ranked #2 (68%).",
        order: 2,
      },
      {
        id: "pt-2-3",
        sectionId: "sec-2",
        text: "Reducing urban air pollution and neighborhood carbon footprint ranked #3 (57%).",
        order: 3,
      },
      {
        id: "pt-2-4",
        sectionId: "sec-2",
        text: "Increasing property valuation and green energy certification ranked #4 (41%).",
        order: 4,
      },
    ],
    chartData: [
      { id: "cd-2-1", sectionId: "sec-2", label: "Lower Cost", value: 82, chartType: "bar", order: 1 },
      { id: "cd-2-2", sectionId: "sec-2", label: "Reliability", value: 68, chartType: "bar", order: 2 },
      { id: "cd-2-3", sectionId: "sec-2", label: "Clean Air", value: 57, chartType: "bar", order: 3 },
      { id: "cd-2-4", sectionId: "sec-2", label: "Property Value", value: 41, chartType: "bar", order: 4 },
    ],
  },
  {
    title: "Key Barriers & Systemic Roadblocks",
    id: "sec-3",
    slug: "barriers",
    intro:
      "Unpacking the structural, financial, and bureaucratic barriers preventing immediate green transition.",
    order: 3,
    points: [
      {
        id: "pt-3-1",
        sectionId: "sec-3",
        text: "High initial capital outlay without accessible zero-down financing options (68%).",
        order: 1,
      },
      {
        id: "pt-3-2",
        sectionId: "sec-3",
        text: "Complex multi-agency bureaucracy for grid connection and net-metering synchronization (54%).",
        order: 2,
      },
      {
        id: "pt-3-3",
        sectionId: "sec-3",
        text: "Lack of standardized quality assurance and trustworthy local maintenance technicians (47%).",
        order: 3,
      },
      {
        id: "pt-3-4",
        sectionId: "sec-3",
        text: "Rooftop property ownership disputes in multi-tenant or heritage family homes (39%).",
        order: 4,
      },
    ],
    chartData: [
      { id: "cd-3-1", sectionId: "sec-3", label: "Upfront Cost", value: 42, chartType: "pie", order: 1 },
      { id: "cd-3-2", sectionId: "sec-3", label: "Red Tape", value: 27, chartType: "pie", order: 2 },
      { id: "cd-3-3", sectionId: "sec-3", label: "Vendor Trust", value: 18, chartType: "pie", order: 3 },
      { id: "cd-3-4", sectionId: "sec-3", label: "Roof Rights", value: 13, chartType: "pie", order: 4 },
    ],
  },
  {
    title: "Actionable Community Recommendations",
    id: "sec-4",
    slug: "recommendations",
    intro:
      "Citizen-backed interventions to accelerate clean energy adoption at the neighborhood scale.",
    order: 4,
    points: [
      {
        id: "pt-4-1",
        sectionId: "sec-4",
        text: "Establish Ward-Level Energy Kiosks offering free energy audits and paperwork assistance.",
        order: 1,
      },
      {
        id: "pt-4-2",
        sectionId: "sec-4",
        text: "Launch Community Collective Purchasing groups to negotiate 20–25% bulk discounts with vetted installers.",
        order: 2,
      },
      {
        id: "pt-4-3",
        sectionId: "sec-4",
        text: "Pilot Municipal Virtual Net-Metering policies so apartment dwellers can co-own suburban solar capacity.",
        order: 3,
      },
      {
        id: "pt-4-4",
        sectionId: "sec-4",
        text: "Train local polytechnic youth in solar maintenance and micro-inverter troubleshooting.",
        order: 4,
      },
    ],
    chartData: [
      { id: "cd-4-1", sectionId: "sec-4", label: "Bulk Purchasing", value: 76, chartType: "area", order: 1 },
      { id: "cd-4-2", sectionId: "sec-4", label: "Ward Kiosks", value: 69, chartType: "area", order: 2 },
      { id: "cd-4-3", sectionId: "sec-4", label: "Virtual Net-Meter", value: 58, chartType: "area", order: 3 },
      { id: "cd-4-4", sectionId: "sec-4", label: "Youth Apprenticeship", value: 51, chartType: "area", order: 4 },
    ],
  },
];

export const mockAmbassadors: AmbassadorItem[] = [
  {
    id: "amb-1",
    name: "Dr. Arundhati Sen",
    role: "Ward 12 Lead & Renewable Policy Researcher",
    bio: "Pioneered the first cooperative solar rooftop project in East District, connecting 42 residential units to a unified net meter.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    area: "East Ward Cluster",
    socialLinks: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
    order: 1,
  },
  {
    id: "amb-2",
    name: "Kavita Ramachandran",
    role: "Community Microgrid Coordinator",
    bio: "Advocates for clean emergency battery banks in municipal community centers to guarantee power during peak storms.",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    area: "South Cantonment",
    socialLinks: { linkedin: "https://linkedin.com" },
    order: 2,
  },
  {
    id: "amb-3",
    name: "Tariq Mansoor",
    role: "Youth Energy Literacy Organizer",
    bio: "Organized over 20 campus workshops demystifying domestic energy tariffs and energy conservation for 3,000+ students.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    area: "University Heights",
    socialLinks: { twitter: "https://twitter.com" },
    order: 3,
  },
  {
    id: "amb-4",
    name: "Vikramaditya Rao",
    role: "Solar Technician & Apprentice Mentor",
    bio: "Trained 65 youth technicians in rooftop PV safety and smart inverter diagnostics across peri-urban districts.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    area: "Industrial Corridor",
    socialLinks: { linkedin: "https://linkedin.com" },
    order: 4,
  },
  {
    id: "amb-5",
    name: "Nandini Deshmukh",
    role: "Urban Agriculture & Agri-Voltaics Lead",
    bio: "Spearheaded rooftop hydroponic greenhouses powered by bifacial solar modules, producing fresh community herbs.",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    area: "Greenway North",
    socialLinks: { twitter: "https://twitter.com" },
    order: 5,
  },
  {
    id: "amb-6",
    name: "Farhan Siddiqui",
    role: "Resident Welfare Clean Energy Liaison",
    bio: "Negotiated the city's largest bulk vendor agreement for 120 residential society solar water heating retrofits.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    area: "Metro Hub South",
    socialLinks: { linkedin: "https://linkedin.com" },
    order: 6,
  },
];

export const mockInitiatives: InitiativeItem[] = [
  {
    id: "init-1",
    title: "Community Solar Collective",
    description:
      "Pooling neighborhood rooftop footprints and purchasing power to negotiate 25% lower equipment rates and shared community dividend returns.",
    href: "/survey-insights#recommendations",
    order: 1,
  },
  {
    id: "init-2",
    title: "Ward Energy Literacy Kiosks",
    description:
      "Physical and digital drop-in points providing free home energy audits, bill diagnostics, and net-metering guidance.",
    href: "/survey-insights#awareness",
    order: 2,
  },
  {
    id: "init-3",
    title: "Clean Power Youth Fellows",
    description:
      "Empowering emerging engineers and grassroots communicators to lead citizen clean energy mapping across all 28 municipal wards.",
    href: "/ambassadors",
    order: 3,
  },
];
