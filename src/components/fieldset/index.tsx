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
