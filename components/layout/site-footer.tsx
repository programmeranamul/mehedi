import Link from 'next/link'
import { Heart, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { Logo } from '@/components/layout/logo'
import { footerColumns, siteConfig } from '@/lib/site-config'

const headingClass = 'mb-3 text-[13px] font-semibold text-navy-foreground text-center md:text-left'
const linkClass = 'text-[11px] leading-[14.5px] text-navy-muted transition-colors hover:text-white'
const columnClass = 'md:border-l md:border-navy-border md:pl-6 lg:pl-7 col-span-2 md:col-span-3 text-center md:text-left'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <Container className="grid grid-cols-2 gap-y-8 py-4 md:grid-cols-12 md:gap-x-0">
        
        {/* Column 1: Logo & Socials (Moved to last on mobile using order utilities) */}
        <div className="col-span-2 order-last flex flex-col items-center md:col-span-3 md:order-none md:items-start md:pr-6">
          <Logo variant="light" size="sm" />
          <p className="mt-3 max-w-[180px] text-center text-[11px] leading-[14.5px] text-navy-muted md:text-left">
            {siteConfig.description}
          </p>
          <ul className="mt-2.5 flex items-center justify-center gap-2.5 md:justify-start" aria-label="Social media">
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-[22px] items-center justify-center rounded-full border border-white transition-colors hover:bg-white/10"
                >
                  <img src={social.icon || '/placeholder.svg'} alt="" className="size-3 invert" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Dynamic Footer Columns */}
        {footerColumns.map((column) => (
          <div key={column.title} className={columnClass}>
            <h2 className={headingClass}>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Us Column */}
        <div className={`${columnClass} flex flex-col`}>
          <h2 className={headingClass}>Contact Us</h2>
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <Mail className="size-3.5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
              <span className={linkClass}>{siteConfig.location}</span>
            </li>
          </ul>
          <p className="mt-auto  items-center justify-center gap-1 pt-4 text-[11px] text-navy-muted md:justify-start hidden md:flex">
            Made with <Heart className="size-3.5 fill-[#e3141c] text-[#e3141c]" aria-label="love" /> for Bangladesh
          </p>
        </div>

      </Container>
    </footer>
  )
}