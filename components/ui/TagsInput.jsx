"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function TagsInput({
  id,
  label,
  values = [],
  onChange,
  suggestions = [],
  placeholder = "Type and press Enter",
}) {
  const [input, setInput] = useState("");

  const addTag = (tag) => {
    const trimmed = tag.trim();
    if (!trimmed) return;
    if (values.includes(trimmed)) return;
    onChange([...values, trimmed]);
    setInput("");
  };

  const removeTag = (tag) => {
    onChange(values.filter((v) => v !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(input);
    } else if (e.key === "Backspace" && !input && values.length > 0) {
      removeTag(values[values.length - 1]);
    }
  };

  const availableSuggestions = suggestions.filter((s) => !values.includes(s));

  return (
    <div className="flex flex-col gap-[10px] border-b border-solid border-[#666666] pb-[20px] focus-within:border-[#AF8F5B]">
      <label htmlFor={id} className="text-[14px] leading-[19.5px] text-[#AF8F5B]">
        {label}
      </label>
      <div className="flex flex-wrap items-center gap-[10px]">
        {values.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-[6px] rounded-[10px] bg-[rgba(227,203,166,0.2)] px-[6px] py-[3px] text-[16px] text-[#AF8F5B]"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              aria-label={`Remove ${tag}`}
              className="flex h-5 w-5 items-center justify-center rounded-full text-[#AF8F5B] transition hover:bg-[#AF8F5B]/10"
            >
              <X size={14} strokeWidth={2} />
            </button>
          </span>
        ))}
        <input
          id={id}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => input && addTag(input)}
          placeholder={values.length === 0 ? placeholder : ""}
          className="min-w-[120px] flex-1 border-0 bg-transparent text-[16px] text-black outline-none"
          list={availableSuggestions.length ? `${id}-suggestions` : undefined}
        />
        {availableSuggestions.length > 0 && (
          <datalist id={`${id}-suggestions`}>
            {availableSuggestions.map((s) => (
              <option key={s} value={s} />
            ))}
          </datalist>
        )}
      </div>
    </div>
  );
}