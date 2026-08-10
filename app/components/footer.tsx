import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  HeartHandshake
} from 'lucide-react';
import footerDataJson from '@/app/data/ngoData.json';
import type { FooterData } from '@/app/type/ngo';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const footerData = footerDataJson as FooterData;

export default function Footer() {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook': return <FacebookIcon className="w-4 h-4" />;
      case 'instagram': return <InstagramIcon className="w-4 h-4" />;
      case 'twitter': return <TwitterIcon className="w-4 h-4" />;
      case 'youtube': return <YoutubeIcon className="w-4 h-4" />;
      case 'linkedin': return <LinkedinIcon className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <footer className="w-full bg-[#fdfdfd] pt-12 border-t border-gray-100 text-gray-700 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0">
          
          {/* Column 1: Logo & About (3 cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8 flex flex-col justify-between">
            <div>
              {/* Logo from /public/logo.svg */}
              <Link href="/">
                <Image 
                  src="/logo.svg" 
                  alt="Bless Foundation Logo" 
                  width={200} 
                  height={65} 
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-gray-600 max-w-sm">
                {footerData.about.description}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {footerData.socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#2c7a3f] hover:border-[#2c7a3f] transition-colors"
                >
                  {getSocialIcon(item.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 lg:px-6 lg:border-l lg:border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">Quick Links</h3>
            <div className="w-6 h-[2px] bg-[#2c7a3f] mt-1 mb-5"></div>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#2c7a3f] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Causes (2 cols) */}
          <div className="lg:col-span-2 lg:px-6 lg:border-l lg:border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">Our Causes</h3>
            <div className="w-6 h-[2px] bg-[#2c7a3f] mt-1 mb-5"></div>
            <ul className="space-y-3">
              {footerData.ourCauses.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#2c7a3f] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Useful Links (2 cols) */}
          <div className="lg:col-span-2 lg:px-6 lg:border-l lg:border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">Useful Links</h3>
            <div className="w-6 h-[2px] bg-[#2c7a3f] mt-1 mb-5"></div>
            <ul className="space-y-3">
              {footerData.usefulLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#2c7a3f] transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us (2 cols) */}
          <div className="lg:col-span-2 lg:pl-6 lg:border-l lg:border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">Contact Us</h3>
            <div className="w-6 h-[2px] bg-[#2c7a3f] mt-1 mb-5"></div>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2c7a3f] flex-shrink-0 mt-1" />
                <span className="whitespace-pre-line">{footerData.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2c7a3f] flex-shrink-0" />
                <a href={`tel:${footerData.contactInfo.phone}`} className="hover:text-[#2c7a3f] transition-colors">
                  {footerData.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2c7a3f] flex-shrink-0" />
                <a href={`mailto:${footerData.contactInfo.email}`} className="hover:text-[#2c7a3f] transition-colors">
                  {footerData.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#2c7a3f] flex-shrink-0" />
                <span>{footerData.contactInfo.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Center Divider with Heart Icon */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-[#2c7a3f]/40"></div>
          <div className="absolute bg-[#fdfdfd] px-4 text-[#2c7a3f]">
            <HeartHandshake className="w-7 h-7" />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs mb-5 text-gray-500 font-medium">
          {footerData.copyrightText}
        </div>

      </div>
    </footer>
  );
}