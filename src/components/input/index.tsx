import { cva, type VariantProps } from "class-variance-authority";

import { tw } from "@/utils/tailwind/index.ts";
import type { PropsWithChildren } from "react";
import { Input as BaseUIInput } from "@base-ui-components/react/input";

const base = tw`flex justify-center gap-2 rounded-xl border-1  outline-2 transition has-focus:shadow-md/10`;
const neutral = tw`border-neutral-200 outline-transparent has-focus:border-neutral-400 has-focus:outline-primary`;
const red = tw`border-red-200 outline-transparent has-focus:outline-red-600`;
const green = tw`border-green-200 outline-transparent has-focus:border-neutral-400 has-focus:outline-green-600`;
const yellow = tw`border-secondary/75 outline-transparent has-focus:border-secondary has-focus:outline-secondary`;

const variants = {
  color: { neutral, red, green, yellow },
} as const;

const generateClasses = cva(base, { variants });
type Variants = VariantProps<typeof generateClasses>;

type InputVariantProps = {
  color: NonNullable<Variants["color"]>;
};

type InputProps = {
  autoComplete: string;
  name: string;
  placeholder: string;
  type: "text" | "email" | "password" | "tel";
};

export function Input({
  autoComplete,
  name,
  type,
  placeholder,
  children,
  color,
}: PropsWithChildren<InputProps & InputVariantProps>) {
  return (
    <div className={generateClasses({ color })}>
      <BaseUIInput
        id={name}
        name={name}
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className="w-0 p-4 grow border-none font-sora text-xs text-neutral-600 outline-none placeholder:text-neutral-400"
      />
      {children && (
        <div className="px-4 flex items-center justify-center">{children}</div>
      )}
    </div>
  );
}
