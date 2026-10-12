import { Gift, Scale, ShieldCheck, Smartphone } from 'lucide-react'
import { Container } from '@/components/layout/container'
import { FeatureCard } from '@/components/shared/feature-card'

const features = [
  {
    icon: Smartphone,
    title: 'Latest & Updated',
    description: 'We provide latest prices and specs in Bangladesh.',
    iconClassName: 'bg-[#e8f0fe] text-primary',
  },
  {
    icon: ShieldCheck,
    title: '100% Accurate',
    description: 'All information is checked and verified.',
    iconClassName: 'bg-[#e6f6ec] text-[#16a34a]',
  },
  {
    icon: Scale,
    title: 'Compare Easily',
    description: 'Compare phones and find the best one for you.',
    iconClassName: 'bg-[#fff3e2] text-[#f59e0b]',
  },
  {
    icon: Gift,
    title: 'Best Price in BD',
    description: 'Find the best deal from trusted sellers.',
    iconClassName: 'bg-[#f1ebff] text-[#7c3aed]',
  },
]

export function FeaturesStrip() {
  return (
    <section aria-label="Why choose us" className="pb-4 pt-4">
      <Container>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}
