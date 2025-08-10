import { Form as BuiForm } from "@base-ui-components/react/form";
import { type PropsWithChildren } from "react";

type FormProps = {};

export function Form({ children }: PropsWithChildren<FormProps>) {
  return <BuiForm>{children}</BuiForm>;
}
