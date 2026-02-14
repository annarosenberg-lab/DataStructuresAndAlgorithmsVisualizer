import { TopicCard } from "@/components/TopicCard";
import { topics } from "@/data/topics";

export default function HomePage(): JSX.Element {
  return (
    <>
      <header className="page-header">
        <h1>Algorithm Learning Dashboard</h1>
        <p className="intro">Pick a topic to view a concise explanation, visual animation, Python code, and complexity breakdown.</p>
      </header>

      <section className="topic-grid" aria-label="Algorithm topics">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} title={topic.title} subtitle={topic.subtitle} href={`/topics/${topic.slug}`} slug={topic.slug} />
        ))}
      </section>
    </>
  );
}
