"use client";

export default function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  multiline = false,
  rightIcon = null,
  autoComplete,
  className = "",
}) {
  const hasValue = value != null && value.toString().length > 0;

  // Shared input styles. `peer` lets the floating label react to :focus state.
  const inputClass =
    "peer w-full border-0 bg-transparent pb-[20px] pt-6 text-[16px] text-black outline-none placeholder-transparent focus:ring-0";

  // Hide the native mm/dd/yyyy hint on date inputs when empty so only our floating label shows.
  // On focus or when filled, the native date text becomes visible again.
  const dateQuirkClass =
    type === "date"
      ? [
          "[&::-webkit-calendar-picker-indicator]:absolute",
          "[&::-webkit-calendar-picker-indicator]:inset-0",
          "[&::-webkit-calendar-picker-indicator]:w-full",
          "[&::-webkit-calendar-picker-indicator]:h-full",
          "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
          "[&::-webkit-calendar-picker-indicator]:opacity-0",
          !hasValue && "[&::-webkit-datetime-edit]:opacity-0",
          !hasValue && "focus:[&::-webkit-datetime-edit]:opacity-100",
        ]
          .filter(Boolean)
          .join(" ")
      : "";

  return (
    <div
      className={`relative border-b border-solid border-[#666666] focus-within:border-[#AF8F5B] ${className}`}
    >
      <div className="flex items-end justify-between gap-3">
        {multiline ? (
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            rows={1}
            placeholder={label}
            className={`${inputClass} min-h-[28px] resize-none`}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            autoComplete={autoComplete}
            placeholder={label}
            className={`${inputClass} ${dateQuirkClass}`}
          />
        )}

        {rightIcon && (
          <div className="pointer-events-none mb-[22px] shrink-0 text-[#666666]">
            {rightIcon}
          </div>
        )}
      </div>

      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 text-[16px] leading-[19.5px] text-[#666666] transition-all duration-200 ${
          hasValue
            ? "top-0 text-[12px] text-[#AF8F5B]"
            : "top-6 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#AF8F5B]"
        }`}
      >
        {label}
      </label>
    </div>
  );
}