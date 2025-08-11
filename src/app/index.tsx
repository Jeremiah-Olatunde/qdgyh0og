import { useState } from "react";

import { Input } from "@/components/form/core/input";
import * as Field from "@/components/form/core/field";
import * as Fieldset from "@/components/form/core/fieldset";
import { Form } from "@/components/form/core/form";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { TogglePassword } from "@/components/toggle-password";

export function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <section className="p-6">
      <section className="py-16 flex flex-col gap-4">
        <Form>
          <Fieldset.Root>
            <Fieldset.Legend
              title="The Second Coming"
              description="Surely some revelation is at hand"
            />

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
              <Field.Label>Email </Field.Label>
              <Input
                autoComplete="email"
                color="neutral"
                placeholder="Enter your email"
                type="email"
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

            <Field.Root name="password">
              <Field.Label>Password</Field.Label>
              <Input
                autoComplete="current-password"
                color="neutral"
                placeholder="Choose a password"
                type={passwordVisible ? "text" : "password"}
              >
                <TogglePassword
                  pressed={passwordVisible}
                  onPressedChanged={setPasswordVisible}
                />
              </Input>
            </Field.Root>

            <Field.Root name="confirm-password">
              <Field.Label>Confirm Password</Field.Label>
              <Input
                autoComplete="current-password"
                color="neutral"
                placeholder="Re-enter your password"
                type={passwordVisible ? "text" : "password"}
              >
                <TogglePassword
                  pressed={passwordVisible}
                  onPressedChanged={setPasswordVisible}
                />
              </Input>
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
