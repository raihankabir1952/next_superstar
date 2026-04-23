export default function PrimaryButton({
  children,
  className = "",
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      className={`inline-flex h-[48px] items-center justify-center rounded-[12px] bg-[#AF8F5B] px-6 text-[16px] font-semibold text-white transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}