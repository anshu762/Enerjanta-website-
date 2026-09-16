import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const initialStats = [
  {
    label: "Households Surveyed",
    value: "1,420",
    suffix: "+",
    order: 1,
  },
  {
    label: "Demand for Solar Transition",
    value: "84",
    suffix: "%",
    order: 2,
  },
  {
    label: "Avg. Monthly Energy Savings Potential",
    value: "38",
    suffix: "%",
    order: 3,
  },
  {
    label: "Local Community Wards Engaged",
    value: "28",
    suffix: " Wards",
    order: 4,
  },
];

export const initialFindings = [
  {
    title: "High Willingness, Severe Information Gap",
    description:
      "84% of surveyed households express strong interest in rooftop solar and renewable tariffs, but 71% report having no clear guidance on trusted vendors, subsidies, or net-metering approvals.",
    order: 1,
  },
  {
    title: "Upfront Cost is the Primary Friction Point",
    description:
      "68% cited capital expenditure as their major hurdle, yet 79% said they would adopt micro-installations immediately under low-interest community loan pools or pay-as-you-save schemes.",
    order: 2,
  },
  {
    title: "Grid Inconsistency Drives Clean Energy Urgency",
    description:
      "Frequent peak-load voltage fluctuations and power cuts during summer months have pushed 62% of residential blocks to consider battery-backed hybrid solar microgrids.",
    order: 3,
  },
  {
    title: "Community Solar Appeals to Renters & Apartments",
    description:
      "Over 88% of urban apartment residents cannot install private panels but are eager to subscribe to shared neighborhood solar farms within a 5km radius.",
    order: 4,
  },
  {
    title: "Youth & Local Champions Accelerate Adoption",
    description:
      "Wards with active student ambassadors reported a 3.4x higher rate of clean energy audit requests and citizen council participation compared to unassisted wards.",
    order: 5,
  },
];

export const initialSections = [
  {
    title: "Community Energy Awareness & Perception",
    slug: "awareness",
    intro:
      "Assessing grassroots understanding of clean energy economics, grid independence, and local environmental impacts.",
    order: 1,
    points: [
      "91% recognize rooftop solar as an environmentally beneficial alternative to fossil grid power.",
      "Only 24% knew about state net-metering subsidy eligibility before reading our community briefing.",
      "78% expressed a desire for unbiased, neighborhood-led energy efficiency workshops.",
      "64% actively track their monthly kilowatt-hour consumption looking for peak-hour waste.",
    ],
    chartData: [
      { label: "High Awareness", value: 46, chartType: "bar", order: 1 },
      { label: "Moderate Understanding", value: 38, chartType: "bar", order: 2 },
      { label: "Uncertain / Basic", value: 16, chartType: "bar", order: 3 },
    ],
  },
  {
    title: "Citizen Priorities & Clean Energy Goals",
    slug: "priorities",
    intro:
      "What citizens prioritize most when considering clean energy upgrades for their homes and community facilities.",
    order: 2,
    points: [
      "Lowering recurring monthly electricity bills ranked as the #1 priority across 82% of households.",
      "Uninterrupted power supply for home cooling and essential medical devices ranked #2 (68%).",
      "Reducing urban air pollution and neighborhood carbon footprint ranked #3 (57%).",
      "Increasing property valuation and green energy certification ranked #4 (41%).",
    ],
    chartData: [
      { label: "Cost Reduction", value: 82, chartType: "bar", order: 1 },
      { label: "Power Reliability", value: 68, chartType: "bar", order: 2 },
      { label: "Clean Air / Eco", value: 57, chartType: "bar", order: 3 },
      { label: "Property Value", value: 41, chartType: "bar", order: 4 },
    ],
  },
  {
    title: "Key Barriers & Systemic Roadblocks",
    slug: "barriers",
    intro:
      "Unpacking the structural, financial, and bureaucratic barriers preventing immediate green transition.",
    order: 3,
    points: [
      "High initial capital outlay without accessible zero-down financing options (68%).",
      "Complex multi-agency bureaucracy for grid connection and net-metering synchronization (54%).",
      "Lack of standardized quality assurance and trustworthy local maintenance technicians (47%).",
      "Rooftop property ownership disputes in multi-tenant or heritage family homes (39%).",
    ],
    chartData: [
      { label: "Upfront Cost", value: 42, chartType: "pie", order: 1 },
      { label: "Red Tape / Approvals", value: 27, chartType: "pie", order: 2 },
      { label: "Vendor Trust", value: 18, chartType: "pie", order: 3 },
      { label: "Roof Rights", value: 13, chartType: "pie", order: 4 },
    ],
  },
  {
    title: "Actionable Community Recommendations",
    slug: "recommendations",
    intro:
      "Citizen-backed interventions to accelerate clean energy adoption at the neighborhood scale.",
    order: 4,
    points: [
      "Establish Ward-Level Energy Kiosks offering free energy audits and paperwork assistance.",
      "Launch Community Collective Purchasing groups to negotiate 20–25% bulk discounts with vetted installers.",
      "Pilot Municipal Virtual Net-Metering policies so apartment dwellers can co-own suburban solar capacity.",
      "Train local polytechnic youth in solar maintenance and micro-inverter troubleshooting.",
    ],
    chartData: [
      { label: "Bulk Purchasing", value: 76, chartType: "area", order: 1 },
      { label: "Ward Kiosks", value: 69, chartType: "area", order: 2 },
      { label: "Virtual Net-Meter", value: 58, chartType: "area", order: 3 },
      { label: "Youth Apprenticeships", value: 51, chartType: "area", order: 4 },
    ],
  },
];

export const initialAmbassadors = [
  {
    name: "Dr. Arundhati Sen",
    role: "Ward 12 Lead & Renewable Policy Researcher",
    bio: "Pioneered the first cooperative solar rooftop project in East District, connecting 42 residential units to a unified net meter.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    area: "East Ward Cluster",
    socialLinks: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
    order: 1,
  },
  {
    name: "Kavita Ramachandran",
    role: "Community Microgrid Coordinator",
    bio: "Advocates for clean emergency battery banks in municipal community centers to guarantee power during peak storms.",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    area: "South Cantonment",
    socialLinks: { linkedin: "https://linkedin.com" },
    order: 2,
  },
  {
    name: "Tariq Mansoor",
    role: "Youth Energy Literacy Organizer",
    bio: "Organized over 20 campus workshops demystifying domestic energy tariffs and energy conservation for 3,000+ students.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    area: "University Heights",
    socialLinks: { twitter: "https://twitter.com" },
    order: 3,
  },
  {
    name: "Vikramaditya Rao",
    role: "Solar Technician & Apprentice Mentor",
    bio: "Trained 65 youth technicians in rooftop PV safety and smart inverter diagnostics across peri-urban districts.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    area: "Industrial Corridor",
    socialLinks: { linkedin: "https://linkedin.com" },
    order: 4,
  },
  {
    name: "Nandini Deshmukh",
    role: "Urban Agriculture & Agri-Voltaics Lead",
    bio: "Spearheaded rooftop hydroponic greenhouses powered by bifacial solar modules, producing fresh community herbs.",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    area: "Greenway North",
    socialLinks: { twitter: "https://twitter.com" },
    order: 5,
  },
  {
    name: "Farhan Siddiqui",
    role: "Resident Welfare Clean Energy Liaison",
    bio: "Negotiated the city's largest bulk vendor agreement for 120 residential society solar water heating retrofits.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    area: "Metro Hub South",
    socialLinks: { linkedin: "https://linkedin.com" },
    order: 6,
  },
];

export const initialInitiatives = [
  {
    title: "Community Solar Collective",
    description:
      "Pooling neighborhood rooftop footprints and purchasing power to negotiate 25% lower equipment rates and shared community dividend returns.",
    href: "/survey-insights#recommendations",
    order: 1,
  },
  {
    title: "Ward Energy Literacy Kiosks",
    description:
      "Physical and digital drop-in points providing free home energy audits, bill diagnostics, and net-metering guidance.",
    href: "/survey-insights#awareness",
    order: 2,
  },
  {
    title: "Clean Power Youth Fellows",
    description:
      "Empowering emerging engineers and grassroots communicators to lead citizen clean energy mapping across all 28 municipal wards.",
    href: "/ambassadors",
    order: 3,
  },
];

export async function main() {
  console.log("Seeding Enerjanta database...");

  // Clear existing
  await prisma.surveySectionPoint.deleteMany();
  await prisma.surveyChartData.deleteMany();
  await prisma.surveySection.deleteMany();
  await prisma.surveyStat.deleteMany();
  await prisma.surveyFinding.deleteMany();
  await prisma.ambassador.deleteMany();
  await prisma.initiative.deleteMany();

  // Seed Stats
  for (const stat of initialStats) {
    await prisma.surveyStat.create({ data: stat });
  }

  // Seed Findings
  for (const finding of initialFindings) {
    await prisma.surveyFinding.create({ data: finding });
  }

  // Seed Sections with Points and ChartData
  for (const sec of initialSections) {
    const createdSection = await prisma.surveySection.create({
      data: {
        title: sec.title,
        slug: sec.slug,
        intro: sec.intro,
        order: sec.order,
      },
    });

    for (let i = 0; i < sec.points.length; i++) {
      await prisma.surveySectionPoint.create({
        data: {
          sectionId: createdSection.id,
          text: sec.points[i],
          order: i + 1,
        },
      });
    }

    for (const chart of sec.chartData) {
      await prisma.surveyChartData.create({
        data: {
          sectionId: createdSection.id,
          label: chart.label,
          value: chart.value,
          chartType: chart.chartType,
          order: chart.order,
        },
      });
    }
  }

  // Seed Ambassadors
  for (const amb of initialAmbassadors) {
    await prisma.ambassador.create({ data: amb });
  }

  // Seed Initiatives
  for (const init of initialInitiatives) {
    await prisma.initiative.create({ data: init });
  }

  console.log("Seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
