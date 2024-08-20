import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
interface DashbaordCardProps {
  title: string;
  count: number;
  Icon?: React.ReactElement<LucideIcon>;
}

function DashboardCard({ Icon, title, count }: DashbaordCardProps) {
  return (
    <div>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
          {Icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl pl-1 font-bold"> {count} </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardCard;
