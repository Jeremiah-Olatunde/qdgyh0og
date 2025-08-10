import { Field } from "@base-ui-components/react/field";

type FieldLabelProps = Record<"htmlFor" | "text", string>;

export function Label({ htmlFor, text }: FieldLabelProps) {
  return (
    <Field.Label htmlFor={htmlFor} className="justify-start flex items-center">
      <span className="font-sora text-xs font-medium capitalize">{text}</span>
    </Field.Label>
  );
}
