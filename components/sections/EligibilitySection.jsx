import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import { Check, Target } from "lucide-react";

const requirements = [
  "Applicants must be between 18 and 27 years of age within the current calendar year.",
  "Applicants must be unmarried and not pregnant at the time of application.",
  "Proficiency in English communication is mandatory.",
  "Applicants must have no criminal record, including arrests or convictions.",
  "Applicants must be in sound physical and mental health and free from contagious diseases.",
  "Applicants must agree to comply fully with all organizational policies and regulations.",
];

const districts = [
  "Dhaka",
  "Sylhet",
  "Khulna",
  "Rajshahi",
  "Rangpur",
  "Chittagong",
  "Barishal",
  "Comilla",
];

// Bangladesh map — EXACT Figma coordinates
// Map container: 291 × 400px (Figma's frame size)
const mapPieces = [
  // Rangpur (উত্তর) — BD-F
  { id: "bd-f", top: 0.37, left: 5.08, width: 112.23, height: 111.77 },

  // Rajshahi (পশ্চিম) — BD-E
  { id: "bd-e", top: 94.4, left: 0.23, width: 112.64, height: 100.45 },

  // Dhaka (কেন্দ্র) — BD-C
  { id: "bd-c", top: 83.54, left: 80.61, width: 121.73, height: 177.42 },

  // Sylhet (উত্তর-পূর্ব) — BD-G
  { id: "bd-g", top: 98.97, left: 182.26, width: 97.87, height: 83.69 },

  // Khulna (দক্ষিণ-পশ্চিম) — BD-D
  { id: "bd-d", top: 166.87, left: 34.43, width: 87.45, height: 172.26 },

  // Chittagong (দক্ষিণ-পূর্ব, সবচেয়ে বড়) — BD-B
  { id: "bd-b", top: 162.84, left: 157.83, width: 132.97, height: 236.88 },

  // Barishal (দক্ষিণ-মধ্য) — BD-A
  { id: "bd-a", top: 243.96, left: 115.68, width: 62.46, height: 85.2 },
];

// Calculate map total size (max right edge, max bottom edge)
const MAP_WIDTH = 291;   // max(left + width) across all pieces
const MAP_HEIGHT = 400;  // max(top + height) across all pieces

export default function EligibilitySection() {
  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <Container>
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-5">
            <SectionBadge>Eligibility</SectionBadge>
            <h2 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
              Who Can Apply
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[620px_minmax(0,1fr)] lg:gap-16">
            {/* Left: Requirements card */}
            <div className="rounded-[12px] border border-[#AF8F5B] bg-white p-[30px]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#AF8F5B]">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                  <h3 className="text-[20px] font-medium text-[#666666]">
                    Requirements
                  </h3>
                </div>

                <ul className="flex flex-col gap-[14px]">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Target
                        size={20}
                        strokeWidth={1.75}
                        className="mt-[2px] shrink-0 text-[#AF8F5B]"
                      />
                      <span className="text-[15px] font-medium leading-[1.5] text-[#666666] sm:text-[16px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Map + Districts */}
            <div className="relative flex flex-col items-center justify-center gap-[30px] py-5 lg:min-h-[460px]">
              {/* Background composed map - pixel-perfect from Figma */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
                style={{ width: MAP_WIDTH + "px", height: MAP_HEIGHT + "px" }}
              >
                {mapPieces.map((piece) => (
                  <img
                    key={piece.id}
                    src={"/images/bangladesh-map/" + piece.id + ".svg"}
                    alt=""
                    className="absolute"
                    style={{
                      top: piece.top + "px",
                      left: piece.left + "px",
                      width: piece.width + "px",
                      height: piece.height + "px",
                    }}
                  />
                ))}
              </div>

              {/* Overlay content */}
              <div className="relative z-10 flex flex-col items-center gap-[30px]">
                <h3 className="text-center text-[24px] font-semibold text-[#AF8F5B] sm:text-[28px] lg:text-[30px]">
                  All 64 Districts Welcome
                </h3>

                <div className="flex max-w-[415px] flex-wrap items-center justify-center gap-x-3 gap-y-5">
                  {districts.map((district) => (
                    <div
                      key={district}
                      className="inline-flex items-center justify-center rounded-[10px] border border-[#AF8F5B] bg-white/80 p-[10px] backdrop-blur-sm"
                    >
                      <span className="text-[15px] font-medium text-[#AF8F5B] sm:text-[16px]">
                        {district}
                      </span>
                    </div>
                  ))}
                  <p className="text-[15px] font-medium text-[#AF8F5B] sm:text-[16px]">
                    +56 more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}