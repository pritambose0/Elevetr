"use client";

import { Plus, Book, Target, BarChart, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StatCard } from "@/components/dashboard/StatCard";
import { SubjectCard } from "@/components/dashboard/SubjectCard";

export default function Dashboard() {
  const statCards = [
    {
      icon: <Book className="w-5 h-5 text-primary" />,
      title: "Topics Tracked",
      value: "28",
    },
    {
      icon: <BarChart className="w-5 h-5 text-green-500" />,
      title: "Completion Rate",
      value: "68%",
      progress: 68,
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      title: "Daily Streak",
      value: "5 days",
    },
    {
      icon: <Target className="w-5 h-5 text-indigo-500" />,
      title: "Current Focus",
      value: "DSA in C++",
      description: "12 / 20 topics",
    },
  ];

  const subjects = [
    { name: "Web Development", progress: 75, total: 20, done: 15 },
    { name: "DSA (C++)", progress: 60, total: 20, done: 12 },
    { name: "System Design", progress: 20, total: 10, done: 2 },
  ];

  return (
    <div className="p-6 md:p-10 space-y-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome back, Pritam👋
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Your progress matters. Let's keep learning and leveling up.
          </p>
        </div>

        <Button size="lg" className="gap-2 shadow-md">
          <Plus className="w-4 h-4" />
          Add Subject
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      <Separator />

      {/* Subjects */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.name} {...subject} />
          ))}
        </div>
      </div>
    </div>
  );
}
