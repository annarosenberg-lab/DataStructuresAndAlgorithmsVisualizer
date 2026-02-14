import Link from "next/link";
import { TopicWidgetVisual } from "@/components/TopicWidgetVisual";

type TopicCardProps = {
  title: string;
  subtitle: string;
  href: string;
  slug: string;
};

export function TopicCard({ title, subtitle, href, slug }: TopicCardProps): JSX.Element {
  return (
    <Link className="topic-card" href={href} aria-label={`Open topic ${title}`}>
      <div className="topic-card-inner">
        <TopicWidgetVisual slug={slug} />
        <div className="topic-card-copy">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
