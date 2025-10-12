// app/forgot-password/page.tsx

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
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center bg-background ">
      <Card className="w-full min-w-[20rem] sm:min-w-sm rounded-xl border border-border shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">
            Reset your password
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter your email to receive a password reset link.
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <form className="space-y-4">
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

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-sm text-muted-foreground text-center flex-col gap-2">
          <Link
            href="/login"
            className="text-primary underline underline-offset-4"
          >
            Back to Sign In
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
