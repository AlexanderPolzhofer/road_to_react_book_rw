import React from "react";
import "./InputWithLabel.css";

interface InputWithLabelProps {
  label: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: "text" | "button" | "reset" | "submit" | "password" | "email";
  isFocused: boolean;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  onHandleChange,
  value,
  type = "text",
  isFocused,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      <label className="label" htmlFor={label.toLowerCase()}>{label}:</label>
      &nbsp;
      <input
        className="input"
        ref={inputRef}
        id={label.toLowerCase()}
        type={type}
        onChange={onHandleChange}
        value={value}
        autoFocus={isFocused}
      />
    </div>
  );
};
