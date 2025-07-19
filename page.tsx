
// pages/index.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Terminal, LucideZap } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

export default function NeuroNexaLanding() {
  return (
    <>
      <Head>
        <title>NeuroNexa – Where Thought Becomes Command</title>
        <meta name="description" content="Unleash 100+ elite prompts to dominate AI creation, coding, and power communication. NeuroNexa – Forge Your Mind." />
        <meta property="og:title" content="NeuroNexa" />
        <meta property="og:description" content="Elite prompt arsenal for AI mastery, KDP books, and command-line mind control." />
        <meta property="og:image" content="/neuronexa-logo.png" />
        <meta property="og:url" content="https://neuronexa.replit.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white px-6 py-12 font-sans bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900 animate-pulse">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/neuronexa-logo.png" 
              alt="NeuroNexa Logo" 
              width={120} 
              height={120} 
            />
          </div>
          <h1 className="text-5xl font-bold text-blue-500 mb-4 tracking-wide">NEURONEXA</h1>
          <p className="text-lg text-gray-300 mb-8">Where Thought Becomes Command</p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg rounded-xl shadow-xl">Download Prompt Arsenal</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          <Card className="bg-gray-900 border border-blue-500">
            <CardContent className="p-6">
              <BrainCircuit className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">100+ Elite Prompts</h3>
              <p className="text-gray-400">Master AI with black-ops level prompts in psychology, coding, storytelling, and automation.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-blue-500">
            <CardContent className="p-6">
              <Terminal className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Command-Line Power</h3>
              <p className="text-gray-400">Speak to AI like a god. Don’t request — command. NeuroNexa turns prompts into power.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border border-blue-500">
            <CardContent className="p-6">
              <LucideZap className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Launch-Ready Tools</h3>
              <p className="text-gray-400">Use these prompts to build AI businesses, write KDP books, or dominate freelance gigs fast.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">NeuroNexa Prompt Arsenal</h2>
          <p className="text-gray-400 mb-6">Includes 100+ dark, strategic, and monetizable prompts. For creators, coders, and commanders of the AI age.</p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg rounded-xl shadow-lg">Get It Now – ₹299</Button>
        </div>

        <footer className="text-center text-gray-600 text-sm mt-16">© 2025 NeuroNexa. Forge Your Mind.</footer>
      </div>
    </>
  );
}
