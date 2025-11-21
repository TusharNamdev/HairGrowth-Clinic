import Link from "next/link";
import { caseStudies } from "../case-data";
import { ArrowLeft } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default async function CaseDetail({ params }) {
  const { slug } = await params; // required for Next.js 14+

  const caseItem = caseStudies.find((c) => c.slug === slug);

  if (!caseItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Case not found</p>
          <Link href="/case-studies" className="text-accent hover:underline">
            Back to cases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* BACK BUTTON */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-accent mb-6"
        >
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* BEFORE / AFTER SLIDER */}
          <div className="rounded-2xl overflow-hidden bg-card/60 border border-border p-4">
            <BeforeAfterSlider
              before={caseItem.before}
              after={caseItem.after}
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>

          {/* DETAILS BLOCK */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">{caseItem.title}</h1>
            <div className="text-sm text-muted-foreground mt-2">
              {caseItem.condition} • {caseItem.age} yrs • {caseItem.duration}
            </div>

            <div className="mt-6 space-y-6 text-sm text-muted-foreground">
              <Section title="Presentation" text={caseItem.details.presentation} />
              <Section title="Assessment" text={caseItem.details.assessment} />
              <Section title="Treatment Plan" text={caseItem.details.plan} />
              <Section title="Monitoring" text={caseItem.details.monitoring} />

              <div>
                <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                <p className="text-foreground">{caseItem.outcome}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/HairGrowth/register">
                <button className="px-5 py-3 rounded-xl bg-primary text-primary-foreground">
                  Book Consultation
                </button>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, text }) {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <p>{text}</p>
    </div>
  );
}
