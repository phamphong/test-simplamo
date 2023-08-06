import { clsx } from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import { radioGroupStyleConfig } from "./style";

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
  const [fieldName, setFieldName] = useState(name);
  defaultValue ??= options?.at(0)?.value;
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);

  useEffect(() => {
    if (!fieldName) {
      setFieldName(new Date().getTime().toString());
    }
  }, [fieldName])

  const onCurrentValueChange = useCallback((val: string) => {
    setCurrentValue(val);
    onChange && onChange(val);
  }, [onChange]);

  return (
    <ul className={clsx(
      radioGroupStyleConfig.wrapper
    )}>
      {options.map((option, index) =>
        <li key={`option-${index}`} >
          <input
            type="radio"
            id={`${fieldName}-${option.value}`}
            name={fieldName}
            value={option.value}
            className={clsx(
              radioGroupStyleConfig.input
            )}
            required
            onChange={(e) => onCurrentValueChange(option.value)}
            checked={option.value === currentValue}
          />
          <label
            htmlFor={`${fieldName}-${option.value}`}
            className={clsx(
              radioGroupStyleConfig.label
            )}
          >
            <div className={clsx(
              radioGroupStyleConfig.content
            )}>
              {option.label}
            </div>
          </label>
        </li>
      )}
    </ul>
  );
};
