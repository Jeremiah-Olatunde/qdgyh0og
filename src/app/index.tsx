import { Input } from "@/components/input";
import * as Field from "@/components/field";

export function App() {
  return (
    <section className="p-6">
      <section className="py-16 flex flex-col gap-4">
        <header className="">
          <h1 className="font-sora font-semibold text-xl text-center text-neutral-600">
            Test Form
          </h1>
          <p className="font-sora font-medium text-sm text-neutral-500 text-center">
            Surely some revelation is at hand!
          </p>
        </header>

        <form className="flex flex-col gap-8">
          <Field.Root name="name">
            <Field.Label>Full Name</Field.Label>
            <Field.Description>
              The name given to you at birth
            </Field.Description>
            <Input
              autoComplete="name"
              color="neutral"
              placeholder="Enter your full name"
              type="text"
            />
          </Field.Root>
        </form>
      </section>
    </section>
  );
}
