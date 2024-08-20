import { BarChar } from "@/components/dashboard/chart";
import AnalyticsChart from "@/components/dashboard/analytics-chart";
import DashboardCard from "@/components/dashboard/dashbaord-card";
import PostTable from "@/components/posts/post-table";
import { Folders, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
        <DashboardCard
          title="Total Posts"
          Icon={<Newspaper className="w-8 h-8" />}
          count={53}
        />
        <DashboardCard
          title="Categories"
          Icon={<Folders className="w-8 h-8" />}
          count={7}
        />
        <DashboardCard
          title="Users"
          Icon={<User className="w-8 h-8" />}
          count={100}
        />
        <DashboardCard
          title="Comments"
          Icon={<MessageCircle className="w-8 h-8" />}
          count={455}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
        <AnalyticsChart />
        <BarChar />
      </div>
      <PostTable limit={5} title="New Blog Posts" />
    </div>
  );
}
