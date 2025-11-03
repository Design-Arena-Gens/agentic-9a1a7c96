import { WorkflowTimeline } from '@/app/components/WorkflowTimeline';
import { workflowStages } from '@/lib/capabilities';

export function Workflow() {
  return (
    <section aria-labelledby="workflow" id="workflow">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <p className="badge">Operating model</p>
        <h2 id="workflow" style={{ fontSize: '2rem', margin: 0 }}>How the work flows</h2>
        <p className="subtitle">
          A service design mindset anchors every engagement. Discover insights, rapidly validate direction, build production systems, and scale with documentation that keeps teams aligned.
        </p>
      </div>
      <WorkflowTimeline stages={workflowStages} />
    </section>
  );
}
