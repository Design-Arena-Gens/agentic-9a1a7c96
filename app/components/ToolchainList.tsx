interface ToolchainListProps {
  tools: string[];
}

export function ToolchainList({ tools }: ToolchainListProps) {
  return (
    <div className="card">
      <div className="badge">
        <span>Toolchain</span>
      </div>
      <h3>Stack-in-the-box</h3>
      <div className="scroll-area" role="list">
        {tools.map((tool) => (
          <p key={tool} role="listitem">
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
