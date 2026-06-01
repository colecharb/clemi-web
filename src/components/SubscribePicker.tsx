import { useState } from "react";

type PlanId = "annual" | "seasonal";

const PLANS = [
  {
    id: "annual",
    label: "Annual",
    price: "$48.75",
    cadence: "/season",
    blurb: "Billed annually",
  },
  {
    id: "seasonal",
    label: "Seasonal",
    price: "$55",
    cadence: "/season",
    blurb: "Billed quarterly",
  },
] as const satisfies readonly { id: PlanId; [key: string]: string }[];

const SubscribePicker = () => {
  const [plan, setPlan] = useState<PlanId>("annual");

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {PLANS.map((p) => {
          const isSelected = plan === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setPlan(p.id)}
              aria-pressed={isSelected}
              className={`flex-1 flex flex-col items-center text-center gap-1 p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "border-[--text] bg-olive/15 font-bold scale-[1.03]"
                  : "border-transparent opacity-60 hover:opacity-80 scale-100"
              }`}
            >
              <span className="text-2xl font-bold">{p.label}</span>
              <span className="text-xl font-bold">
                {p.price}
                <span className="text-base font-normal opacity-80">
                  {p.cadence}
                </span>
              </span>
              <span className="text-sm font-normal opacity-80">{p.blurb}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        // TODO: wire up Stripe checkout link based on `plan`
        onClick={() => {}}
        className="w-64 bg-[#fd7e01] text-[--background] rounded-xl font-bold py-3 hover:opacity-90 transition-opacity cursor-pointer"
      >
        Subscribe {plan === "annual" ? "Annually" : "Seasonally"}
      </button>
    </div>
  );
};

export default SubscribePicker;
