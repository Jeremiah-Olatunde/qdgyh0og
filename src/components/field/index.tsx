import { Field } from "@base-ui-components/react/field";
import type { PropsWithChildren } from "react";

type RootProps = { name: string };

export function Root({ name, children }: PropsWithChildren<RootProps>) {
  return (
    <Field.Root name={name} className="flex flex-col gap-2">
      {children}
    </Field.Root>
  );
}

type LabelProps = Record<"htmlFor" | "text", string>;

export function Label({ htmlFor, text }: LabelProps) {
  return (
    <Field.Label htmlFor={htmlFor} className="justify-start flex items-center">
      <span className="font-sora text-xs font-medium capitalize">{text}</span>
    </Field.Label>
  );
}
