import { Battery, Camera, ChevronRight, CircleHelp, Cpu, Info, Smartphone, Wifi } from "lucide-react";

const specificationGroups = [
  [
    "Display",
    "Screen & Display",
    Smartphone,
    [
      "6.5” Super AMOLED",
      "1080 x 2340 pixels, 19.5:9 ratio (~396 ppi density)",
      "90Hz Refresh Rate, 800 nits (HBM)",
    ],
  ],
  [
    "Performance",
    "CPU & OS",
    Cpu,
    [
      "MediaTek Helio G99 (6nm)",
      "Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
      "Android 14, One UI 6",
    ],
  ],
  [
    "Memory",
    "RAM & Storage",
    Smartphone,
    ["4GB RAM", "128GB Internal Storage", "microSDXC (dedicated slot)"],
  ],
  [
    "Camera",
    "Photo & Video",
    Camera,
    [
      "Rear Camera: 50MP (wide) + 5MP (ultrawide) + 2MP (macro)",
      "Front Camera: 13MP (wide)",
      "1080p@30fps (video)",
    ],
  ],
  [
    "Battery",
    "Power & Charging",
    Battery,
    ["5000mAh (typical)", "25W Fast Charging", "USB Type-C 2.0"],
  ],
  [
    "Network",
    "SIM & Connectivity",
    Wifi,
    [
      "4G LTE",
      "Dual SIM (Nano-SIM, dual stand-by)",
      "Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 5.3, GPS",
    ],
  ],
  [
    "Design",
    "Build & Dimension",
    Smartphone,
    [
      "Dimensions: 160.1 x 76.8 x 8.4 mm",
      "Weight: 200 g",
      "Glass front, Plastic back, Plastic frame",
    ],
  ],
  [
    "Sensors",
    "Sensors & Security",
    CircleHelp,
    ["Side-mounted fingerprint, Accelerometer", "Proximity, Compass"],
  ],
] as const;


export default function SpecificationSection() {
  return (
    <section className="mt-5 overflow-hidden rounded-xl border bg-card">
      <div className="flex items-center gap-3 border-b px-4 py-4 md:px-6">
        <Info className="size-5" />
        <h2 className="text-base font-semibold">Full Specifications</h2>
      </div>
      {specificationGroups.map(([name, subtitle, Icon, values]) => (
        <div
          key={name}
          className="grid grid-cols-[30px_145px_minmax(0,1fr)_18px] gap-2 border-b px-4 py-4 last:border-b-0 md:grid-cols-[34px_190px_minmax(0,1fr)_20px] md:px-6"
        >
          <Icon
            className="mt-1 size-5 text-muted-foreground"
            strokeWidth={1.7}
          />
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          </div>
          <div className="space-y-1 text-sm leading-5 text-foreground">
            {values.map((value) => (
              <p key={value}>{value}</p>
            ))}
          </div>
          <ChevronRight className="mt-1 size-4 justify-self-end text-muted-foreground" />
        </div>
      ))}
    </section>
  );
}