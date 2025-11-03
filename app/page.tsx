import { Hero } from '@/app/sections/Hero';
import { CapabilityShowcase } from '@/app/sections/CapabilityShowcase';
import { Workflow } from '@/app/sections/Workflow';
import { Insights } from '@/app/sections/Insights';
import { CallToAction } from '@/app/sections/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilityShowcase />
      <Workflow />
      <Insights />
      <CallToAction />
      <footer>
        <strong>Agentic delivery, on-demand.</strong> Ship strategy, design, and code with a partner that keeps momentum high and context intact.
      </footer>
    </main>
  );
}
