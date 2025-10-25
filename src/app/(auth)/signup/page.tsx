"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Navbar isLoggedIn={false} />

      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-[90%] sm:w-full max-w-sm rounded-xl border border-border shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-semibold">
              Create your account
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="h-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 cursor-pointer" />
                    ) : (
                      <Eye className="w-5 h-5 cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              {/* Google SVG */}
              <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-17.3-1.5-34-4.3-50.3H272v95.1h146.9c-6.3 33.9-25.3 62.6-53.9 81.9v68h87c51-46.9 81-116 81-194.7z"
                  fill="#4285F4"
                />
                <path
                  d="M272 544.3c72.9 0 134-24.2 178.7-65.8l-87-68c-24.2 16.2-55 25.6-91.7 25.6-70.5 0-130.2-47.5-151.5-111.3H32.6v69.9C77.1 481 167.8 544.3 272 544.3z"
                  fill="#34A853"
                />
                <path
                  d="M120.5 328.7c-10.9-32.8-10.9-68.6 0-101.4v-69.9H32.6c-42.9 84.7-42.9 185.6 0 270.3l87.9-69z"
                  fill="#FBBC05"
                />
                <path
                  d="M272 107.7c37.2-.6 70.5 13.1 96.7 38.3l72.6-72.6C406.1 24.2 344.9 0 272 0 167.8 0 77.1 63.3 32.6 153.7l87.9 69C141.8 155.2 201.5 107.7 272 107.7z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </Button>
          </CardContent>

          <CardFooter className="text-sm text-muted-foreground text-center flex-col gap-2">
            <span>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary underline underline-offset-4"
              >
                Sign in
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
