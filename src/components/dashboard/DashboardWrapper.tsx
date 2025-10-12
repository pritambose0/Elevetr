"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import { Book, BarChart, Flame, Target } from "lucide-react";

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
  //   { name: "Web Development", progress: 75, total: 20, done: 15 },
  //   { name: "DSA (C++)", progress: 60, total: 20, done: 12 },
  //   { name: "System Design", progress: 20, total: 10, done: 2 },
  {
    name: "Data Structures",
    progress: 75,
    total: 20,
    done: 15,
    topics: [
      {
        title: "Arrays",
        completed: false,
        notes: "Focus on sliding window",
        date: new Date(),
        timeSpent: "45m",
      },
      {
        title: "Linked Lists",
        completed: false,
        notes: "Focus on sliding window",
        date: new Date(),
        timeSpent: "45m",
      },
      {
        title: "Stacks",
        completed: false,
        notes: "Focus on sliding window",
        date: new Date(),
        timeSpent: "45m",
      },
      {
        title: "Queues",
        completed: false,
        notes: "Focus on sliding window",
        date: new Date(),
        timeSpent: "45m",
      },
    ],
  },
];

export default function DashboardPage() {
  return <Dashboard name="Pritam" statCards={statCards} subjects={subjects} />;
}
