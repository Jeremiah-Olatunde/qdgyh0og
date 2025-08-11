import { EyeOff as IconEyeOff, Eye as IconEye } from "lucide-react";
import { Icon } from "@/components/icon";

type TogglePasswordProps = {
  pressed: boolean;
  onPressedChanged: (pressed: boolean) => void;
};

export function TogglePassword({
  pressed,
  onPressedChanged,
}: TogglePasswordProps) {
  return (
    <button
      type="button"
      onClick={() => onPressedChanged(!pressed)}
      className="cursor-pointer"
    >
      {pressed ? (
        <Icon color="neutral" icon={IconEye} size="md" />
      ) : (
        <Icon color="neutral" icon={IconEyeOff} size="md" />
      )}
    </button>
  );
}
