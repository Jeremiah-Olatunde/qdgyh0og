import { EyeOff as IconEyeOff, Eye as IconEye } from "lucide-react";
import { Toggle as BuiToggle } from "@base-ui-components/react/toggle";

import { Icon } from "@/components/icon";

type ToggleProps = {
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
};

export function Toggle({ pressed, onPressedChange }: ToggleProps) {
  return (
    <BuiToggle
      pressed={pressed}
      onPressedChange={onPressedChange}
      render={(props, state) => {
        return (
          <button {...props} className="cursor-pointer">
            {state.pressed ? (
              <Icon color="neutral" icon={IconEye} size="md" />
            ) : (
              <Icon color="neutral" icon={IconEyeOff} size="md" />
            )}
          </button>
        );
      }}
    />
  );
}
