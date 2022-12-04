import React from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  children?: JSX.Element | string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
