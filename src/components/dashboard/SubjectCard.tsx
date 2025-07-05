// components/dashboard/SubjectCard.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SubjectCardProps {
  name: string;
  progress: number;
  done: number;
  total: number;
}

export function SubjectCard({ name, progress, done, total }: SubjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {name}
          <span className="text-sm text-muted-foreground">
            {done}/{total}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} />
        <p className="text-xs text-muted-foreground mt-2">
          {progress}% complete
        </p>
      </CardContent>
    </Card>
  );
}
