import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, Users } from 'lucide-react';
import ngoData from '@/app/data/ngoData.json';
import type { NgoData } from '@/app/type/ngo';

const data = ngoData as NgoData;

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src={data.brand.logo}
              alt={`${data.brand.name} logo`}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center whitespace-nowrap">
            <span className="text-2xl font-black leading-none tracking-tight text-[#0c4d1e]">
              {data.brand.name}
            </span>
            <span className="text-[11px] font-bold tracking-wider text-[#0c4d1e] mt-0.5">
              {data.brand.tagline}
            </span>
            <span className="text-[7px] font-bold uppercase tracking-wide text-[#0c4d1e] opacity-90 mt-0.5">
              {data.brand.subtitle}
            </span>
          </div>
        </Link>

        {/* Navigation Links - whitespace-nowrap added */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {data.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-800 hover:text-[#0c4d1e] whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons - flex-shrink-0 and whitespace-nowrap added */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Search Icon */}
          <button
            type="button"
            aria-label={data.actions.searchLabel}
            className="p-2 text-gray-700 hover:text-[#0c4d1e]"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Donate Button */}
          <Link
            href={data.actions.donate.href}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#2c7a3f] px-4 py-2 text-sm font-semibold text-[#2c7a3f] hover:bg-[#2c7a3f] hover:text-white whitespace-nowrap"
          >
            <Heart className="h-4 w-4" 
            />
            <span>{data.actions.donate.label}</span>
          </Link>

          {/* Volunteer Button */}
          <Link
            href={data.actions.volunteer.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#0c4d1e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#083815] whitespace-nowrap"
          >
            <Users className="h-4 w-4" />
            <span>{data.actions.volunteer.label}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}