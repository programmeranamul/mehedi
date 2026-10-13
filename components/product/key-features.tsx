import {
  Battery,
  Camera,
  Clock3,
  Cpu,
  Plus,
  Smartphone,
  Wifi,
} from "lucide-react";
import React from "react";

function KeyFeatures() {
  const features = [
    ["Display", "6.5” Super AMOLED", Smartphone],
    ["Battery", "5000mAh", Battery],
    ["RAM", "4GB", Smartphone],
    ["Charger", "25W Fast Charging", Plus],
    ["Storage", "128GB", Smartphone],
    ["Processor", "MediaTek Helio G99", Cpu],
    ["Rear Camera", "50MP + 5MP + 2MP", Camera],
    ["Network", "4G", Wifi],
    ["Front Camera", "13MP", Camera],
    ["OS", "Android 14, One UI 6", Clock3],
  ];
  return (
    <>
      <section className="mt-5 rounded-xl border bg-card p-4 md:p-6">
        <h2 className="text-base font-semibold">Key Features</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {features.map(([label, value, Icon]) => (
            <div
              key={label as string}
              className="flex min-w-0 items-center gap-2 text-[12px] text-muted-foreground"
            >
              <Icon
                className="size-4 shrink-0 text-foreground/70"
                strokeWidth={1.7}
              />
              <span>
                <b className="font-medium text-foreground">
                  {label as string}:
                </b>{" "}
                {value as string}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default KeyFeatures;
