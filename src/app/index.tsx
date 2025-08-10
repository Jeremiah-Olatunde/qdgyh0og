import { Input } from "@/components/input";
import * as Field from "@/components/field";
import * as Fieldset from "@/components/fieldset";
import { Form } from "@/components/form";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

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

            <Field.Root name="telephone">
              <Field.Label>Telephone</Field.Label>
              <Input
                autoComplete="tel-national"
                color="neutral"
                placeholder="Enter your phone number"
                type="tel"
              />
            </Field.Root>

            <Button handleClick={() => {}} type="submit">
              <Badge color="purple" size="lg">
                Submit
              </Badge>
            </Button>
          </Fieldset.Root>
        </Form>
      </section>
    </section>
  );
}
