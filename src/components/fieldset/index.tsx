import { type PropsWithChildren } from "react";
import { Fieldset as BuiFieldset } from "@base-ui-components/react/fieldset";

type FieldSetProps = {};

export function Root({ children }: PropsWithChildren<FieldSetProps>) {
  return (
    <BuiFieldset.Root className="flex flex-col gap-6">
      {children}
    </BuiFieldset.Root>
  );
}

type LegendProps = Record<"title" | "description", string>;

export function Legend({
  title,
  description,

  children,
}: PropsWithChildren<LegendProps>) {
  return (
    <BuiFieldset.Legend>
      <header className="flex flex-col items-center gap-0">
        <h1>
          <span className="font-sora text-xl font-bold text-neutral-600">
            {title}
          </span>
        </h1>

        <h2>
          <span className="font-sora text-sm text-neutral-400">
            {description}
          </span>
        </h2>
        {children}
      </header>
    </BuiFieldset.Legend>
  );
}
