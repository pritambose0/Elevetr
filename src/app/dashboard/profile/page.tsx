"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Pencil, Save } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Full-stack developer with passion for building scalable web apps.",
    phone: "+91 9876543210",
    location: "Kolkata, India",
    skills: ["React", "Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "ABC University",
        year: "2027 (Expected)",
      },
    ],
    socials: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://x.com/in/johndoe",
    },
  });

  const handleChange = (
    field: keyof typeof profile,
    value: any,
    subfield?: string
  ) => {
    if (subfield) {
      if (field in profile && typeof profile[field] === "object") {
        setProfile((prev) => ({
          ...prev,
          [field]: {
            ...(prev[field] as Record<string, string>),
            [subfield]: value,
          },
        }));
      } else {
        console.error(`Invalid field: ${field}`);
      }
    } else {
      if (field in profile) {
        setProfile((prev) => ({ ...prev, [field]: value }));
      } else {
        console.error(`Invalid field: ${field}`);
      }
    }
  };

  const inputClass = cn(
    "transition-all duration-300",
    isEditing && "bg-muted hover:bg-background"
  );

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-10 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold">Your Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your personal, professional, and social information here.
          </p>
        </div>
        <Button
          variant={isEditing ? "default" : "outline"}
          onClick={() => setIsEditing((prev) => !prev)}
          className="gap-2"
        >
          {isEditing ? (
            <Save className="w-4 h-4" />
          ) : (
            <Pencil className="w-4 h-4" />
          )}
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      {/* Personal Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            ["Name", "name"],
            ["Email", "email"],
            ["Phone", "phone"],
            ["Location", "location"],
          ].map(([label, field]) => (
            <div key={field}>
              <Label>{label}</Label>
              <Input
                className={inputClass}
                value={profile[field as keyof typeof profile] as string}
                disabled={!isEditing}
                onChange={(e) =>
                  handleChange(field as keyof typeof profile, e.target.value)
                }
              />
            </div>
          ))}
          <div className="col-span-2">
            <Label>Bio</Label>
            <Textarea
              className={inputClass}
              value={profile.bio}
              disabled={!isEditing}
              onChange={(e) => handleChange("bio", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            className={inputClass}
            value={profile.skills.join(", ")}
            disabled={!isEditing}
            onChange={(e) =>
              handleChange(
                "skills",
                e.target.value.split(",").map((skill) => skill.trim())
              )
            }
          />
          <p className="text-sm text-muted-foreground mt-1">
            Separate skills with commas.
          </p>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Degree</Label>
                <Input
                  className={inputClass}
                  value={edu.degree}
                  disabled={!isEditing}
                  onChange={(e) => {
                    const newEd = [...profile.education];
                    newEd[idx].degree = e.target.value;
                    handleChange("education", newEd);
                  }}
                />
              </div>
              <div>
                <Label>Institution</Label>
                <Input
                  className={inputClass}
                  value={edu.institution}
                  disabled={!isEditing}
                  onChange={(e) => {
                    const newEd = [...profile.education];
                    newEd[idx].institution = e.target.value;
                    handleChange("education", newEd);
                  }}
                />
              </div>
              <div className="col-span-2">
                <Label>Year</Label>
                <Input
                  className={inputClass}
                  value={edu.year}
                  disabled={!isEditing}
                  onChange={(e) => {
                    const newEd = [...profile.education];
                    newEd[idx].year = e.target.value;
                    handleChange("education", newEd);
                  }}
                />
              </div>
              {isEditing && (
                <Separator className="col-span-2 border-dashed my-2" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Social Profiles</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            ["GitHub", "github"],
            ["LinkedIn", "linkedin"],
            ["Twitter / X", "twitter"],
          ].map(([label, field]) => (
            <div key={field}>
              <Label>{label}</Label>
              <Input
                className={inputClass}
                value={profile.socials[field as keyof typeof profile.socials]}
                disabled={!isEditing}
                onChange={(e) => handleChange("socials", e.target.value, field)}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
