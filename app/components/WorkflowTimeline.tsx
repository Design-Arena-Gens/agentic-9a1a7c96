import { type WorkflowStage } from '@/lib/capabilities';

interface WorkflowTimelineProps {
  stages: WorkflowStage[];
}

export function WorkflowTimeline({ stages }: WorkflowTimelineProps) {
  return (
    <div className="timeline" role="list">
      {stages.map((stage) => (
        <article key={stage.id} className="timeline-item" role="listitem" aria-labelledby={`${stage.id}-stage`}>
          <span className="timeline-bullet" aria-hidden />
          <h4 id={`${stage.id}-stage`}>{stage.stage}</h4>
          <p>{stage.outcome}</p>
          <div className="tag-list" role="list">
            {stage.activities.map((activity) => (
              <span key={activity} className="tag" role="listitem">
                {activity}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
