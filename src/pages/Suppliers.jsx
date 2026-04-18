export default function Suppliers() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">Suppliers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Supplier
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500">Phone</p>
          <p>+1 (555) 123-4567</p>
          <p className="mt-2 text-gray-500">Address</p>
          <p>123 Health Ave</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-gray-500">Phone</p>
          <p>+1 (555) 987-6543</p>
          <p className="mt-2 text-gray-500">Address</p>
          <p>45 Pharma Blvd</p>
        </div>
      </div>
    </div>
  );
}