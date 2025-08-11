import { Tabs as BuiTabs } from "@base-ui-components/react/tabs";

import { Form as CoreForm } from "./core/form";
import * as CoreFieldset from "./core/fieldset";

import type { PropsWithChildren } from "react";

type FormProps = {
  stage: string;
  onStageChange: (stage: string) => void;
};

export function Form({
  children,
  stage,
  onStageChange,
}: PropsWithChildren<FormProps>) {
  return (
    <CoreForm>
      <BuiTabs.Root value={stage} onValueChange={onStageChange}>
        {children}
      </BuiTabs.Root>
    </CoreForm>
  );
}

type StageProps = {
  name: string;
};

export function Stage({ children, name }: PropsWithChildren<StageProps>) {
  return (
    <BuiTabs.Panel value={name}>
      <CoreFieldset.Root>{children}</CoreFieldset.Root>
    </BuiTabs.Panel>
  );
}

type HeaderProps = Record<"title" | "description", string>;

export function Header({ title, description }: HeaderProps) {
  return <CoreFieldset.Legend title={title} description={description} />;
}

export { Input } from "./core/input";
export { Toggle } from "./core/toggle";
export { Label, Root as Field } from "./core/field";
