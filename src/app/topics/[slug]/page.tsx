import Link from "next/link";
import { notFound } from "next/navigation";
import { AlgorithmAnimation } from "@/components/AlgorithmAnimation";
import { ComplexityPanel } from "@/components/ComplexityPanel";
import { PythonCodeBlock } from "@/components/PythonCodeBlock";
import { getTopicBySlug, topics } from "@/data/topics";

type TopicPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): Array<{ slug: string }> {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export default function TopicPage({ params }: TopicPageProps): JSX.Element {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Algorithm Topic</p>
        <h1>{topic.title}</h1>
        <p className="intro">{topic.briefDescription}</p>
        <Link className="back-link" href="/">
          Back to dashboard
        </Link>
      </header>

      <AlgorithmAnimation title={topic.title} steps={topic.getSteps()} />

      <section className="section-card" aria-labelledby="python-code-heading">
        <h3 id="python-code-heading">Python Code</h3>
        <PythonCodeBlock code={topic.pythonCode} />
      </section>

      <ComplexityPanel
        best={topic.complexity.best}
        average={topic.complexity.average}
        worst={topic.complexity.worst}
        space={topic.complexity.space}
        explanation={topic.complexity.explanation}
      />
    </>
  );
}
