type ComplexityPanelProps = {
  best: string;
  average: string;
  worst: string;
  space: string;
  explanation: string;
};

export function ComplexityPanel({ best, average, worst, space, explanation }: ComplexityPanelProps): JSX.Element {
  return (
    <section className="section-card" aria-labelledby="complexity-heading">
      <h3 id="complexity-heading">Time Complexity</h3>
      <div className="complexity-grid">
        <p>
          <strong>Best:</strong> {best}
        </p>
        <p>
          <strong>Average:</strong> {average}
        </p>
        <p>
          <strong>Worst:</strong> {worst}
        </p>
        <p>
          <strong>Space:</strong> {space}
        </p>
      </div>
      <p className="complexity-explanation">{explanation}</p>
    </section>
  );
}
