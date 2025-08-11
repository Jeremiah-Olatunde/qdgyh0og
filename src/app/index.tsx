import { useState } from "react";

import {
  Form,
  Stage,
  Header,
  Input,
  Label,
  Field,
  Toggle,
} from "@/components/form/";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";

export function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [stage, setStage] = useState("stage-one");

  return (
    <section className="p-6">
      <section className="py-16 flex flex-col gap-4">
        <Form stage={stage} onStageChange={setStage}>
          <Stage name="stage-one">
            <Header
              title="The Second Coming"
              description="Surely some revelation is at hand"
            />

            <Field name="name">
              <Label>Full Name</Label>
              <Input
                autoComplete="name"
                color="neutral"
                placeholder="Enter your full name"
                type="text"
              />
            </Field>

            <Field name="telephone">
              <Label>Telephone</Label>
              <Input
                autoComplete="tel-national"
                color="neutral"
                placeholder="Enter your phone number"
                type="tel"
              />
            </Field>

            <Button handleClick={() => setStage("stage-two")} type="button">
              <Badge color="purple" size="lg">
                Next
              </Badge>
            </Button>
          </Stage>

          <Stage name="stage-two">
            <Header
              title="The Second Coming"
              description="Surely some revelation is at hand"
            />

            <Field name="email">
              <Label>Email</Label>
              <Input
                autoComplete="email"
                color="neutral"
                placeholder="Enter your email"
                type="email"
              />
            </Field>

            <Field name="password">
              <Label>Password</Label>
              <Input
                autoComplete="current-password"
                color="neutral"
                placeholder="Choose a password"
                type={passwordVisible ? "text" : "password"}
              >
                <Toggle
                  pressed={passwordVisible}
                  onPressedChange={setPasswordVisible}
                />
              </Input>
            </Field>

            <Field name="confirm-password">
              <Label>Confirm Password</Label>
              <Input
                autoComplete="current-password"
                color="neutral"
                placeholder="Re-enter your password"
                type={passwordVisible ? "text" : "password"}
              >
                <Toggle
                  pressed={passwordVisible}
                  onPressedChange={setPasswordVisible}
                />
              </Input>
            </Field>

            <div className="flex gap-2">
              <Button handleClick={() => setStage("stage-one")} type="button">
                <Badge color="neutral" size="lg">
                  Back
                </Badge>
              </Button>

              <Button handleClick={() => {}} type="submit">
                <Badge color="purple" size="lg">
                  Submit
                </Badge>
              </Button>
            </div>
          </Stage>
        </Form>
      </section>
    </section>
  );
}
