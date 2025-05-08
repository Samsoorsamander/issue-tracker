import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: Props) => {
  return (
    <RadixLink asChild>
      <NextLink href={href}>{children}</NextLink>
    </RadixLink>
  );
};

export default Link;
