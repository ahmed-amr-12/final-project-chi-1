
import { Bell } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full">

      {/* 🔥 Top Bar */}
      <div className="bg-[#020617] px-6 py-3 flex justify-between items-center border-b border-white/10">
        
        {/* Left */}
        <Bell className="text-gray-400" size={20} />

        {/* Right */}
        <div className="text-right">
          <p className="text-sm text-gray-400">صيدلية كير بلس</p>
          <h2 className="text-white font-bold">لوحة التحكم</h2>
        </div>

      </div>

      {/* 🔥 Bottom Bar */}
      <div className="bg-[#0b1220] px-6 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold text-white">لوحة التحكم</h1>
        <p className="text-gray-400 text-sm">
          نظرة عامة على المبيعات، المخزون، والتنبيهات
        </p>
      </div>

    </div>
  );
}

export default Navbar;