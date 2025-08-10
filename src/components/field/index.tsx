import { Field as BaseUIField } from "@base-ui-components/react/field";
import type { PropsWithChildren } from "react";

type RootProps = { name: string };

export function Root({ name, children }: PropsWithChildren<RootProps>) {
  return (
    <BaseUIField.Root name={name} className="flex flex-col gap-2">
      {children}
    </BaseUIField.Root>
  );
}

type LabelProps = Record<"children", string>;

export function Label({ children }: LabelProps) {
  return (
    <BaseUIField.Label className="justify-start flex items-center">
      <span className="font-sora text-sm font-medium capitalize text-neutral-600">
        {children}
      </span>
    </BaseUIField.Label>
  );
}

type DescriptionProps = Record<"children", string>;

export function Description({ children }: DescriptionProps) {
  return (
    <BaseUIField.Description className="text-neutral-400 text-xs font-sora font-light pb-2">
      {children}
    </BaseUIField.Description>
  );
}
