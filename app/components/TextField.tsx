import type { InputHTMLAttributes } from "react";

export function TextField({
  label,
  id,
  ...otherProps
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id={id}
        {...otherProps}
      />
    </div>
  );
}
