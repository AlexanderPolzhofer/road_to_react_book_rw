import React from "react";
import './Button.css';

interface ButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  children?: JSX.Element | string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};
