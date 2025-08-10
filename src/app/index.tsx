import { Input } from "@/components/input";

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
          <Input
            autoComplete="name"
            color="neutral"
            name="name"
            placeholder="Enter your full name"
            type="text"
          />

          <Input
            autoComplete="email"
            color="red"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Input
            autoComplete="telephone"
            color="green"
            name="telephone"
            placeholder="Enter your phone number"
            type="tel"
          />

          <Input
            autoComplete="current-password"
            color="yellow"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
        </form>
      </section>
    </section>
  );
}
