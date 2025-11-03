import { CapabilityCard } from '@/app/components/CapabilityCard';
import { ServicePlayCard } from '@/app/components/ServicePlayCard';
import { FeatureTogglePanel } from '@/app/components/FeatureTogglePanel';
import { capabilityHighlights, servicePlays } from '@/lib/capabilities';

export function CapabilityShowcase() {
  return (
    <section aria-labelledby="capabilities" id="capabilities">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <p className="badge">What can this assistant do?</p>
        <h2 id="capabilities" style={{ fontSize: '2rem', margin: 0 }}>
          Opinionated range across strategy, design, and build
        </h2>
        <p className="subtitle">
          Blend strategic insight, design craft, and engineering execution. Deploy it to produce narratives, prototypes, production code, and automation without switching contexts.
        </p>
      </div>

      <div className="grid grid-columns-3" style={{ marginBottom: '2.5rem' }}>
        {capabilityHighlights.map((capability) => (
          <CapabilityCard key={capability.id} capability={capability} />
        ))}
      </div>

      <div className="grid grid-columns-3" style={{ marginBottom: '2.5rem' }}>
        {servicePlays.map((play) => (
          <ServicePlayCard key={play.id} play={play} />
        ))}
        <FeatureTogglePanel />
      </div>
    </section>
  );
}
