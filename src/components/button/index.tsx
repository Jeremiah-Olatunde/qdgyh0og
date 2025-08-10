import type { PropsWithChildren } from "react";
import { Badge, type BadgeVariantProps } from "@/components/badge";

type ButtonProps = {
  type: "submit" | "button";
  handleClick: () => void;
};

export function Button({
  children,
  handleClick,
  type,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button type={type} onClick={handleClick} className="w-full cursor-pointer">
      {children}
    </button>
  );
}

export function ButtonBadge({
  children,
  color,
  size,
  type,
  handleClick,
}: PropsWithChildren<ButtonProps & BadgeVariantProps>) {
  return (
    <Button type={type} handleClick={handleClick}>
      <Badge color={color} size={size}>
        {children}
      </Badge>
    </Button>
  );
}
