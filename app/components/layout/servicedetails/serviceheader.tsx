import React from 'react';
import ImageComponent from 'next/image';
import {
  BookOpen,
  GraduationCap,
  TrendingUp,
  Sprout,
  Heart,
  Users,
  ShieldCheck,
  Baby,
  Briefcase,
  LucideIcon
} from 'lucide-react';
import type { ServiceHeaderData } from '@/app/type/ngo';

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  gradCap: GraduationCap,
  userGrowth: TrendingUp,
  sprout: Sprout,
  heart: Heart,
  users: Users,
  shieldCheck: ShieldCheck,
  baby: Baby,
  briefcase: Briefcase,
};

interface ServiceHeaderProps {
  data: ServiceHeaderData;
}

export default function ServiceHeader({ data }: ServiceHeaderProps) {
  if (!data) return null;

  const BadgeIcon = data.badgeIcon ? (iconMap[data.badgeIcon] || BookOpen) : BookOpen;

  return (
    <section className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1348px] mx-auto mt-6 sm:mt-10 lg:mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column - Details Header Content */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          
          {/* Badge Tag with Icon */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#edf5ee] border border-[#d3e6d5] text-[#2c7a3f]">
            <BadgeIcon className="w-4 h-4 text-[#2c7a3f]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
              {data.badge}
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d3319] tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#2c7a3f] mt-1 sm:mt-2">
              {data.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans max-w-2xl">
            {data.description}
          </p>

          {/* Feature Badges Grid / Row */}
          {data.features && data.features.length > 0 && (
            <div className="pt-2 sm:pt-4 grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4">
              {data.features.map((feature) => {
                const FeatureIcon = iconMap[feature.icon] || GraduationCap;
                return (
                  <div
                    key={feature.id}
                    className="flex flex-col items-center xs:items-start p-3 sm:p-3.5 rounded-xl bg-[#f7faf7] border border-[#e5efe6] text-center xs:text-left transition-all hover:bg-[#edf5ee]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2c7a3f]/10 text-[#2c7a3f] mb-2">
                      <FeatureIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#0d3319] leading-tight">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Right Column - Arched Hero Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-[14/11] lg:aspect-[13/11] rounded-[60px_16px_60px_16px] sm:rounded-[90px_20px_90px_20px] overflow-hidden p-2 sm:p-2.5 bg-gradient-to-tr from-[#2c7a3f] via-[#4f9eea] to-[#2c7a3f] shadow-lg">
            <div className="relative w-full h-full rounded-[52px_12px_52px_12px] sm:rounded-[82px_16px_82px_16px] overflow-hidden bg-white">
              <ImageComponent
                src={data.heroImage}
                alt={data.heroAlt || data.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Leaf Accent Decoration SVG */}
            <div className="absolute bottom-3 left-4 text-white/30 pointer-events-none">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.8 2.8C11.4 3 6.3 8.1 6.1 14.5c-.1 2.9 1 5.7 3 7.8l.9.9 2-2c3.9-3.9 4.8-9.8 2.2-14.7.7.7 1.4 1.5 2 2.4.9 1.4 1.4 3 1.5 4.6l2-.3c-.2-2.1-.9-4.1-2-5.9 1.1-1.3 2.1-2.9 2.1-4.5h-2z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
