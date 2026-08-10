export interface NgoBrand {
  name: string;
  tagline: string;
  subtitle: string;
  logo: string;
}

export interface NgoNavLink {
  label: string;
  href: string;
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

export interface NgoData {
  brand: NgoBrand;
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