"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StatCard } from "@/components/dashboard/StatCard";
import { SubjectCard } from "@/components/dashboard/SubjectCard";
import { Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface StatCardType {
  icon: React.ReactNode;
  title: string;
  value: string;
  progress?: number;
  description?: string;
}

type Topic = {
  title: string;
  completed: boolean;
  notes: string;
  date: Date | null;
  timeSpent: string;
};

interface SubjectType {
  name: string;
  progress: number;
  done: number;
  total: number;
  topics: Topic[];
}

interface DashboardProps {
  name: string;
  statCards: StatCardType[];
  subjects: SubjectType[];
}

export default function Dashboard({
  name,
  statCards,
  subjects,
}: DashboardProps) {
  const [open, setOpen] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [topics, setTopics] = useState([""]);

  const addTopicField = () => {
    setTopics([...topics, ""]);
  };

  const handleTopicChange = (index: number, value: string) => {
    const updated = [...topics];
    updated[index] = value;
    setTopics(updated);
  };

  const removeTopicField = (index: number) => {
    const updated = topics.filter((_, i) => i !== index);
    setTopics(updated);
  };

  const handleAddSubject = () => {
    // subjects.push({
    //   name: subjectName,
    //   progress: 0,
    //   total: topics.filter(Boolean).length,
    //   done: 0,
    // });
    console.log("Subject:", subjectName);
    console.log("Topics:", topics.filter(Boolean));
    setOpen(false);
    setSubjectName("");
    setTopics([""]);
  };

  return (
    <div className="p-6 md:p-10 space-y-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome back, {name}👋
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Your progress matters. Let&rsquo;s keep learning and leveling up.
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2 shadow-md">
              <Plus className="w-4 h-4" />
              Add Subject
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Subject</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject Name</Label>
                <Input
                  id="subject"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  placeholder="e.g., Operating Systems"
                />
              </div>

              <div className="space-y-2 mt-2">
                <Label>Topics</Label>
                {topics.map((topic, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Input
                      value={topic}
                      onChange={(e) => handleTopicChange(index, e.target.value)}
                      placeholder={`Topic ${index + 1}`}
                    />
                    {topics.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeTopicField(index)}
                      >
                        <X className="w-4 h-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addTopicField}
                >
                  + Add Topic
                </Button>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleAddSubject}>Save</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
            <Link
              href={`/dashboard/subjects/${subject.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={subject.name}
            >
              <SubjectCard {...subject} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
