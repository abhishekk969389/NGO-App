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

export interface NgoData {
  brand: NgoBrand;
  banner: NgoBanner;
  aboutSection: NgoAboutSection;
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