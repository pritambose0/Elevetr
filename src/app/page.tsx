import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Book,
  BarChart3,
  Layers,
  User,
  CheckCircle,
  BookA,
  Users,
  BookOpen,
  GraduationCap,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Subject & Topic Breakdown",
      description:
        "Structure your learning into subjects and digestible topics.",
      icon: <BookA className="w-6 h-6" />,
    },
    {
      title: "Visual Progress Charts",
      description: "Stay motivated by seeing your topic completion rates.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Daily Status Updates",
      description: "Label topics as Not Started, In Progress, or Done.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Minimal UI",
      description:
        "A clean, clutter-free interface to help you focus on learning.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Private by Design",
      description:
        "Your progress is yours alone. No public profiles or pressure.",
      icon: <User className="w-6 h-6" />,
    },
    {
      title: "Mobile-Friendly",
      description: "Use it from your phone, tablet, or desktop seamlessly.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const howItWorks = [
    {
      title: "Choose Subjects",
      description:
        "Add subjects like DSA, Web Dev, or SQL to structure your learning.",
      icon: <Book className="w-6 h-6" />,
    },
    {
      title: "Break into Topics",
      description:
        "List out topics under each subject, from beginner to advanced.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Track Your Progress",
      description: "Mark topics as Not Started, In Progress, or Done anytime.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Visualize & Improve",
      description:
        "View your progress with charts and stay consistent every day.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  const whoFor = [
    {
      title: "🎓 Students",
      description:
        "Tackle your semester topics, one by one, without losing momentum.",
    },
    {
      title: "🧠 Self-Taught Learners",
      description:
        "Track your YouTube courses, Udemy classes, and topic checklists easily.",
    },
    {
      title: "👨‍💻 Aspiring Developers",
      description:
        "Stay consistent in mastering DSA, frontend/backend, or system design.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav M.",
      quote:
        "I finally stopped losing track of what I was learning. The dashboard keeps me on fire every day!",
    },
    {
      name: "Sanya R.",
      quote: "It’s so satisfying to mark topics as done. Love the clean UI!",
    },
    {
      name: "Raj D.",
      quote:
        "Perfect for preparing for interviews — I wish I had this earlier.",
    },
    {
      name: "Priya S.",
      quote: "It’s my daily accountability tool now. No more scattered notes.",
    },
  ];
  return (
    <main className="min-h-dvh text-foreground bg-background">
      {/* NAVBAR */}
      <Navbar isLoggedIn={true} />

      {/* Hero */}
      <section className="relative py-20 sm:py-32 bg-muted/5 text-center overflow-hidden">
        {/* Background Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,theme(colors.muted.DEFAULT)_1px),linear-gradient(to_bottom,transparent_1px,theme(colors.muted.DEFAULT)_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-8">
          <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
            ⚡ Built for Focused Learning
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            One tool to{" "}
            <span className="underline decoration-primary">track</span> your
            learning <br />
            and{" "}
            <span className="underline decoration-primary">
              stay consistent
            </span>{" "}
            daily
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your subjects, break them into topics, track progress visually,
            and stay accountable with a beautifully minimal learning dashboard.
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-7 py-6 text-base rounded-md shadow-md"
              >
                Start for Free
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="px-7 py-6 text-base rounded-md shadow-md"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Partner Icons */}
          <div className="pt-10">
            <p className="text-sm text-muted-foreground mb-2">
              Trusted by learners from top universities and bootcamps
            </p>
            <div className="flex justify-center gap-6 opacity-70">
              <GraduationCap className="w-5 h-5" />
              <BookOpen className="w-5 h-5" />
              <Rocket className="w-5 h-5" />
              <Users className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <h2 className="text-3xl font-bold">Lost in Your Learning?</h2>
          <p className="text-muted-foreground text-lg">
            No more guessing what to do next. Organize your knowledge, track
            your growth, and show up every day with clarity.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Powerful Features, Clean Interface
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="hover:shadow-xl transition border border-border group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-primary group-hover:scale-110 transition">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-6xl mx-auto px-4 space-y-14">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Just 4 simple steps to build clarity, consistency, and confidence
              in your learning.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {howItWorks.map((step, i) => (
              <Card key={i} className="relative overflow-visible group">
                <CardContent className="p-6 pt-10 space-y-3">
                  <div className="absolute -top-5 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold shadow-md group-hover:scale-110 transition">
                    {i + 1}
                  </div>
                  <div className="text-primary">{step.icon}</div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It’s For */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-6xl mx-auto px-4 space-y-10 text-center">
          <h2 className="text-4xl font-bold">Made for Serious Learners</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {whoFor.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 text-center bg-gradient-to-tr from-muted/10 to-background">
        <div className="max-w-4xl mx-auto space-y-10 px-4">
          <h2 className="text-4xl font-bold">What Learners Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-3">
                  <p className="text-muted-foreground italic">"{t.quote}"</p>
                  <p className="font-semibold text-sm text-primary">
                    — {t.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 text-center bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-3xl mx-auto space-y-8 px-4">
          <h2 className="text-4xl font-bold">Your Growth Starts Here</h2>
          <p className="text-lg text-muted-foreground">
            Don’t just learn — track it, complete it, and feel the momentum.
          </p>
          <Link href="/dashboard">
            <Button size="lg">Start Tracking — Free Forever</Button>
          </Link>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Elevetr. All rights reserved.
      </footer>
    </main>
  );
}
