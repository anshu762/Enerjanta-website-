export interface SurveyStatItem {
  id: string;
  label: string;
  value: string;
  suffix?: string | null;
  order: number;
}

export interface SurveyFindingItem {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface SurveySectionPointItem {
  id: string;
  sectionId: string;
  text: string;
  order: number;
}

export interface SurveyChartDataItem {
  id: string;
  sectionId?: string | null;
  label: string;
  value: number;
  chartType: string;
  order: number;
}

export interface SurveySectionItem {
  id: string;
  title: string;
  slug: string;
  intro: string;
  order: number;
  points: SurveySectionPointItem[];
  chartData: SurveyChartDataItem[];
}

export interface AmbassadorItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  area?: string | null;
  socialLinks?: Record<string, string> | null;
  order: number;
}

export interface InitiativeItem {
  id: string;
  title: string;
  description: string;
  href: string;
  order: number;
}

export interface HomeData {
  stats: SurveyStatItem[];
  initiatives: InitiativeItem[];
  ambassadors: AmbassadorItem[];
}

export interface SurveyData {
  stats: SurveyStatItem[];
  findings: SurveyFindingItem[];
  sections: SurveySectionItem[];
}
