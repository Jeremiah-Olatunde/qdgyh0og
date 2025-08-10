import { Form as BuiForm } from "@base-ui-components/react/form";
import { type PropsWithChildren } from "react";

type FormProps = {};

export function Root({ children }: PropsWithChildren<FormProps>) {
  return <BuiForm>{children}</BuiForm>;
}
