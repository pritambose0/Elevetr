import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  progress?: number;
  description?: string;
}

export function StatCard({
  icon,
  title,
  value,
  progress,
  description,
}: StatCardProps) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {progress !== undefined && (
          <div className="mt-2">
            <Progress value={progress} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
