import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <div className="p-6 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}