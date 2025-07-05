import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChartBig, Clock, LineChart, Star } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-8 w-full">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Progress Overview</h1>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <Card className="shadow-xl hover:shadow-2xl transition duration-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-medium">
              Total Subjects
            </CardTitle>
            <BarChartBig className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Tracked actively</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition duration-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-medium">
              Topics Completed
            </CardTitle>
            <Star className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">142</p>
            <p className="text-sm text-muted-foreground">Out of 200</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition duration-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-medium">
              Avg. Daily Progress
            </CardTitle>
            <Clock className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3 topics</p>
            <p className="text-sm text-muted-foreground">Consistent growth</p>
          </CardContent>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition duration-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-medium">
              Overall Progress
            </CardTitle>
            <LineChart className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <Progress value={71} className="h-2 bg-muted/40" />
            <p className="text-sm text-muted-foreground mt-2">71% completed</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">Detailed Breakdown</h2>
        <p className="text-muted-foreground text-sm">
          Coming soon: interactive charts and timeline views for deeper insight.
        </p>
      </div>
    </div>
  );
}
