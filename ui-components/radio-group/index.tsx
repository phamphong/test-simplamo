import { clsx } from "clsx";
import React, { useCallback, useState } from "react";

interface OptionProps {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  options: OptionProps[];
  onChange?: (val: string) => void
}

export const RadioGroup = ({ options, name, value, defaultValue, onChange }: RadioGroupProps) => {
  name ??= new Date().getTime().toString();
  defaultValue ??= options?.at(0)?.value;
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);

  const onCurrentValueChange = useCallback((val: string) => {
    setCurrentValue(val);
    onChange && onChange(val);
  }, [onChange]);

  return (
    <ul className="flex gap-2 px-2 py-1 shadow-inner shadow-gray-300 bg-gray-200 rounded-lg text-sm leading-4">
      {options.map((option, index) =>
        <li key={`option-${index}`} >
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            className="hidden peer"
            required
            onChange={(e) => onCurrentValueChange(option.value)}
            checked={option.value === currentValue}
          />
          <label
            htmlFor={`${name}-${option.value}`}
            className={clsx(
              "inline-flex items-center justify-between w-full px-3 py-1",
              "text-black font-semibold bg-transparent rounded-md cursor-pointer",
              "peer-checked:border-blue-600 peer-checked:bg-white",
              "hover:text-gray-600 hover:bg-gray-100",
              "drop-shadow-sm"
            )}
          >
            <div className="block">
              {option.label}
            </div>
          </label>
        </li>
      )}
    </ul>
  );
};
