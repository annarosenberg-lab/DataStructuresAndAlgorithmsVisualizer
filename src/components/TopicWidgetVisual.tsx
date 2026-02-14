type TopicWidgetVisualProps = {
  slug: string;
};

export function TopicWidgetVisual({ slug }: TopicWidgetVisualProps): JSX.Element {
  if (slug === "binary-search") {
    return (
      <div className="topic-visual topic-visual-binary" aria-hidden="true">
        {[24, 36, 52, 68, 84].map((height, idx) => (
          <span
            className={`mini-bar${idx === 2 ? " is-focus" : ""}${idx === 0 || idx === 4 ? " is-pointer" : ""}`}
            key={`${slug}-${height}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    );
  }

  if (slug === "linear-search") {
    return (
      <div className="topic-visual topic-visual-linear" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <span
            className={`mini-cell${idx < 3 ? " is-checked" : ""}${idx === 3 ? " is-focus" : ""}`}
            key={`${slug}-${idx}`}
          />
        ))}
      </div>
    );
  }

  if (slug === "bubble-sort") {
    return (
      <div className="topic-visual topic-visual-bubble" aria-hidden="true">
        {[74, 42, 65, 28, 52].map((height, idx) => (
          <span className={`mini-bar${idx === 0 || idx === 1 ? " is-focus" : ""}`} key={`${slug}-${height}`} style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="topic-visual topic-visual-merge" aria-hidden="true">
      <div className="merge-row split">
        {["8", "3", "7", "2"].map((item) => (
          <span key={`split-${item}`}>{item}</span>
        ))}
      </div>
      <div className="merge-row merged">
        {["2", "3", "7", "8"].map((item) => (
          <span key={`merged-${item}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
