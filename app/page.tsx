import Hero from "@/components/Hero";
import PromptCard from "@/components/PromptCard";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen px-8 py-16">
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <PromptCard
          title="YouTube Viral Script Generator"
          description="Craft scripts that dominate the algorithm."
          price="$7"
        />
        <PromptCard
          title="Job Interview Mind Hacker"
          description="Generate answers that get you hired."
          price="$5"
        />
        <PromptCard
          title="Startup Idea Generator"
          description="Build million-dollar ideas with 1 prompt."
          price="$10"
        />
      </section>
    </main>
  );
}
