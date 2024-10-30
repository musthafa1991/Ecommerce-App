import MetricSummary from "@/components/admin-view/dashboard/MatricsSummary";
import OverviewCharts from "@/components/admin-view/dashboard/OverViewCharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Dashboard() {
  const totalSales = 15000;
  const totalOrders = 300;

  return (
    <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-1 p-6">
      {/* Metrics Summary */}
      <div className="lg:col-span-1 sm:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Metrics Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricSummary totalSales={totalSales} totalOrders={totalOrders} />
          </CardContent>
        </Card>
      </div>

      {/* Overview Charts */}
      <div className="lg:col-span-2 sm:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Overview Charts</CardTitle>
          </CardHeader>
          <CardContent>
            <OverviewCharts />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
