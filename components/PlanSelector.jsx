import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "quick",
    title: "Quick Consult",
    price: 499,
    summary: "15 min video consult + basic plan",
    includes: ["Doctor review", "1 follow-up chat"],
  },
  {
    id: "standard",
    title: "Standard Care",
    price: 1499,
    summary: "30 min consult + 4-week plan",
    includes: ["Personal Rx", "2 follow-ups"],
  },
  {
    id: "comprehensive",
    title: "Comprehensive Remote",
    price: 3999,
    summary: "Detailed digital diagnosis + 3 month support",
    includes: ["AI-assisted report", "Monthly doctor reviews"],
  },
];

export default function PlanSelector({ plans: propPlans, onSelect, selectedPlan }) {
  const displayPlans = propPlans || plans;
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayPlans.map((p) => {
        const isSelected = selectedPlan === p.id;
        return (
          <div
            key={p.id}
            className={`relative bg-white rounded-2xl shadow-md border p-6 flex flex-col transition-all ${
              isSelected ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200"
            }`}
          >
            {isSelected && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
            )}

            {/* Title + Price */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <span className="text-xl font-bold">₹{p.price}</span>
            </div>

            {/* Summary */}
            <p className="text-sm text-gray-600 mt-2">{p.summary}</p>

            {/* Features */}
            <ul className="mt-4 text-sm text-gray-700 space-y-2 flex-1">
              {p.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span>✔</span> {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => onSelect(p)}
            >
              Book
            </Button>
          </div>
        );
      })}
    </div>
  );
}
