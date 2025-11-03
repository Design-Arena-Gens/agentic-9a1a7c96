import { type Insight } from '@/lib/capabilities';

interface InsightsPanelProps {
  insights: Insight[];
}

export function InsightsPanel({ insights }: InsightsPanelProps) {
  return (
    <div className="card">
      <div className="badge">
        <span>Observable Impact</span>
      </div>
      <h3>How teams benefit</h3>
      <div className="kpi">
        {insights.map((insight) => (
          <article key={insight.id} className="kpi-card">
            <h4>{insight.title}</h4>
            <strong>{insight.metric}</strong>
            <p>{insight.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
