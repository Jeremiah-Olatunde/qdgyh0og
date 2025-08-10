import type { PropsWithChildren } from "react";
import { Field as BuiField } from "@base-ui-components/react/field";

type RootProps = { name: string };

export function Root({ name, children }: PropsWithChildren<RootProps>) {
  return (
    <BuiField.Root name={name} className="flex flex-col gap-2">
      {children}
    </BuiField.Root>
  );
}

type LabelProps = Record<"children", string>;

export function Label({ children }: LabelProps) {
  return (
    <BuiField.Label className="justify-start flex items-center">
      <span className="font-sora text-sm font-medium capitalize text-neutral-600">
        {children}
      </span>
    </BuiField.Label>
  );
}

type DescriptionProps = Record<"children", string>;

export function Description({ children }: DescriptionProps) {
  return (
    <BuiField.Description className="text-neutral-400 text-xs font-sora font-light pb-2">
      {children}
    </BuiField.Description>
  );
}
