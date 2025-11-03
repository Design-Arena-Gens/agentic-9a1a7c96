import { InsightsPanel } from '@/app/components/InsightsPanel';
import { Differentiators } from '@/app/components/Differentiators';
import { ToolchainList } from '@/app/components/ToolchainList';
import { differentiators, operationalInsights, toolchain } from '@/lib/capabilities';

export function Insights() {
  return (
    <section aria-labelledby="insights" id="insights">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <p className="badge">Beyond deliverables</p>
        <h2 id="insights" style={{ fontSize: '2rem', margin: 0 }}>What teams experience</h2>
        <p className="subtitle">Insights, toolchain, and differentiators that make collaboration frictionless.</p>
      </div>
      <div className="grid grid-columns-3">
        <InsightsPanel insights={operationalInsights} />
        <ToolchainList tools={toolchain} />
        <Differentiators points={differentiators} />
      </div>
    </section>
  );
}
