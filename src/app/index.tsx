import { Input } from "@/components/input";
import * as Field from "@/components/field";
import * as Fieldset from "@/components/fieldset";
import { Form } from "@/components/form";

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

        <Form>
          <Fieldset.Root>
            <Field.Root name="name">
              <Field.Label>Full Name</Field.Label>
              <Input
                autoComplete="name"
                color="neutral"
                placeholder="Enter your full name"
                type="text"
              />
            </Field.Root>

            <Field.Root name="email">
              <Field.Label>Email</Field.Label>
              <Input
                autoComplete="email"
                color="neutral"
                placeholder="Enter your email"
                type="email"
              />
            </Field.Root>
          </Fieldset.Root>
        </Form>
      </section>
    </section>
  );
}
