import { Switch } from "@radix-ui/themes";

interface Props {
  mode: () => void;
}

const SwitchComponent = ({ mode }: Props) => {
  return <Switch onCheckedChange={mode} />;
};

export default SwitchComponent;
