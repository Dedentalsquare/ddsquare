import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  ScanSearch,
  Smile,
  Sparkles,
  Stethoscope,
  Workflow,
  ShieldCheck,
  CalendarDays,
  Microscope,
  Brain,
} from "lucide-react";

export const metadata = {
  title: "Dental Insights & Resources | De Dental Square",
  description: "Expert perspectives on clinical excellence, surgical precision, and restorative dentistry.",
};

const categories = [
  "All Articles",
  "Clinical Excellence",
  "Dental Care Tips",
  "Orthodontics",
  "Smile Makeovers",
];

const featuredStory = {
  category: "Dental Care Tips",
  date: "April 24, 2026",
  title: "The Complete Guide to Post-Implant Care",
  description:
    "Ensuring the longevity of your dental implants requires a dedicated maintenance routine. Learn the clinical best practices for post-surgical hygiene and long-term structural care from our lead surgeons.",
};

const articles = [
  {
    category: "Diagnosis",
    date: "May 12, 2026",
    title: "5 Signs You Might Need a Root Canal",
    description:
      "Understanding the subtle symptoms of endodontic distress and when to seek immediate clinical intervention.",
    gradient: "from-[#0f1a2f] via-[#27465a] to-[#9d6636]",
    accent: "bg-[#f1bb73]",
    Icon: ScanSearch,
  },
  {
    category: "Aesthetics",
    date: "May 08, 2026",
    title: "How Smile Makeovers Can Boost Confidence",
    description:
      "Exploring the psychological benefits of restorative aesthetic dentistry and the science behind a perfect smile.",
    gradient: "from-[#f6c1b8] via-[#f7d8c9] to-[#ffe8da]",
    accent: "bg-[#be5463]",
    Icon: Smile,
  },
  {
    category: "Hygiene",
    date: "April 30, 2026",
    title: "Daily Habits for a Cavity-Free Life",
    description:
      "Clinical advice on maintaining oral flora and preventing enamel erosion through refined daily hygiene protocols.",
    gradient: "from-[#5fb0d1] via-[#bce7ee] to-[#effcfb]",
    accent: "bg-[#f2fbfd]",
    Icon: ShieldCheck,
  },
  {
    category: "Innovation",
    date: "April 15, 2026",
    title: "The Future of 3D Dental Printing",
    description:
      "How additive manufacturing is revolutionizing the speed and precision of customized dental prosthetics.",
    gradient: "from-[#0d1620] via-[#334957] to-[#c5d2d7]",
    accent: "bg-[#dfe7eb]",
    Icon: Workflow,
  },
  {
    category: "Pediatrics",
    date: "April 02, 2026",
    title: "Early Orthodontics: When to Start?",
    description:
      "Determining the optimal window for pediatric alignment assessments to ensure healthy jaw development.",
    gradient: "from-[#caeef6] via-[#eafcff] to-[#f7ffff]",
    accent: "bg-[#6eb7c8]",
    Icon: Brain,
  },
  {
    category: "Precision",
    date: "March 28, 2026",
    title: "Minimally Invasive Techniques",
    description:
      "The shift toward conservative dentistry using magnification and laser technology for superior patient comfort.",
    gradient: "from-[#07151b] via-[#213944] to-[#8d9aa0]",
    accent: "bg-[#d4dcdf]",
    Icon: Microscope,
  },
];

function ArticleArtwork({ article, large = false }) {
  const Icon = article.Icon;

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-linear-to-br ${article.gradient}`}
      style={{ minHeight: large ? 320 : 178 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,16,20,0.28),transparent_40%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/28 to-transparent" />
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
        <span className={`h-2 w-2 rounded-full ${article.accent}`} />
        {article.category}
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white/90">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">Clinical note</p>
          <p className="text-sm font-medium">De Dental Square</p>
        </div>
      </div>
      {!large ? (
        <div className="absolute right-4 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 blur-[1px]" />
      ) : (
        <>
          <div className="absolute right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-white/15 bg-white/8 blur-[1px]" />
          <div className="absolute right-20 top-12 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-[#edf4f6]/90 text-primary shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <span className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] leading-tight">
              Clinical
              <br />
              Precision
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function InsightsPage() {
  const topStories = articles.slice(0, 3);
  const bottomStories = articles.slice(3);

  return (
    <div className="bg-background text-foreground">
      <section className="bg-primary-container text-primary-foreground border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-16 lg:py-20">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary-foreground/55">
            Clinical Prestige Journal
          </p>
          <h1 className="text-4xl leading-tight text-balance sm:text-5xl lg:text-[48px]">
            Dental Insights &amp; Resources
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-primary-foreground/72 sm:text-base lg:text-lg">
            Expert perspectives on clinical excellence, surgical precision, and the future of restorative dentistry.
          </p>
        </div>
      </section>

      <section className="border-b border-border/70 bg-[#eaf8fb]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 py-6 sm:px-6 lg:px-16 lg:py-8">
          {categories.map((category, index) => {
            const active = index === 0;

            return (
              <button
                key={category}
                type="button"
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(0,16,20,0.12)]"
                    : "border-border/80 bg-white text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-[#eaf8fb] px-4 py-8 sm:px-6 lg:px-16 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-0 overflow-hidden border border-border/60 bg-white shadow-[0_20px_50px_rgba(0,16,20,0.05)] lg:grid-cols-[1.05fr_0.95fr]" id="featured">
            <div className="min-h-70 lg:min-h-105">
              <div className="relative flex h-full items-center justify-center bg-linear-to-br from-[#09131d] via-[#0f2133] to-[#731c2e] p-10">
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#ff5a8b]/25 to-transparent" />
                <div className="relative flex h-40 w-24 items-end justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,#f3c98d_0%,#f0b977_38%,#c3cbd0_39%,#b0b8bc_100%)] shadow-[0_35px_60px_rgba(0,0,0,0.25)]">
                  <div className="absolute top-0 h-12 w-24 rounded-t-[999px] bg-[linear-gradient(180deg,#fff4dc_0%,#f2c07c_100%)]" />
                  <div className="absolute top-8 h-4 w-20 rounded-[999px] bg-[#a96f3a]" />
                  <div className="absolute top-12 h-2 w-22 rounded-[999px] bg-[#e8d6be]" />
                  <div className="absolute bottom-0 h-28 w-4 rounded-t-[999px] bg-[linear-gradient(180deg,#fafafa_0%,#9faab0_35%,#6e787e_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]" />
                  <div className="absolute bottom-2 h-24 w-10 rounded-[999px] border border-white/18 bg-[linear-gradient(180deg,#dfe7ea_0%,#9da9af_100%)]" />
                  <div className="absolute bottom-6 h-16 w-12 rounded-[999px] border border-white/20 bg-[linear-gradient(180deg,#f0f5f7_0%,#b9c4c9_100%)]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span className="rounded-full bg-[#e9f5f7] px-3 py-1 text-primary">{featuredStory.category}</span>
                <span>{featuredStory.date}</span>
              </div>
              <h2 className="max-w-lg text-3xl leading-tight text-balance sm:text-4xl lg:text-[32px]">
                {featuredStory.title}
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                {featuredStory.description}
              </p>
              <Link
                href="#newsletter"
                className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-primary/70"
              >
                Read full article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {topStories.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden border border-border/60 bg-white shadow-[0_16px_30px_rgba(0,16,20,0.04)] transition-transform duration-300 hover:-translate-y-1"
              >
                <ArticleArtwork article={article} />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl leading-tight text-balance">{article.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{article.description}</p>
                  <Link
                    href="#newsletter"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/70"
                  >
                    Read more
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bottomStories.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden border border-border/60 bg-white shadow-[0_16px_30px_rgba(0,16,20,0.04)] transition-transform duration-300 hover:-translate-y-1"
              >
                <ArticleArtwork article={article} />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl leading-tight text-balance">{article.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{article.description}</p>
                  <Link
                    href="#newsletter"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/70"
                  >
                    Read more
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-[#dff1f5] px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-border/60 bg-[#edfdfd] px-6 py-12 text-center shadow-[0_20px_50px_rgba(0,16,20,0.05)] sm:px-10 lg:px-16">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white text-primary shadow-sm">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="mt-6 text-3xl leading-tight text-balance sm:text-4xl lg:text-[32px]">
            Stay Updated with Clinical Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Receive monthly clinical updates, case studies, and advanced dental care resources directly in your inbox.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="h-12 flex-1 border border-border/70 bg-white px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 text-[11px] text-muted-foreground">
            Respecting your privacy. Opt-out at any time.
          </p>
        </div>
      </section>

      <section className="bg-[#edfdfd] px-4 pb-16 sm:px-6 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-border/60 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(0,16,20,0.04)] sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">De Dental Square</p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                Clinical Prestige Excellence. Bridging surgical precision and premium hospitality.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Quick Links</h3>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <Link href="/" className="block transition-colors hover:text-primary">
                  Treatments
                </Link>
                <Link href="/services" className="block transition-colors hover:text-primary">
                  Clinicians
                </Link>
                <Link href="/insights" className="block transition-colors hover:text-primary">
                  Insights
                </Link>
                <Link href="/contact" className="block transition-colors hover:text-primary">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Legal &amp; Portal</h3>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <Link href="#" className="block transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="block transition-colors hover:text-primary">
                  Terms of Service
                </Link>
                <Link href="#" className="block transition-colors hover:text-primary">
                  Patient Portal
                </Link>
                <Link href="#" className="block transition-colors hover:text-primary">
                  Careers
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Connect</h3>
              <div className="mt-5 flex gap-3 text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-[#f8fbfc]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-[#f8fbfc]">
                  <Stethoscope className="h-4 w-4" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-[#f8fbfc]">
                  <CalendarDays className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                © 2026 De Dental Square. Clinical Prestige Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}