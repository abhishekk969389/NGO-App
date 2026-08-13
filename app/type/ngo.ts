export interface NgoBrand {
  name: string;
  tagline: string;
  logo: string;
}

export interface NgoSubNavLink {
  label: string;
  href: string;
}

export interface NgoNavLink {
  label: string;
  href: string;
  description?: string;
  children?: NgoSubNavLink[];
}

export interface NgoActionLink {
  label: string;
  href: string;
}

export interface NgoActions {
  searchLabel: string;
  donate: NgoActionLink;
  volunteer: NgoActionLink;
}

export interface NgoBannerStat {
  id: number;
  value: string;
  label: string;
  icon: 'smiley' | 'heart' | 'projects';
}

export interface NgoBanner {
  tagline: string;
  heading: string;
  description: string;
  backgroundImage: string;
  buttons: {
    donate: {
      label: string;
      href: string;
    };
    volunteer: {
      label: string;
      href: string;
    };
  };
  stats: NgoBannerStat[];
}

export interface NgoAboutFeature {
  id: number;
  text: string;
  icon: string;
}

export interface NgoAboutSection {
  tagline: string;
  heading: string;
  description: string;
  quote: string;
  images: {
    main: string;
    circle: string;
  };
  features: NgoAboutFeature[];
  button: {
    label: string;
    href: string;
  };
}

export interface NgoMissionCard {
  id: number;
  title: string;
  description: string;
  icon: 'child' | 'shelter' | 'education' | 'food';
  href: string;
}

export interface NgoOurMission {
  badge: string;
  heading: string;
  description: string;
  cards: NgoMissionCard[];
}

export interface NgoCauseCard {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  centerIcon: string;
  image: string;
  href: string;
}

export interface NgoSmileCauses {
  heading: string;
  description: string;
  cards: NgoCauseCard[];
}

export interface NgoTestimonialCard {
  id: number;
  name: string;
  designation: string;
  feedback: string;
  rating: number;
  image: string;
  themeColor: string;
}

export interface NgoTestimonialHeading {
  prefix: string;
  highlight: string;
  suffix: string;
}

export interface NgoTestimonials {
  heading: NgoTestimonialHeading;
  cards: NgoTestimonialCard[];
}

export interface NgoBlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  image: string;
  href: string;
}

export interface NgoBlogsSection {
  badge: string;
  heading: string;
  button: {
    label: string;
    href: string;
  };
  posts: NgoBlogPost[];
}

export interface NgoHomeCta {
  heading: string;
  description: string;
  buttons: {
    donate: {
      label: string;
      href: string;
      icon: string;
    };
    volunteer: {
      label: string;
      href: string;
      icon: string;
    };
  };
}

export interface BreadcrumbItem {
  id?: number | string;
  label: string;
  href?: string;
  icon?: string;
  isCurrent?: boolean;
}

export interface PageBannerData {
  title: string;
  backgroundImage: string;
  altText?: string;
  breadcrumbs: BreadcrumbItem[];
}

export type PageBanners = Record<string, PageBannerData>;

export interface BannerProps {
  pageKey?: string;
  bannerData?: PageBannerData;
  className?: string;
}

export interface NgoAboutStoryHighlight {
  title: string;
  subtitle: string;
  icon?: string;
}

export interface NgoAboutStorySection {
  badge: string;
  badgeIcon?: string;
  heading: string;
  highlight: NgoAboutStoryHighlight;
  paragraphs: string[];
  images: {
    main: string;
    circle: string;
  };
}

export interface NgoWhatWeDoItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NgoWhatWeDoSection {
  badge: string;
  badgeIcon?: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  items: NgoWhatWeDoItem[];
  images: {
    girl: string;
    education: string;
    food: string;
    planting: string;
  };
}

export interface NgoCertificateCard {
  id: number;
  title: string;
  subtitle: string;
  label: string;
}

export interface NgoCertificateSection {
  badge: string;
  heading: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  cardImage: string;
  certificates: NgoCertificateCard[];
}

export interface NgoCertificateAchievementSection {
  iconName: string;
  tag: string;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

export interface NgoSitemapLink {
  id: number;
  label: string;
  href: string;
}

export interface NgoSitemapCategory {
  id: number;
  title: string;
  icon: string;
  links: NgoSitemapLink[];
}

export interface NgoSitemapSection {
  heading: string;
  description: string;
  categories: NgoSitemapCategory[];
}

export interface NgoLegalLink {
  id: number;
  label: string;
  href: string;
}

export interface NgoLegalSection {
  heading: string;
  description: string;
  links: NgoLegalLink[];
}

export interface MissionPagePillar {
  id: number;
  title: string;
  description: string;
  icon: 'educate' | 'heal' | 'support' | 'empower' | string;
  themeColor: string;
  bgColor: string;
}

export interface MissionPageSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  pillars: MissionPagePillar[];
  badgeTagline?: string;
  images: {
    main: string;
    circle: string;
  };
}

export interface NgoServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface NgoServicesSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  centerImage: string;
  items: NgoServiceItem[];
}

export interface NgoImpactStat {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface NgoImpactHighlight {
  title: string;
  text: string;
}

export interface NgoImpactSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
    line3: string;
  };
  description: string;
  stats: NgoImpactStat[];
  showcase: {
    mainImage: string;
    secondaryImages: string[];
    quote: NgoImpactHighlight;
  };
}

export interface NgoImpactGlanceStat {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface NgoImpactGlanceSection {
  badge: string;
  heading: string;
  stats: NgoImpactGlanceStat[];
}

export interface NgoFocusAreaCard {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface NgoFocusAreaSection {
  badge?: string;
  heading: string;
  cards: NgoFocusAreaCard[];
}

export interface NgoCsrInitiativeItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface NgoCsrInitiativesSection {
  badge: string;
  heading: string;
  items: NgoCsrInitiativeItem[];
}

export interface NgoGoalItem {
  id: number;
  code: string;
  title: string;
  accent: string;
  icon: string;
}

export interface NgoGoalsSection {
  badge?: string;
  heading: string;
  items: NgoGoalItem[];
}

export interface NgoCommitmentSection {
  title: string;
  description: string;
  quote: {
    text: string;
    author: string;
  };
}

export interface NgoArticleCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface NgoArticlesSection {
  heading: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  cards: NgoArticleCard[];
}

export interface NgoSupportContactMethod {
  id: number;
  label: string;
  value: string;
  href?: string;
  icon: string;
}

export interface NgoSupportContactFieldOption {
  value: string;
  label: string;
}

export interface NgoSupportContactField {
  id: number;
  name: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  placeholder: string;
  icon?: string;
  options?: NgoSupportContactFieldOption[];
}

export interface NgoSupportContactForm {
  heading: string;
  fields: NgoSupportContactField[];
  buttonLabel: string;
}

export interface NgoContactSection {
  title: string;
  subtitle: string;
  description: string;
  contactMethods: NgoSupportContactMethod[];
  form: NgoSupportContactForm;
}

export interface NgoPortfolioCard {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  buttonLabel: string;
  href: string;
  themeClass: string;
}

export interface NgoPortfolioSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  cards: NgoPortfolioCard[];
}

export interface NgoCaseStudyCategory {
  id: number;
  label: string;
  value: string;
}

export interface NgoCaseStudyCard {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: string;
  buttonLabel: string;
  href: string;
  accent: string;
}

export interface NgoCaseStudySection {
  badge: string;
  heading: string;
  description: string;
  categories: NgoCaseStudyCategory[];
  cards: NgoCaseStudyCard[];
}

export interface NgoEventCard {
  id: number;
  title: string;
  date: {
    day: number;
    month: string;
  };
  location: string;
  time: string;
  description: string;
  image: string;
  buttonLabel: string;
  href: string;
}

export interface NgoUpcomingEventCard {
  id: number;
  title: string;
  date: {
    day: number;
    month: string;
  };
  location: string;
  time: string;
  description: string;
  image: string;
  buttonLabel: string;
  href: string;
}

export interface NgoEventSection {
  badge: string;
  heading: string;
  subheading: string;
  featuredTitle: string;
  arrowButtons: {
    prev: string;
    next: string;
  };
  cards: NgoEventCard[];
  upcomingTitle: string;
  viewMoreLabel: string;
  upcomingCards: NgoUpcomingEventCard[];
}

export interface NgoHelpCard {
  id: number;
  title: string;
  description: string;
  button: string;
  icon: string;
}

export interface NgoHelpSection {
  heading: {
    line1: string;
    line2: string;
  };
  subheading: string;
  cards: NgoHelpCard[];
}

export interface VisionPagePillar {
  id: number;
  title: string;
  description: string;
  icon: 'inclusive' | 'opportunities' | 'healthy' | 'stronger' | string;
}

export interface VisionPageQuote {
  prefix: string;
  italicText: string;
}

export interface VisionPageCard {
  title: string;
  description: string;
  icon?: string;
}

export interface VisionPageSection {
  badge: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  pillars: VisionPagePillar[];
  quote: VisionPageQuote;
  visionCard: VisionPageCard;
  images: {
    main: string;
  };
}

export interface TeamMemberSocial {
  platform: 'linkedin' | 'twitter' | 'email' | string;
  href: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: TeamMemberSocial[];
  experience: string;
  education: string;
  email: string;
  phone: string;
  location: string;
  joined: string;
  expertise: string[];
  coreValues: string[];
  achievements: string;
  quote: string;
}

export interface TeamCtaBanner {
  title: string;
  description: string;
  ctaTitle: string;
  button: {
    label: string;
    href: string;
  };
}

export interface TeamSectionDetailLabels {
  experience: string;
  education: string;
  email: string;
  phone: string;
  location: string;
  joined: string;
  expertise: string;
  coreValues: string;
  achievements: string;
  quote: string;
  back: string;
}

export interface TeamSectionData {
  badge: string;
  heading: string;
  description: string;
  detailLabels: TeamSectionDetailLabels;
  members: TeamMember[];
  ctaBanner: TeamCtaBanner;
}

export interface NgoData {
  brand: NgoBrand;
  banner: NgoBanner;
  pageBanners?: PageBanners;
  aboutSection: NgoAboutSection;
  aboutStorySection?: NgoAboutStorySection;
  whatWeDoSection?: NgoWhatWeDoSection;
  missionPageSection?: MissionPageSection;
  servicesSection?: NgoServicesSection;
  impactSection?: NgoImpactSection;
  impactGlanceSection?: NgoImpactGlanceSection;
  focusAreaSection?: NgoFocusAreaSection;
  csrInitiativesSection?: NgoCsrInitiativesSection;
  goalsSection?: NgoGoalsSection;
  commitmentSection?: NgoCommitmentSection;
  articlesSection?: NgoArticlesSection;
  contactSection?: NgoContactSection;
  portfolioSection?: NgoPortfolioSection;
  caseStudySection?: NgoCaseStudySection;
  eventSection?: NgoEventSection;
  helpSection?: NgoHelpSection;
  visionPageSection?: VisionPageSection;
  certificateSection: NgoCertificateSection;
  certificateAchievementSection: NgoCertificateAchievementSection;
  sitemapSection: NgoSitemapSection;
  legalSection: NgoLegalSection;
  teamSection?: TeamSectionData;
  ourMission: NgoOurMission;
  smileCauses: NgoSmileCauses;
  testimonials: NgoTestimonials;
  blogsSection: NgoBlogsSection;
  homeCta: NgoHomeCta;
  navLinks: NgoNavLink[];
  actions: NgoActions;
}


export interface LinkItem {
  id: number;
  label: string;
  href: string;
}

export interface SocialLink {
  id: number;
  platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin';
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export interface FooterData {
  footerHeadings: {
    quickLinks: string;
    ourCauses: string;
    usefulLinks: string;
    contactInfo: string;
  };
  about: {
    description: string;
  };
  socialLinks: SocialLink[];
  quickLinks: LinkItem[];
  ourCauses: LinkItem[];
  usefulLinks: LinkItem[];
  contactInfo: ContactInfo;
  copyrightText: string;
}