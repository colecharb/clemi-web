import { useState } from "react";

type FormatId = "print" | "digital";
type PlanId = "annual" | "seasonal";

const FORMATS = [
  { id: "print", label: "Print + Digital" },
  { id: "digital", label: "Digital Only" },
] as const satisfies readonly { id: FormatId; label: string }[];

const PLAN_META = [
  {
    id: "annual",
    label: "Annual",
    cadence: "/season",
    blurb: "Billed annually",
  },
  {
    id: "seasonal",
    label: "Seasonal",
    cadence: "/season",
    blurb: "Billed quarterly",
  },
] as const satisfies readonly { id: PlanId; [key: string]: string }[];

// Price shown per season for each format + plan combination.
const PRICES: Record<FormatId, Record<PlanId, string>> = {
  print: { annual: "$48.75", seasonal: "$55" },
  digital: { annual: "$24.75", seasonal: "$28" },
};

// Stripe checkout links for each format + plan combination.
const CHECKOUT_LINKS: Record<FormatId, Record<PlanId, string>> = {
  print: {
    annual: "https://buy.stripe.com/cNi3cu4K7d2N8Uk2uJ7Zu02",
    seasonal: "https://buy.stripe.com/4gMaEW1xV4wh9Yo0mB7Zu03",
  },
  digital: {
    annual: "https://buy.stripe.com/aFaaEW6Sf5Al4E4glz7Zu06",
    seasonal: "https://buy.stripe.com/fZu9ASdgDbYJ5I8b1f7Zu07",
  },
};

const SubscribePicker = () => {
  const [format, setFormat] = useState<FormatId>("print");
  const [plan, setPlan] = useState<PlanId>("annual");

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto">
      <div className="inline-flex gap-2 rounded-full p-1">
        {FORMATS.map((f) => {
          const isSelected = format === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFormat(f.id)}
              aria-pressed={isSelected}
              className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "border-[--text] scale-[1.03]"
                  : "border-transparent opacity-60 hover:opacity-80 scale-100"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {PLAN_META.map((p) => {
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
                {PRICES[format][p.id]}
                <span className="text-base font-normal opacity-80">
                  {p.cadence}
                </span>
              </span>
              <span className="text-sm font-normal opacity-80">{p.blurb}</span>
            </button>
          );
        })}
      </div>

      <a
        href={CHECKOUT_LINKS[format][plan]}
        target="_blank"
        rel="noopener noreferrer"
        className="w-64 text-center bg-[#fd7e01] text-[--background] rounded-xl font-bold py-3 hover:opacity-90 transition-opacity cursor-pointer !no-underline"
      >
        Subscribe {plan === "annual" ? "Annually" : "Seasonally"}
      </a>

      {/* always rendered (toggled with visibility) so page height doesn't shift between print/digital */}
      <p
        aria-hidden={format !== "print"}
        className={`text-sm text-center opacity-70 mb-0 ${
          format === "print" ? "" : "invisible"
        }`}
      >
        <strong>Founding Subscriber:</strong> The first 10 orders will receive a
        signed first edition, stickers, Animal Guide portrait for your wall, and
        access to "Founding Subscribers" community email. Early-bird closes June
        30, 2026.
      </p>
    </div>
  );
};

export default SubscribePicker;
