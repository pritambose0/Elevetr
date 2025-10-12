"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, BookOpen, Star } from "lucide-react";
import Link from "next/link";

const subjects = [
  { name: "Data Structures", completed: 12, total: 20 },
  { name: "Algorithms", completed: 8, total: 15 },
  { name: "System Design", completed: 3, total: 10 },
  { name: "Operating Systems", completed: 5, total: 8 },
  { name: "Networking", completed: 2, total: 6 },
  { name: "Database Systems", completed: 4, total: 9 },
];

export default function SubjectsPage() {
  return (
    <div className="flex flex-col h-full p-6 gap-6 w-full">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <BookOpen className="text-primary w-6 h-6" />
          <h1 className="text-2xl font-bold tracking-tight">Your Subjects</h1>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search subjects..."
            className="w-full sm:w-64 rounded-xl"
          />
          <Button className="gap-2 rounded-xl">
            <PlusCircle className="w-4 h-4" /> Add Subject
          </Button>
        </div>
      </div>

      <ScrollArea className="h-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => {
            const progress = Math.round(
              (subject.completed / subject.total) * 100
            );
            return (
              <Link
                key={index}
                href={`/dashboard/subjects/${subject.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <Card
                  key={index}
                  className="shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer"
                >
                  <CardHeader className="flex items-center justify-between gap-2 pb-2">
                    <CardTitle className="text-lg font-semibold truncate max-w-[80%]">
                      {subject.name}
                    </CardTitle>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      {subject.completed} of {subject.total} topics completed
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-right text-muted-foreground">
                      {progress}% done
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
