export interface UserModel {
  person: Person;
  stats: Stat;
  strengths: Strength[];
  interests: any[];
  experiences: Experience[];
  jobs: Job[];
  projects: any[];
  publications: any[];
  education: Education[];
  opportunities: Opportunity[];
  languages: Language[];
}

export interface Person {
  professionalHeadline: string;
  completion: string;
  showPhone: boolean;
  created: Date;
  verified: boolean;
  flags: Flag;
  weight: string;
  ggId: string;
  locale: string;
  subjectId: string;
  picture: string;
  hasEmail: boolean;
  isTest: boolean;
  name: string;
  links: Link[];
  location: Location;
  theme: string;
  id: string;
  pictureThumbnail: string;
  claimant: boolean;
  publicId: string;
}

export interface Flag {
  accessCohort: boolean;
  benefits: boolean;
  canary: boolean;
  enlauSource: boolean;
  fake: boolean;
  featureDiscovery: boolean;
  firstSignalSent: boolean;
  signalsOnboardingCompleted: boolean;
  importingLinkedin: boolean;
  onBoarded: true;
  remoter: true;
  signalsFeatureDiscovery: true;
  importingLinkedinRecommendations: boolean;
  contactsImported: boolean;
  appContactsImported: boolean;
  genomeCompletionAcknowledged: boolean;
  cvImported: boolean;
  communityCreatedPrivate: boolean;
  communityCreatedClaimed: boolean;
  connectBenefitsViewed: boolean;
  recommendationLeadEmailSent: boolean;
  recommendationsAskedGenomeCompletion: boolean;
  behavioralTraitsAcknowledged: boolean;
  testTaken: boolean;
  previewFeatureDiscovery: boolean;
  boosted: boolean;
}

export interface Link {
  id: string;
  name: string;
  address: string;
}

export interface Location {
  name: string;
  country: string;
  latitude: string;
  longitude: string;
  timezone: string;
  timezoneOffSet: string;
}

export interface Stat {
  jobs: string;
  education: string;
  strengths: string;
}

export interface Strength {
  id: string;
  code: string;
  name: string;
  proficiency: string;
  weight: string;
  recommendations: string;
  media: any[];
  supra: boolean;
  created: string;
  hits: string;
}

export interface Experience {
  id: string;
  category: string;
  name: string;
  organizations: Organisation[];
  additionalInfo: string;
  highlighted: boolean;
  weight: string;
  verifications: string;
  recommendations: string;
  media: any[];
  rank: string;
  strengths: Strength[];
}

export interface Organisation {
  id: string;
  name: string;
  publicId: string;
  picture: string;
  serviceType: string;
}

export interface Job {
  id: string;
  category: string;
  name: string;
  organizations: Organisation[];
  additionalInfo: string;
  highlighted: boolean;
  weight: string;
  verifications: string;
  recommendations: string;
  rank: string;
  strengths: Strength[];
}

export interface Education {
  id: string;
  category: string;
  name: string;
  organizations: Organisation[];
  toMonth: string;
  toYear: string;
  highlighted: boolean;
  weight: string;
  verifications: string;
  recommendations: string;
  rank: string;
  strengths: Strength[];
  remote: boolean;
}

export interface Opportunity {
  id: string;
  interest: string;
  field: string;
  data: boolean;
}

export interface Language {
  code: string;
  language: string;
}
