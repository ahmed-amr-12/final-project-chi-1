import StatCard from "../components/Statcard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <StatCard title="Total Daily Sales" value="$1,240.50" color="text-blue-600" />
        <StatCard title="Low Stock Alerts" value="12" color="text-orange-500" />
        <StatCard title="Expiration Date" value="8" color="text-orange-600" />
        <StatCard title="Out-of-Stock Alerts" value="3" color="text-red-600" />
      </div>
    </div>
  );
}