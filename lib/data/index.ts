import { prisma } from "@/lib/prisma";
import {
  mockStats,
  mockFindings,
  mockSections,
  mockAmbassadors,
  mockInitiatives,
} from "./mock-data";
import { HomeData, SurveyData, AmbassadorItem } from "@/types";

function isDatabaseConfigured(): boolean {
  const url = process.env.DATABASE_URL;
  if (!url) return false;
  // If still using example placeholder, use seeded mock dataset directly
  if (url.includes("ep-sample-pooler") || url.includes("user:password")) {
    return false;
  }
  return true;
}

export async function getHomeData(): Promise<HomeData> {
  if (isDatabaseConfigured()) {
    try {
      const [dbStats, dbInitiatives, dbAmbassadors] = await Promise.all([
        prisma.surveyStat.findMany({ orderBy: { order: "asc" } }),
        prisma.initiative.findMany({ orderBy: { order: "asc" } }),
        prisma.ambassador.findMany({ orderBy: { order: "asc" }, take: 4 }),
      ]);

      if (dbStats.length > 0 && dbInitiatives.length > 0) {
        return {
          stats: dbStats,
          initiatives: dbInitiatives,
          ambassadors: dbAmbassadors.map((a) => ({
            ...a,
            socialLinks: a.socialLinks as Record<string, string> | null,
          })),
        };
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("NeonDB query failed, using mock home data fallback.", error);
      }
    }
  }

  return {
    stats: mockStats,
    initiatives: mockInitiatives,
    ambassadors: mockAmbassadors.slice(0, 4),
  };
}

export async function getSurveyData(): Promise<SurveyData> {
  if (isDatabaseConfigured()) {
    try {
      const [dbStats, dbFindings, dbSections] = await Promise.all([
        prisma.surveyStat.findMany({ orderBy: { order: "asc" } }),
        prisma.surveyFinding.findMany({ orderBy: { order: "asc" } }),
        prisma.surveySection.findMany({
          orderBy: { order: "asc" },
          include: {
            points: { orderBy: { order: "asc" } },
            chartData: { orderBy: { order: "asc" } },
          },
        }),
      ]);

      if (dbStats.length > 0 && dbFindings.length > 0 && dbSections.length > 0) {
        return {
          stats: dbStats,
          findings: dbFindings,
          sections: dbSections,
        };
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("NeonDB query failed, using mock survey data fallback.", error);
      }
    }
  }

  return {
    stats: mockStats,
    findings: mockFindings,
    sections: mockSections,
  };
}

export async function getAmbassadors(): Promise<AmbassadorItem[]> {
  if (isDatabaseConfigured()) {
    try {
      const dbAmbassadors = await prisma.ambassador.findMany({
        orderBy: { order: "asc" },
      });

      if (dbAmbassadors.length > 0) {
        return dbAmbassadors.map((a) => ({
          ...a,
          socialLinks: a.socialLinks as Record<string, string> | null,
        }));
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("NeonDB query failed, using mock ambassadors data fallback.", error);
      }
    }
  }

  return mockAmbassadors;
}
