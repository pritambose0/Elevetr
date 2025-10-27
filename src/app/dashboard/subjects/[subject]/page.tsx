"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  PlusCircle,
  Trash2,
  Pencil,
  CalendarIcon,
  Flame,
  Save,
} from "lucide-react";

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

export default function SubjectDetailsPage() {
  const subject: SubjectType = {
    name: "Data Structures",
    progress: 75,
    total: 20,
    done: 15,
    topics: [
      {
        title: "Arrays",
        completed: true,
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
        completed: true,
        notes: "Focus on sliding window",
        date: new Date(),
        timeSpent: "45m",
      },
      {
        title: "Queues",
        completed: true,
        notes: "Focus on sliding window",
        date: new Date(),
        timeSpent: "45m",
      },
    ],
  };

  const [topics, setTopics] = useState<Topic[]>(subject?.topics || []);
  const [newTitle, setNewTitle] = useState("");
  const [editingTitle, setEditingTitle] = useState(false);
  const [subjectName, setSubjectName] = useState(subject?.name);

  const addTopic = () => {
    if (!newTitle.trim()) return;
    const newTopic: Topic = {
      title: newTitle.trim(),
      completed: false,
      notes: "",
      date: null,
      timeSpent: "",
    };
    setTopics([newTopic, ...topics]);
    setNewTitle("");
  };

  const toggleComplete = (index: number) => {
    const updated = [...topics];
    updated[index].completed = !updated[index].completed;
    setTopics(updated);
  };

  const deleteTopic = (index: number) => {
    const updated = [...topics];
    updated.splice(index, 1);
    setTopics(updated);
  };

  const updateDate = (index: number, date: Date) => {
    const updated = [...topics];
    updated[index].date = date;
    setTopics(updated);
  };

  const completedCount = topics?.filter((t) => t.completed).length;
  const progress =
    topics?.length > 0
      ? Math.round((completedCount / topics?.length) * 100)
      : 0;

  const handleSubjectEdit = () => setEditingTitle(true);
  const handleSubjectSave = () => setEditingTitle(false);
  const handleSubjectDelete = () => {
    const confirmDelete = confirm(`Delete subject "${subjectName}"?`);
    if (confirmDelete) {
      // TODO: navigate away or reset state
      alert("Subject deleted");
    }
  };

  return (
    <div className="flex flex-col h-full p-6 gap-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        {editingTitle ? (
          <div className="flex items-center gap-2 w-full max-w-md">
            <Input
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              className="text-2xl font-bold"
            />
            <Button variant="outline" onClick={handleSubjectSave}>
              <Save className="w-4 h-4 mr-1" /> Save
            </Button>
          </div>
        ) : (
          <h1 className="text-3xl font-bold flex items-center gap-2">
            📘 {subjectName}
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={handleSubjectEdit}
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </h1>
        )}

        <Button
          variant="destructive"
          size="icon"
          onClick={handleSubjectDelete}
          title="Delete Subject"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Progress */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="h-4" />
          <p className="text-sm mt-2 text-muted-foreground">
            {completedCount}/{topics?.length} topics completed ({progress}%)
          </p>
        </CardContent>
      </Card>

      {/* Add Topic */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="New Topic Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTopic()}
        />
        <Button onClick={addTopic}>
          <PlusCircle className="w-4 h-4 mr-2" /> Add Topic
        </Button>
      </div>

      {/* Topics List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topics?.map((topic, idx) => (
          <Card key={idx} className="rounded-xl shadow-sm">
            <CardHeader className="flex justify-between items-start">
              <div className="flex gap-2 items-center">
                <Checkbox
                  checked={topic.completed}
                  onCheckedChange={() => toggleComplete(idx)}
                />
                <h3
                  className={`font-semibold ${
                    topic.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {topic.title}
                </h3>
              </div>
              {topic.timeSpent && (
                <Badge variant="outline">{topic.timeSpent}</Badge>
              )}
            </CardHeader>
            <CardContent>
              {topic.notes && (
                <p className="text-sm italic text-muted-foreground mb-2">
                  📝 {topic.notes}
                </p>
              )}

              <div className="flex items-center justify-between">
                {/* Target Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex gap-1 items-center"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      <span className="text-xs">
                        {topic.date ? format(topic.date, "MMM dd") : "Set Date"}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-2">
                    <Calendar
                      mode="single"
                      selected={topic.date || undefined}
                      onSelect={(date) => updateDate(idx, date!)}
                    />
                  </PopoverContent>
                </Popover>

                {/* Delete */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTopic(idx)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Streak Heatmap Placeholder */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Flame className="text-orange-500" /> Streak
        </h2>
        <p className="text-sm text-muted-foreground">
          Coming soon: GitHub-style calendar heatmap
        </p>
      </div>
    </div>
  );
}
