"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Pencil } from "lucide-react";

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false);

  const [settings, setSettings] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Enthusiastic full-stack developer.",
    theme: "system",
    notifications: {
      newsletter: true,
      productUpdates: false,
    },
  });

  const handleChange = (
    field: keyof typeof settings,
    value: string | boolean | Record<string, boolean>,
    subfield?: string
  ) => {
    if (subfield) {
      setSettings((prev) => ({
        ...prev,
        [field]: {
          ...(prev[field] as Record<string, boolean>),
          [subfield]: value,
        },
      }));
    } else {
      setSettings((prev) => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-10 w-full">
      <div className="flex justify-between items-start md:items-center">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Settings</h1>
          <p className="text-muted-foreground text-lg">
            Manage your preferences and account configurations.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setIsEditing((prev) => !prev)}
          className="gap-2"
        >
          <Pencil className="w-4 h-4" />
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Theme</Label>
            <select
              disabled={!isEditing}
              className="w-full px-3 py-2 border rounded-md bg-background"
              value={settings.theme}
              onChange={(e) => handleChange("theme", e.target.value)}
            >
              <option value="system">System Default</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label>Receive Newsletter</Label>
            <Switch
              checked={settings.notifications.newsletter}
              disabled={!isEditing}
              onCheckedChange={(val) =>
                handleChange("notifications", val, "newsletter")
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Product Updates</Label>
            <Switch
              checked={settings.notifications.productUpdates}
              disabled={!isEditing}
              onCheckedChange={(val) =>
                handleChange("notifications", val, "productUpdates")
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Deleting your account is irreversible. Proceed with caution.
          </p>
          <Separator />
          <Button variant="destructive" className="w-full">
            Delete My Account
          </Button>
        </CardContent>
      </Card>

      {isEditing && (
        <div className="flex justify-end">
          <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
        </div>
      )}
    </div>
  );
}
