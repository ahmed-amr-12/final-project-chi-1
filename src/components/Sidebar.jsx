import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Medicines", path: "/medicines" },
    { name: "Daily Sales", path: "/sales" },
    { name: "Supplier", path: "/suppliers" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-white shadow-md flex flex-col justify-between">
      
      <div>
        <h1 className="text-xl font-bold p-4 text-blue-600">
          PharmaCare
        </h1>

        <ul className="space-y-2 px-2">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block p-3 rounded-lg ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button className="p-4 text-left hover:bg-gray-100">
        Logout
      </button>
    </div>
  );
}