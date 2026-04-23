export default function SectionBadge({ children }) {
  return (
    <div className="inline-flex items-center justify-center rounded-[10px] bg-[#AF8F5B] px-[30px] py-[11px] text-[12px] font-normal uppercase leading-4 tracking-[1.2px] text-white">
      {children}
    </div>
  );
}