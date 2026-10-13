import React from 'react'
import { Container } from '../layout/container'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BriefcaseBusiness, Gamepad2, GraduationCap, Grid2X2, Leaf, Palette } from 'lucide-react';

const categories = [
  ["All Laptops", Grid2X2, "bg-blue-50 text-blue-600"],
  ["Gaming", Gamepad2, "bg-violet-50 text-violet-600"],
  ["Business", BriefcaseBusiness, "bg-emerald-50 text-emerald-600"],
  ["Student", GraduationCap, "bg-amber-50 text-amber-600"],
  ["Creator", Palette, "bg-pink-50 text-pink-600"],
  ["Ultrabook", Leaf, "bg-cyan-50 text-cyan-600"],
] as const;

function Categories() {
  return (
    <>
      <Container className="mt-4">
        <nav className="grid grid-cols-3 gap-2 rounded-2xl border border-blue-100 bg-white p-2 sm:grid-cols-6">
          {categories.map(([label, Icon, color]) => (
            <Link
              key={label}
              href="/laptops"
              className="flex flex-col items-center gap-2 rounded-xl py-3 text-center text-xs font-semibold md:text-sm"
            >
              <span
                className={cn(
                  "flex size-12 items-center justify-center rounded-full",
                  color,
                )}
              >
                <Icon className="size-6" />
              </span>
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </>
  )
}

export default Categories
