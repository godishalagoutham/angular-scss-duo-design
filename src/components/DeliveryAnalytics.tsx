
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const DeliveryAnalytics = () => {
  const analytics = [
    { label: "Total", value: 1000, color: "bg-blue-500", percentage: 100 },
    { label: "Sent", value: 950, color: "bg-green-500", percentage: 95 },
    { label: "Delivered", value: 920, color: "bg-teal-500", percentage: 92 },
    { label: "Read", value: 850, color: "bg-purple-500", percentage: 85 },
    { label: "Failed", value: 30, color: "bg-red-500", percentage: 3 },
    { label: "Skipped", value: 20, color: "bg-gray-500", percentage: 2 },
  ];

  return (
    <div className="space-y-4">
      {analytics.map((stat) => (
        <div key={stat.label} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
            <span className="text-sm font-medium">{stat.label}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-24">
              <Progress value={stat.percentage} className="h-2" />
            </div>
            <span className="text-sm font-bold min-w-[3rem] text-right">{stat.value}</span>
          </div>
        </div>
      ))}
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">92%</p>
          <p className="text-sm text-gray-600">Overall Delivery Rate</p>
        </div>
      </div>
    </div>
  );
};
